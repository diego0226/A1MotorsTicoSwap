/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // AVIF primero: pesa ~30% menos que WebP en las fotos de taller.
    formats: ['image/avif', 'image/webp'],
    // Anchos reales que usa el layout (max-w-7xl / grids de 2-4 columnas).
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Las imágenes del catálogo no cambian: cachear un año.
    minimumCacheTTL: 31536000,
  },

  // NO agregar aquí una redirección www <-> apex. Vercel ya canonicaliza el
  // host en el borde según cuál dominio esté marcado como primario, y una regla
  // en el código que apunte al lado contrario genera un bucle 308 infinito que
  // tumba el sitio entero. El host canónico se controla en dos lugares y solo
  // en esos dos: el dominio primario en Vercel y NEXT_PUBLIC_SITE_URL, que
  // deben coincidir.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ];
  },
};

export default nextConfig;
