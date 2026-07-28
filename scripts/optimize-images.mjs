/**
 * Convierte los PNG originales (~86 MB) a WebP redimensionado en /assets.
 *
 * Los archivos de /assets se importan estáticamente desde los componentes, así
 * que Next.js deduce width/height y genera el blurDataURL automáticamente. En
 * producción next/image sirve además una variante AVIF por encima de estos.
 *
 * Uso: npm run optimize:images -- [--src <dir>] [--out <dir>]
 */
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const args = process.argv.slice(2);
const argValue = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const SRC = path.resolve(argValue('--src', 'src/assets'));
const OUT = path.resolve(argValue('--out', 'assets'));

/**
 * Ancho máximo por carpeta, calculado desde el tamaño real de render:
 * el doble del ancho CSS más grande (para pantallas 2x) y nada más.
 */
const RULES = [
  // Fondo a pantalla completa, va al 50% de opacidad y en escala de grises:
  // aguanta calidad baja sin que se note.
  { match: /herofondo2\.png$/i, width: 1600, quality: 72 },
  // Galería: se muestra en tiles de ~320px (2x = 640). 1200 deja margen
  // para que next/image genere variantes grandes en pantallas anchas.
  { match: /[/\\]galeria[/\\]/i, width: 1200, quality: 78 },
  // Bento de "Nosotros": el tile grande llega a ~700px CSS (2x = 1400).
  { match: /[/\\]nosotros[/\\]workshop\.png$/i, width: 1600, quality: 78 },
  { match: /[/\\]nosotros[/\\]logo\.png$/i, width: 800, quality: 82 },
  { match: /[/\\]nosotros[/\\]/i, width: 1200, quality: 78 },
  // Fichas de producto sobre fondo oscuro: se ven a ~380px CSS (2x = 760).
  { match: /[/\\]engines[/\\]/i, width: 900, quality: 80 },
  { match: /[/\\]transmision[/\\]/i, width: 900, quality: 80 },
];

const DEFAULT_RULE = { width: 1200, quality: 80 };

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const format = (bytes) => `${(bytes / 1048576).toFixed(2)} MB`;

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];

  for await (const file of walk(SRC)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;

    const rel = path.relative(SRC, file);
    const rule = RULES.find((r) => r.match.test(file)) ?? DEFAULT_RULE;
    const dest = path.join(OUT, rel.replace(/\.(png|jpe?g)$/i, '.webp'));

    await mkdir(path.dirname(dest), { recursive: true });

    const input = await readFile(file);
    const image = sharp(input);
    const meta = await image.metadata();

    const output = await image
      // withoutEnlargement evita reescalar hacia arriba las que ya son chicas.
      .resize({ width: rule.width, withoutEnlargement: true })
      .webp({ quality: rule.quality, effort: 6, alphaQuality: 90 })
      .toBuffer();

    await writeFile(dest, output);

    totalBefore += input.length;
    totalAfter += output.length;
    rows.push({
      file: rel.split(path.sep).join('/'),
      from: `${meta.width}x${meta.height}`,
      to: `${Math.min(rule.width, meta.width)}px`,
      before: input.length,
      after: output.length,
    });
  }

  rows.sort((a, b) => b.before - a.before);
  for (const r of rows) {
    const saved = ((1 - r.after / r.before) * 100).toFixed(1);
    console.log(
      `${r.file.padEnd(32)} ${r.from.padEnd(11)} -> ${r.to.padEnd(7)} ${format(r.before).padStart(9)} -> ${format(r.after).padStart(9)}  (-${saved}%)`,
    );
  }

  console.log(
    `\nTotal: ${format(totalBefore)} -> ${format(totalAfter)} ` +
      `(-${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`,
  );
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(SRC))) {
  console.error(`No existe el directorio de origen: ${SRC}`);
  process.exit(1);
}

await run();
