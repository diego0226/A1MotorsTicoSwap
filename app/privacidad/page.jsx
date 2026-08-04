import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import { breadcrumbSchema, buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

const breadcrumb = [
  { name: 'Inicio', path: '/' },
  { name: 'Política de privacidad', path: '/privacidad' },
];

export const metadata = buildMetadata({
  title: 'Política de privacidad',
  description: `Cómo trata ${site.name} los datos que se envían desde este sitio web.`,
  path: '/privacidad',
});

/**
 * Describe únicamente el tratamiento de datos del sitio web, que es lo que se
 * puede afirmar con certeza desde el código: el formulario no guarda nada, solo
 * arma un mensaje de WhatsApp.
 */
const sections = [
  {
    title: 'Qué datos recogemos en este sitio',
    body: [
      'Los formularios de esta web (el botón flotante de WhatsApp y la página de personalizar) piden tu nombre, tu teléfono y una descripción de tu proyecto.',
      'Esa información no se envía ni se almacena en ningún servidor nuestro. Lo único que hace el formulario es abrir WhatsApp con el mensaje ya escrito, para que seas vos quien decida enviarlo. Si cerrás la ventana sin enviar, no nos llega nada.',
    ],
  },
  {
    title: 'Qué pasa cuando enviás el mensaje',
    body: [
      'Al enviarlo, la conversación queda en WhatsApp y se rige por las condiciones y la política de privacidad de WhatsApp (Meta).',
      'Usamos los datos que nos compartás ahí con un solo fin: responder tu consulta y cotizar tu proyecto. No los vendemos ni los compartimos con terceros ajenos al servicio.',
    ],
  },
  {
    title: 'Cookies y analítica',
    body: [
      'Este sitio no instala cookies de seguimiento ni herramientas de analítica de terceros.',
    ],
  },
  {
    title: 'Contenido de terceros',
    body: [
      'La página de contacto incluye un mapa de Google Maps. Al cargarlo, Google puede recibir tu dirección IP y datos del navegador según sus propias políticas.',
    ],
  },
  {
    title: 'Tus derechos',
    body: [
      'Podés pedirnos en cualquier momento que eliminemos la conversación y los datos que nos hayas compartido. Escribinos y lo resolvemos.',
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <PageHeader
        title="Política de privacidad"
        description="Qué hacemos —y qué no— con los datos que nos dejás desde este sitio."
        breadcrumb={breadcrumb}
      />

      <Container className="section-y">
        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                {section.title}
              </h2>
              <div className="space-y-4 font-sans leading-relaxed text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
              Contacto
            </h2>
            <ul className="space-y-2 font-sans leading-relaxed text-muted">
              <li>
                Teléfono y WhatsApp:{' '}
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="text-primary-light underline underline-offset-2 hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>Taller: {site.address.full}</li>
            </ul>
          </section>
        </div>
      </Container>

      <JsonLd schema={breadcrumbSchema(breadcrumb)} />
    </>
  );
}
