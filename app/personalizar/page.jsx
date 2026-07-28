import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import PersonalizarForm from '@/components/PersonalizarForm';
import Reveal from '@/components/Reveal';
import { breadcrumbSchema, buildMetadata } from '@/lib/seo';

const breadcrumb = [
  { name: 'Inicio', path: '/' },
  { name: 'Personalizar', path: '/personalizar' },
];

export const metadata = buildMetadata({
  title: 'Cotizá tu swap LS a la medida',
  description:
    'Contanos qué vehículo tenés y qué motor LS querés instalar. Analizamos la viabilidad del swap y te damos un estimado real para tu proyecto en Costa Rica.',
  path: '/personalizar',
  keywords: [
    'cotizar swap ls costa rica',
    'presupuesto swap ls',
    'swap ls a la medida',
    'conversion ls personalizada',
  ],
});

const steps = [
  {
    title: 'Contanos el proyecto',
    description:
      'Marca, modelo y año del vehículo, el motor LS que tenés en mente y el uso que le vas a dar.',
  },
  {
    title: 'Analizamos la viabilidad',
    description:
      'Revisamos espacio, soportes, cardán, enfriamiento y electrónica antes de comprometer nada.',
  },
  {
    title: 'Te pasamos el estimado',
    description:
      'Con el alcance claro te damos precio y tiempos reales, sin sorpresas a mitad del trabajo.',
  },
];

export default function PersonalizarPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Personalizá <span className="text-primary-light">tu proyecto</span>
          </>
        }
        description="Completá el formulario con los detalles técnicos de tu visión. Nuestro equipo analiza la viabilidad del swap y te contacta con un estimado."
        breadcrumb={breadcrumb}
      />

      <Container className="section-y">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal as="aside" className="lg:col-span-4">
            <h2 className="mb-8 font-display text-2xl font-black uppercase tracking-tight text-white">
              Cómo funciona
            </h2>
            <ol className="space-y-8">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span
                    className="shrink-0 border border-dark-border bg-dark-surface px-4 py-2 font-display text-lg font-black text-secondary"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-base font-bold uppercase text-white">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            delay={120}
            className="border border-dark-border bg-dark-surface p-6 sm:p-8 md:p-10 lg:col-span-8"
          >
            <h2 className="mb-8 font-display text-2xl font-black uppercase tracking-tight text-white">
              Datos del proyecto
            </h2>
            <PersonalizarForm />
          </Reveal>
        </div>
      </Container>

      <JsonLd schema={breadcrumbSchema(breadcrumb)} />
    </>
  );
}
