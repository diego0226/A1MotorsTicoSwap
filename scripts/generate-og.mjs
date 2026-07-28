/**
 * Genera public/og.jpg (1200x630), la tarjeta que se ve al compartir el sitio
 * en WhatsApp, Facebook o X. Se corre a mano cuando cambie la marca o el hero.
 *
 * Uso: node scripts/generate-og.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const W = 1200;
const H = 630;
const SOURCE = path.resolve('assets/herofondo2.webp');
const DEST = path.resolve('public/og.jpg');

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"  stop-color="#0A0A0A" stop-opacity="0.96"/>
      <stop offset="55%" stop-color="#0A0A0A" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0.45"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#scrim)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#E31E24"/>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="#003399"/>

  <rect x="72" y="96" width="352" height="42" fill="#E31E24"/>
  <text x="88" y="125" font-family="Arial, Helvetica, sans-serif" font-size="20"
        font-weight="700" letter-spacing="2.4" fill="#FFFFFF">SWAPS LS EN COSTA RICA</text>

  <text x="72" y="238" font-family="Arial Black, Arial, sans-serif" font-size="82"
        font-weight="900" letter-spacing="-2" fill="#FFFFFF">A1 <tspan fill="#E31E24">MOTORS</tspan></text>
  <text x="72" y="330" font-family="Arial Black, Arial, sans-serif" font-size="82"
        font-weight="900" letter-spacing="-2" fill="#FFFFFF">TICO <tspan fill="#4C7FE8">SWAP</tspan></text>

  <text x="72" y="404" font-family="Arial, Helvetica, sans-serif" font-size="30"
        fill="#E5E2E1">${escape('Conversiones LS, transmisiones GM y tuning con HP Tuners')}</text>

  <rect x="72" y="474" width="6" height="72" fill="#003399"/>
  <text x="96" y="504" font-family="Arial, Helvetica, sans-serif" font-size="25"
        font-weight="700" fill="#FFFFFF">${escape('Grecia, Alajuela · Costa Rica')}</text>
  <text x="96" y="538" font-family="Arial, Helvetica, sans-serif" font-size="23"
        fill="#A9A7A6">a1motorsticoswap.com</text>
</svg>
`);

const base = await sharp(SOURCE)
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .grayscale()
  .modulate({ brightness: 0.85 })
  .toBuffer();

const out = await sharp(base)
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toBuffer();

await mkdir(path.dirname(DEST), { recursive: true });
await writeFile(DEST, out);

console.log(`public/og.jpg  ${W}x${H}  ${(out.length / 1024).toFixed(0)} KB`);
