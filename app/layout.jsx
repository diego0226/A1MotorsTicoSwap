import { Inter, Montserrat } from 'next/font/google';

import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import { localBusinessSchema, websiteSchema } from '@/lib/seo';
import { SITE_URL, site } from '@/lib/site';

import './globals.css';

/**
 * next/font descarga y autoaloja las fuentes en el build. Elimina la petición
 * bloqueante a fonts.googleapis.com y, al reservar las métricas, evita el
 * salto de texto (CLS) que penaliza Core Web Vitals.
 */
// Sin `weight` next/font usa la versión variable: un solo archivo cubre todos
// los grosores en lugar de descargar siete estáticos.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Cada página aporta su título; la marca se añade sola al final.
    default: `Swaps LS en Costa Rica | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: 'automotive',
  alternates: {
    canonical: '/',
    languages: { 'es-CR': '/' },
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    siteName: site.name,
    url: SITE_URL,
    title: `Swaps LS en Costa Rica | ${site.name}`,
    description: site.description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Swaps LS en Costa Rica | ${site.name}`,
    description: site.description,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Los iconos salen de app/icon.png y app/apple-icon.png: Next los detecta y
  // genera las etiquetas <link> solo, sin declararlos aquí.
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: true, address: true },
  // Cuando tengas la propiedad verificada en Google Search Console, pega aquí
  // el código y descomenta: verification: { google: 'tu-codigo' },
};

export const viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es-CR"
      className={`${inter.variable} ${montserrat.variable} no-js`}
      suppressHydrationWarning
    >
      <head>
        {/* Quita `no-js` antes de pintar: con JS activo las animaciones de
            scroll toman el control; sin él, todo queda visible por defecto. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-dark-base antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-secondary focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-bold focus:uppercase focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />

        <main id="contenido" className="flex-1">
          {children}
        </main>

        <Footer />
        <FloatingWhatsApp />

        <JsonLd schema={[localBusinessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
