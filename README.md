# A1 Motors Tico Swap

<p align="center">
  <strong>Especialistas en swaps LS, transmisiones GM y proyectos automotrices de alto rendimiento en Costa Rica.</strong>
</p>

<p align="center">
  Sitio web construido con Next.js y renderizado en el servidor, enfocado en posicionamiento orgánico (SEO) y rendimiento.
</p>

---

## Deploy

https://www.a1motorsticoswap.com

---

## Tecnologías

<p align="left">
  <img src="https://skillicons.dev/icons?i=nextjs,react,js,html,css,tailwind,git,github,vercel" />
</p>

- **Next.js 16** (App Router, React Server Components)
- **React 19**
- **Tailwind CSS 4**
- **sharp** para el pipeline de optimización de imágenes
- **Vercel** para el despliegue

Sin dependencias de UI en tiempo de ejecución: los iconos van inline y las
animaciones son CSS + `IntersectionObserver`.

---

## Instalación

```bash
npm install
```

```bash
npm run dev
```

El sitio queda en http://localhost:3000

### Scripts

| Script                    | Qué hace                                                     |
| ------------------------- | ------------------------------------------------------------ |
| `npm run dev`             | Servidor de desarrollo                                       |
| `npm run build`           | Build de producción                                          |
| `npm run start`           | Sirve el build de producción                                  |
| `npm run lint`            | ESLint con las reglas de Core Web Vitals de Next              |
| `npm run optimize:images` | Convierte PNG/JPG a WebP redimensionado (ver más abajo)       |

---

## Estructura

```
app/            Rutas (App Router), metadata, sitemap, robots y manifest
components/     Componentes de UI (Server Components salvo los marcados)
data/           Paquetes, transmisiones, galería y preguntas frecuentes
lib/            site.js (datos del negocio) y seo.js (metadata + JSON-LD)
assets/         Imágenes optimizadas en WebP, importadas estáticamente
public/         favicon y la imagen Open Graph
scripts/        Utilidades de build para imágenes
```

`lib/site.js` es la fuente única de verdad: teléfono, dirección, horario,
redes sociales y palabras clave. Cambiar un dato ahí lo actualiza en la web,
en el JSON-LD y en la metadata al mismo tiempo.

---

## SEO

- Metadata por página con `title`, `description` y **canonical**
- Datos estructurados JSON-LD: `AutoRepair` (negocio local con coordenadas y
  horario), `WebSite`, `BreadcrumbList`, `ItemList` + `Product` en el catálogo
  y `FAQPage` en la portada
- `sitemap.xml`, `robots.txt` y `manifest.webmanifest` generados por Next
- Todas las rutas se prerenderizan como HTML estático: el rastreador recibe el
  contenido completo sin ejecutar JavaScript
- Texto alternativo descriptivo en todas las imágenes

### Google Business Profile y Search Console

El paso a paso para crear la ficha del negocio, dar de alta el sitio en Search
Console y validar los datos estructurados está en
[`docs/google-business-y-search-console.md`](docs/google-business-y-search-console.md).

### Configurar el dominio

El dominio canónico se define en `NEXT_PUBLIC_SITE_URL`. En Vercel se agrega en
*Settings → Environment Variables*; en local, en un archivo `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://www.a1motorsticoswap.com
```

Si no se define, se usa `https://www.a1motorsticoswap.com` por defecto.

> **El host canónico se define en dos lugares y tienen que coincidir:** el
> dominio primario en *Vercel → Domains* y este `NEXT_PUBLIC_SITE_URL`. Vercel
> canonicaliza el host en el borde; **no** agregues una redirección `www` ↔ apex
> en `next.config.mjs`, porque si apunta al sentido contrario que Vercel se
> genera un bucle 308 infinito y el sitio deja de responder.

---

## Imágenes

Las imágenes de origen pesaban ~86 MB en PNG. El script las convierte a WebP
con el ancho que realmente necesita el diseño:

```bash
npm run optimize:images -- --src <carpeta-origen> --out assets
```

Los archivos de `assets/` se importan estáticamente, así que Next deduce las
dimensiones, genera el *blur placeholder* y sirve AVIF o WebP según el
navegador. Para agregar una foto nueva: pasala por el script y luego importala
desde el componente o el archivo de datos correspondiente.

La imagen que se ve al compartir el enlace se regenera con:

```bash
node scripts/generate-og.mjs
```

---

## Autor

**Diego Zamora**
