import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import PackageCard from '@/components/PackageCard';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import TransmissionCard from '@/components/TransmissionCard';
import { packages } from '@/data/packages';
import { transmissions } from '@/data/transmissions';
import { breadcrumbSchema, buildMetadata, itemListSchema } from '@/lib/seo';

const breadcrumb = [
  { name: 'Inicio', path: '/' },
  { name: 'Catálogo', path: '/catalogo' },
];

export const metadata = buildMetadata({
  title: 'Catálogo de motores LS y transmisiones GM',
  description:
    'Catálogo de paquetes de swap LS en Costa Rica: motores 5.3 Gen 3 y Gen 4, 6.0 LQ4 y LQ9 rectificados, y transmisiones automáticas GM 4L60E, 4L65E, 4L80E y 6L80E.',
  path: '/catalogo',
  keywords: [
    'catalogo motores ls costa rica',
    'paquetes swap ls',
    'motor ls 5.3 costa rica',
    'motor 6.0 lq4 costa rica',
    'motor 6.0 lq9 costa rica',
    'transmision 4l60e',
    'transmision 4l80e',
    'transmision 6l80e',
  ],
});

export default function CatalogoPage() {
  const schema = [
    breadcrumbSchema(breadcrumb),
    itemListSchema({
      name: 'Paquetes de swap LS',
      description:
        'Motores GM LS rectificados con transmisión, para conversiones en Costa Rica.',
      path: '/catalogo',
      items: packages.map((pkg) => ({
        name: pkg.name,
        description: pkg.description,
        image: pkg.image.src,
        category: 'Motor LS para swap',
      })),
    }),
    itemListSchema({
      name: 'Transmisiones automáticas GM',
      description:
        'Transmisiones 4L60E, 4L65E, 4L80E y 6L80E para acompañar un swap LS.',
      path: '/catalogo',
      items: transmissions.map((t) => ({
        name: t.name,
        description: t.description,
        image: t.image.src,
        category: 'Transmisión automática GM',
      })),
    }),
  ];

  return (
    <>
      <PageHeader
        title="Catálogo"
        description="Motores LS, paquetes completos y transmisiones automáticas GM para llevar tu proyecto al siguiente nivel. Todos los precios se cotizan según el vehículo aceptor."
        breadcrumb={breadcrumb}
      />

      <Container as="section" className="section-y" aria-labelledby="paquetes-swap">
        <SectionHeading
          id="paquetes-swap"
          eyebrow={`${packages.length} configuraciones disponibles`}
          title="Paquetes de swap"
          description="Cada paquete combina un motor LS rectificado con la transmisión GM que le corresponde, en configuración de chicote o pedal electrónico."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.id} delay={Math.min(index * 80, 320)} className="h-full">
              {/* Las tres primeras fichas suelen estar sobre la línea de
                  flotación: se cargan con prioridad para no retrasar el LCP. */}
              <PackageCard pkg={pkg} priority={index < 3} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container
        as="section"
        className="pb-24 md:pb-32"
        aria-labelledby="transmisiones"
      >
        <SectionHeading
          id="transmisiones"
          eyebrow="Transmisiones automáticas GM"
          title="Transmisiones"
          description="La caja adecuada define cuánto torque aguanta el proyecto. Te ayudamos a elegir según el uso real del vehículo."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transmissions.map((transmission, index) => (
            <Reveal key={transmission.id} delay={index * 80} className="h-full">
              <TransmissionCard transmission={transmission} />
            </Reveal>
          ))}
        </div>
      </Container>

      <JsonLd schema={schema} />
    </>
  );
}
