import { absoluteUrl, SITE_URL } from '@/lib/site';

/**
 * Rastreadores de IA que buscan y citan fuentes. Se declaran explícitamente
 * aunque la regla `*` ya los cubra: así queda escrito que la decisión de que
 * puedan leer el sitio es deliberada, y una regla restrictiva agregada después
 * sobre `*` no los deja fuera por accidente. Si alguno de estos queda
 * bloqueado, esa plataforma directamente no puede citar el sitio.
 */
const AI_CRAWLERS = [
  'GPTBot', // OpenAI — ChatGPT
  'OAI-SearchBot', // OpenAI — búsqueda de ChatGPT
  'ChatGPT-User', // OpenAI — navegación a pedido del usuario
  'PerplexityBot', // Perplexity
  'Perplexity-User',
  'ClaudeBot', // Anthropic — Claude
  'Claude-User',
  'Google-Extended', // Google — Gemini y AI Overviews
  'Applebot-Extended', // Apple Intelligence
  'cohere-ai',
];

export default function robots() {
  return {
    rules: [
      // Sin `disallow`: Google necesita poder descargar el JS y el CSS para
      // renderizar la página como la ve un usuario. Bloquear /_next/ es una de
      // las causas más comunes de avisos de "recurso bloqueado" en Search Console.
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL,
  };
}
