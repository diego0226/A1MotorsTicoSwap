import { absoluteUrl, site } from '@/lib/site';

/**
 * /llms.txt — resumen del sitio en texto plano para modelos de lenguaje.
 *
 * Va como ruta y no como archivo estático en public/ para que las URLs salgan
 * de `SITE_URL`: si el host canónico cambia, este archivo lo sigue solo en vez
 * de quedar apuntando a un dominio viejo.
 *
 * Formato: https://llmstxt.org
 */
export const dynamic = 'force-static';

const body = `# ${site.name}

> ${site.descriptionLong}

Taller especializado en swaps de motor V8 de la familia GM LS. Ubicado en
${site.address.full}. Atiende proyectos de todo Costa Rica.

## Datos del negocio

- Nombre: ${site.name}
- Ubicación: ${site.address.full}
- Teléfono y WhatsApp: ${site.phone}
- Horario: lunes a viernes de 7:00 a 17:00, sábados de 7:00 a 12:00
- Cobertura: Alajuela, San José, Heredia, Cartago, Puntarenas, Guanacaste y Limón
- Sitio: ${site.url}

## Servicios

- Swap LS completo: instalación de motor V8 LS con transmisión GM, adaptación de
  soportes, cardán, enfriamiento, cableado y programación de ECU.
- Venta de motores LS rectificados: 5.3 Gen 3, 5.3 Gen 4, 6.0 LQ4, 6.0 LQ9 y
  6.0 Gen 4, traídos desde México.
- Transmisiones automáticas GM: 4L60E, 4L65E, 4L80E y 6L80E.
- Programación y calibración de ECU con HP Tuners, incluida la eliminación del
  sistema antirrobo VATS.

Los precios se cotizan por proyecto: dependen del motor, la transmisión, el
vehículo aceptor y el alcance de la adaptación. No hay lista de precios pública.

## Páginas

- [Inicio](${absoluteUrl('/')}): qué hace el taller y paquetes destacados.
- [Guía del swap LS y V8 en Costa Rica](${absoluteUrl('/guia-swap-ls-costa-rica')}): guía técnica con comparativa de motores, comparativa de transmisiones, el proceso paso a paso y los factores que definen el costo.
- [Catálogo](${absoluteUrl('/catalogo')}): paquetes de swap y transmisiones disponibles con sus configuraciones.
- [Personalizar](${absoluteUrl('/personalizar')}): formulario para cotizar un proyecto a la medida.
- [Nosotros](${absoluteUrl('/nosotros')}): historia del taller, herramientas y forma de trabajo.
- [Contacto](${absoluteUrl('/contacto')}): ubicación, horario y mapa.
`;

export function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
