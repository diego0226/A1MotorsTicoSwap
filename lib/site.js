/**
 * Fuente única de verdad para datos del negocio, URLs y palabras clave.
 * Todo lo que toca SEO (metadata, JSON-LD, sitemap) lee de aquí para que no
 * haya un teléfono o una dirección desactualizada en tres archivos distintos.
 */

/**
 * Host canónico. Tiene que coincidir con el dominio marcado como primario en
 * Vercel: si uno dice www y el otro el apex, Vercel redirige en un sentido, el
 * canonical apunta al otro y Google recibe señales contradictorias.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.a1motorsticoswap.com'
).replace(/\/$/, '');

export const site = {
  name: 'A1 Motors Tico Swap',
  shortName: 'A1 Motors Tico Swap',
  legalName: 'A1 Motors Tico Swap',
  url: SITE_URL,
  locale: 'es_CR',
  lang: 'es-CR',

  tagline: 'Especialistas en swaps LS y motores V8 en Costa Rica',

  /**
   * Meta description. Se mantiene bajo ~155 caracteres porque Google trunca
   * ahí: la versión anterior pasaba de 200 y se cortaba a media frase.
   */
  description:
    'Especialistas en swaps LS y motores V8 en Costa Rica. Motores 5.3, 6.0 LQ4 y LQ9 rectificados, transmisiones GM y calibración de ECU con HP Tuners.',

  /** Versión larga, para el JSON-LD, donde no hay límite de truncado. */
  descriptionLong:
    'A1 Motors Tico Swap es un taller costarricense especializado en swaps de motores V8 de la familia GM LS. Instalamos motores LS 5.3, 6.0 LQ4 y LQ9 rectificados, transmisiones automáticas GM 4L60E, 4L65E, 4L80E y 6L80E, y calibramos la ECU con HP Tuners. El taller está en Grecia, Alajuela, y atendemos proyectos de todo Costa Rica.',

  // Sin correo público: el contacto va por WhatsApp y teléfono. Si algún día se
  // habilita un buzón en el dominio, agregarlo aquí y volver a exponerlo en
  // /contacto, /privacidad y el JSON-LD del negocio.
  phone: '+506 8994 8485',
  phoneRaw: '+50689948485',
  whatsapp: '50689948485',

  address: {
    locality: 'Grecia',
    region: 'Alajuela',
    country: 'CR',
    countryName: 'Costa Rica',
    full: 'Grecia, Alajuela, Costa Rica',
  },

  // Coordenadas del centro de Grecia, Alajuela. Ajustar a la dirección exacta
  // del taller mejora el posicionamiento en el mapa local de Google.
  geo: { latitude: 10.0725, longitude: -84.3128 },

  maps: {
    directions: 'https://maps.app.goo.gl/JuNr1F3gQxaNp3886',
    place: 'https://maps.app.goo.gl/P8TPUhDnyj2MtQmMA',
    embed:
      'https://maps.google.com/maps?q=Grecia,+Alajuela,+Costa+Rica&output=embed&z=15',
  },

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61555571203804',
    instagram: 'https://www.instagram.com/a1motors_ticoswaps_',
  },

  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '17:00' },
    { days: ['Saturday'], opens: '07:00', closes: '12:00' },
  ],

  hoursText: 'Lunes a Viernes: 7am - 5pm\nSábados: 7am - 12pm',

  /**
   * Términos objetivo. Van en `keywords` y, más importante, guían los textos
   * visibles: Google pesa mucho más el contenido real que esta etiqueta.
   */
  keywords: [
    // Términos objetivo principales, en el orden de prioridad del negocio.
    'v8 costa rica',
    'motor v8 costa rica',
    'ls en costa rica',
    'ls swap costa rica',
    'swap v8 costa rica',
    'swaps ls costa rica',
    'swaps ls',
    'swaps costa rica',
    'a1motorsticoswap',
    'a1 motors tico swap',
    'motores ls costa rica',
    'conversion ls costa rica',
    'motor ls 5.3',
    'motor ls 6.0 lq4',
    'motor ls 6.0 lq9',
    'transmision 4l60e costa rica',
    'transmision 4l80e costa rica',
    'hp tuners costa rica',
    'taller ls grecia alajuela',
  ],
};

/** Enlace de WhatsApp con mensaje prellenado. */
export function whatsappUrl(message) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** URL absoluta, requerida por canonical, sitemap y Open Graph. */
export function absoluteUrl(pathname = '/') {
  return `${SITE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}

/** Navegación principal, compartida por el header, el footer y el sitemap. */
export const navigation = [
  { name: 'Inicio', path: '/' },
  { name: 'Catálogo', path: '/catalogo' },
  { name: 'Guía', path: '/guia-swap-ls-costa-rica' },
  { name: 'Personalizar', path: '/personalizar' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
];
