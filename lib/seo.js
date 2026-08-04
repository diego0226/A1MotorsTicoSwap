import { absoluteUrl, site } from './site';

/**
 * Construye el objeto `metadata` de una página con canonical y Open Graph.
 * El canonical es lo que evita que Google trate `/catalogo` y `/catalogo?x=1`
 * como páginas distintas y reparta la autoridad entre ambas.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  keywords,
  images,
  type = 'website',
}) {
  const url = absoluteUrl(path);
  const ogImages = images ?? [
    {
      url: absoluteUrl('/og.jpg'),
      width: 1200,
      height: 630,
      alt: `${site.name} — ${site.tagline}`,
    },
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: site.name,
      locale: site.locale,
      title,
      description,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((i) => i.url),
    },
  };
}

const ORGANIZATION_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * AutoRepair es un subtipo de LocalBusiness: le dice a Google exactamente qué
 * clase de negocio es y es lo que alimenta el panel lateral y el mapa local
 * cuando alguien busca "swaps ls costa rica".
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': ORGANIZATION_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    image: absoluteUrl('/og.jpg'),
    logo: absoluteUrl('/og.jpg'),
    telephone: site.phoneRaw,
    priceRange: '$$',
    currenciesAccepted: 'CRC, USD',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.maps.place,
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { '@type': 'Country', name: 'Costa Rica' },
      { '@type': 'AdministrativeArea', name: 'Alajuela' },
      { '@type': 'AdministrativeArea', name: 'San José' },
      { '@type': 'AdministrativeArea', name: 'Heredia' },
      { '@type': 'AdministrativeArea', name: 'Puntarenas' },
      { '@type': 'AdministrativeArea', name: 'Guanacaste' },
    ],
    sameAs: [site.social.facebook, site.social.instagram],
    knowsAbout: [
      'Swap LS',
      'Conversión de motores LS',
      'Motores GM LS 5.3, 6.0 LQ4 y LQ9',
      'Transmisiones automáticas GM 4L60E, 4L65E, 4L80E y 6L80E',
      'Programación de ECU con HP Tuners',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Swap LS completo',
          description:
            'Instalación de motor LS con transmisión GM, adaptación de soportes, cableado y programación de ECU.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Programación y afinación de ECU con HP Tuners',
          description:
            'Desbloqueo de computadora, eliminación de VATS y calibración completa de motor y transmisión.',
        },
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: site.lang,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/**
 * Las migas de pan aparecen en el resultado de búsqueda en lugar de la URL
 * cruda, lo que sube el porcentaje de clics.
 */
export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Lista de productos del catálogo (paquetes de swap y transmisiones). */
export function itemListSchema({ name, description, path, items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        description: item.description,
        image: absoluteUrl(item.image),
        brand: { '@type': 'Brand', name: 'General Motors' },
        category: item.category,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'CRC',
          // Sin precio público: el catálogo trabaja por cotización.
          price: '0',
          priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
          url: absoluteUrl(path),
          seller: { '@id': ORGANIZATION_ID },
        },
      },
    })),
  };
}
