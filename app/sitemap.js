import { projects } from '@/data/projects';
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
    { path: '/proyectos', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/guia-swap-ls-costa-rica', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/personalizar', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/nosotros', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contacto', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacidad', priority: 0.3, changeFrequency: 'yearly' },
  ];

  // Cada proyecto entra solo al sitemap: agregar uno a data/projects.js basta
  // para que Google lo descubra, sin tocar este archivo.
  const projectRoutes = projects.map((project) => ({
    path: `/proyectos/${project.slug}`,
    priority: 0.8,
    changeFrequency: 'yearly',
    // Un proyecto terminado no cambia: se declara su fecha real en vez de
    // "hoy", que es lo que hace que Google deje de creerle al sitemap.
    lastModified: new Date(project.date),
  }));

  return [...routes, ...projectRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified ?? lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
