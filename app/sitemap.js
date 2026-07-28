import { absoluteUrl } from '@/lib/site';

/**
 * Se genera en /sitemap.xml y se declara en robots.txt.
 * Enviarlo a Google Search Console acelera muchísimo la indexación inicial.
 */
export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/catalogo', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/personalizar', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/nosotros', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contacto', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacidad', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
