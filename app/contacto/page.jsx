import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { Clock, MapPin, Navigation, Phone, WhatsApp } from '@/components/icons';
import { breadcrumbSchema, buildMetadata } from '@/lib/seo';
import { site, whatsappUrl } from '@/lib/site';

const breadcrumb = [
  { name: 'Inicio', path: '/' },
  { name: 'Contacto', path: '/contacto' },
];

export const metadata = buildMetadata({
  title: 'Contacto — Taller de swaps LS en Grecia, Alajuela',
  description: `Contactá a A1 Motors Tico Swap: ${site.phone}. Taller de swaps LS en Grecia, Alajuela, con servicio para todo Costa Rica. Lunes a viernes de 7am a 5pm y sábados de 7am a 12pm.`,
  path: '/contacto',
  keywords: [
    'contacto a1 motors tico swap',
    'taller swaps ls grecia',
    'telefono swap ls costa rica',
    'taller ls alajuela',
  ],
});

const contactInfo = [
  {
    Icon: MapPin,
    title: 'Ubicación',
    detail: 'Alajuela, Grecia.\nTocá aquí para la dirección exacta del taller.',
    href: site.maps.directions,
  },
  {
    Icon: Phone,
    title: 'Teléfono',
    detail: site.phone,
    href: `tel:${site.phoneRaw}`,
  },
  {
    Icon: Clock,
    title: 'Horario',
    detail: site.hoursText,
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Estamos listos para escuchar tu proyecto. Escribinos por WhatsApp, llamanos o pasá por el taller en Grecia, Alajuela."
        breadcrumb={breadcrumb}
      />

      <Container className="section-y">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactInfo.map(({ Icon, title, detail, href }, index) => {
            const isExternal = href?.startsWith('http');
            const content = (
              <>
                <span className="mb-6 flex justify-center text-primary-light">
                  <Icon size={32} />
                </span>
                <h2 className="mb-3 font-display font-bold uppercase text-white">
                  {title}
                </h2>
                <p className="whitespace-pre-line font-sans text-sm text-muted">
                  {detail}
                </p>
              </>
            );

            return (
              <Reveal as="li" key={title} delay={index * 100} className="h-full">
                {href ? (
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="block h-full border border-dark-border bg-dark-surface p-8 text-center transition-colors duration-300 hover:border-primary-light"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full border border-dark-border bg-dark-surface p-8 text-center">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-12 border border-dark-border bg-dark-surface p-8 text-center md:p-12">
          <h2 className="mb-4 font-display text-2xl font-black uppercase tracking-tight text-white">
            La vía más rápida es WhatsApp
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-sans text-muted">
            Mandanos la marca, el modelo y el año de tu vehículo y te decimos qué
            swap LS le calza.
          </p>
          <a
            href={whatsappUrl(
              'Hola A1 Motors Tico Swap, quiero consultar sobre un swap LS.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-secondary bg-secondary px-10 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-transparent hover:text-secondary"
          >
            <WhatsApp size={18} />
            Escribir por WhatsApp
          </a>
        </Reveal>

        {/* Mapa */}
        <section className="mt-20" aria-labelledby="encuentranos">
          <SectionHeading
            id="encuentranos"
            eyebrow="Cómo llegar"
            title="Encuentranos"
            align="center"
            description="El taller está en Grecia, Alajuela. Atendemos proyectos de todo Costa Rica."
          />

          <Reveal className="relative mt-12 border-2 border-dark-border">
            <span
              className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l-2 border-t-2 border-secondary"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute right-0 top-0 z-10 h-6 w-6 border-r-2 border-t-2 border-secondary"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute bottom-0 left-0 z-10 h-6 w-6 border-b-2 border-l-2 border-secondary"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute bottom-0 right-0 z-10 h-6 w-6 border-b-2 border-r-2 border-secondary"
              aria-hidden="true"
            />

            <iframe
              src={site.maps.embed}
              title="Mapa de la ubicación de A1 Motors Tico Swap en Grecia, Alajuela"
              className="block h-64 w-full sm:h-80 md:h-96 lg:h-[30rem]"
              style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
              // El mapa de Google es pesado: que cargue solo si el usuario
              // llega hasta aquí, no en el primer render.
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          {/* El enlace va fuera del iframe: un <a> no puede contener contenido
              interactivo y así también funciona con teclado. */}
          <a
            href={site.maps.place}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-between gap-3 border border-t-0 border-dark-border bg-dark-surface px-5 py-4 transition-colors duration-300 hover:border-primary-light hover:bg-primary sm:flex-row sm:px-6"
          >
            <span className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-secondary" />
              <span className="font-sans text-xs text-accent transition-colors group-hover:text-white sm:text-sm">
                {site.address.full}
              </span>
            </span>
            <span className="flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-widest text-accent transition-colors group-hover:text-white sm:text-xs">
              <Navigation size={13} />
              Ver dirección exacta en Google Maps
            </span>
          </a>
        </section>
      </Container>

      <JsonLd schema={breadcrumbSchema(breadcrumb)} />
    </>
  );
}
