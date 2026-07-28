import { absoluteUrl, SITE_URL } from '@/lib/site';

export default function robots() {
  return {
    // Sin `disallow`: Google necesita poder descargar el JS y el CSS para
    // renderizar la página como la ve un usuario. Bloquear /_next/ es una de
    // las causas más comunes de avisos de "recurso bloqueado" en Search Console.
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL,
  };
}
