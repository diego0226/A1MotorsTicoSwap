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
    description: site.descriptionLong,
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
      { '@type': 'AdministrativeArea', name: 'Cartago' },
      { '@type': 'AdministrativeArea', name: 'Puntarenas' },
      { '@type': 'AdministrativeArea', name: 'Guanacaste' },
      { '@type': 'AdministrativeArea', name: 'Limón' },
    ],
    sameAs: [site.social.facebook, site.social.instagram],
    // Los términos que definen la entidad ante Google y ante los modelos que
    // responden "¿dónde hacen swaps V8 en Costa Rica?". "Motor V8" va explícito
    // porque es una de las búsquedas objetivo y no se infiere sola de "LS".
    knowsAbout: [
      'Swap de motor V8',
      'Motores V8 GM de la familia LS',
      'Swap LS',
      'Conversión de motores LS',
      'Motores GM LS 5.3, 6.0 LQ4 y LQ9',
      'Transmisiones automáticas GM 4L60E, 4L65E, 4L80E y 6L80E',
      'Programación y calibración de ECU con HP Tuners',
      'Eliminación de sistema antirrobo VATS',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de swap LS y V8',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Swap LS completo',
            serviceType: 'Conversión de motor V8',
            description:
              'Instalación de motor V8 LS con transmisión GM, adaptación de soportes, cardán, enfriamiento, cableado y programación de ECU.',
            areaServed: { '@type': 'Country', name: 'Costa Rica' },
            provider: { '@id': ORGANIZATION_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Venta de motores LS rectificados',
            serviceType: 'Venta de motores V8',
            description:
              'Motores GM LS 5.3, 6.0 LQ4 y LQ9 rectificados, con la transmisión GM correspondiente.',
            areaServed: { '@type': 'Country', name: 'Costa Rica' },
            provider: { '@id': ORGANIZATION_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Programación y afinación de ECU con HP Tuners',
            serviceType: 'Calibración de ECU',
            description:
              'Desbloqueo de computadora, eliminación de VATS y calibración completa de motor y transmisión.',
            areaServed: { '@type': 'Country', name: 'Costa Rica' },
            provider: { '@id': ORGANIZATION_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalación de transmisiones automáticas GM',
            serviceType: 'Transmisión automática',
            description:
              'Selección e instalación de 4L60E, 4L65E, 4L80E y 6L80E según el torque y el uso real del vehículo.',
            areaServed: { '@type': 'Country', name: 'Costa Rica' },
            provider: { '@id': ORGANIZATION_ID },
          },
        },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.descriptionLong,
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

/**
 * Contenido editorial con autoría y fechas. El `dateModified` es lo que leen
 * tanto Google como los modelos de IA para decidir si la información sigue
 * vigente: sin fecha, una guía compite en desventaja contra una fechada.
 */
export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    inLanguage: site.lang,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: absoluteUrl(image ?? '/og.jpg'),
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(path) },
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/**
 * Proceso paso a paso. Es el schema que alimenta las respuestas de "cómo se
 * hace un swap LS" en AI Overviews y en Perplexity, donde el formato numerado
 * se extrae mucho mejor que un párrafo corrido.
 */
export function howToSchema({ name, description, path, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: site.lang,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${absoluteUrl(path)}#${step.id}`,
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
        // El catálogo trabaja por cotización, así que la oferta va sin precio.
        // Antes declaraba `price: '0'`, que es falso: Google lo interpreta como
        // producto gratis y descarta el snippet por precio inconsistente. Es
        // preferible perder el rich result de precio que declarar uno inventado.
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/RefurbishedCondition',
          priceCurrency: 'CRC',
          url: absoluteUrl(path),
          seller: { '@id': ORGANIZATION_ID },
        },
      },
    })),
  };
}
