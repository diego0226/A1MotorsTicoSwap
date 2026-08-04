import Link from 'next/link';

import CTA from '@/components/CTA';
import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import {
  costFactors,
  engineComparison,
  swapSteps,
  transmissionComparison,
} from '@/data/guia';
import {
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
  howToSchema,
} from '@/lib/seo';

const PATH = '/guia-swap-ls-costa-rica';

/**
 * Fechas del artículo. Se declaran a mano y no con `new Date()` porque una
 * fecha que se mueve sola en cada build es una señal falsa de frescura:
 * actualizala solo cuando el contenido cambie de verdad.
 */
const PUBLISHED = '2026-08-04';
const MODIFIED = '2026-08-04';

const breadcrumb = [
  { name: 'Inicio', path: '/' },
  { name: 'Guía del swap LS', path: PATH },
];

export const metadata = buildMetadata({
  title: 'Guía del swap LS y V8 en Costa Rica',
  description:
    'Qué es un swap LS, qué motor V8 conviene, qué transmisión GM le corresponde y qué define el costo. Guía técnica para hacer una conversión V8 en Costa Rica.',
  path: PATH,
  type: 'article',
  keywords: [
    'guia swap ls',
    'swap ls costa rica',
    'motor v8 costa rica',
    'v8 costa rica',
    'ls en costa rica',
    'como hacer un swap ls',
    'que motor ls elegir',
    'transmision para swap ls',
  ],
});

/** Bloque de respuesta directa: lo primero que lee un modelo al citar la sección. */
function KeyAnswer({ children }) {
  return (
    <p className="border-l-4 border-secondary bg-dark-surface p-6 font-sans text-base leading-relaxed text-accent sm:text-lg">
      {children}
    </p>
  );
}

function TableWrap({ children, caption }) {
  return (
    <div className="mt-10 overflow-x-auto border border-dark-border">
      <table className="w-full min-w-[46rem] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        {children}
      </table>
    </div>
  );
}

const TH =
  'border-b border-dark-border bg-dark-surface px-5 py-4 font-sans text-xs font-bold uppercase tracking-wider text-secondary';
const TD =
  'border-b border-dark-border px-5 py-4 align-top font-sans text-sm text-muted';

export default function GuiaPage() {
  const schema = [
    breadcrumbSchema(breadcrumb),
    articleSchema({
      title: 'Guía del swap LS y V8 en Costa Rica',
      description:
        'Guía técnica sobre conversiones a motor V8 de la familia GM LS en Costa Rica: selección de motor, transmisión, proceso de instalación y factores de costo.',
      path: PATH,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
    }),
    howToSchema({
      name: 'Cómo se hace un swap LS paso a paso',
      description:
        'Proceso completo de una conversión a motor V8 LS, desde el diagnóstico del vehículo aceptor hasta la calibración final de la ECU.',
      path: PATH,
      steps: swapSteps,
    }),
  ];

  return (
    <>
      <PageHeader
        title="Guía del swap LS y V8 en Costa Rica"
        description="Todo lo que define una conversión a motor V8: qué motor elegir, qué transmisión le corresponde, cómo es el proceso y qué mueve el precio."
        breadcrumb={breadcrumb}
      >
        <p className="mt-6 font-sans text-xs uppercase tracking-wider text-muted">
          Actualizado el{' '}
          <time dateTime={MODIFIED}>4 de agosto de 2026</time>
        </p>
      </PageHeader>

      <Container as="article" className="section-y">
        {/* Qué es */}
        <section aria-labelledby="que-es">
          <SectionHeading
            id="que-es"
            eyebrow="Lo básico"
            title="¿Qué es un swap LS?"
          />
          <Reveal className="mt-10 max-w-3xl space-y-6">
            <KeyAnswer>
              Un swap LS es el reemplazo del motor original de un vehículo por un
              motor V8 de la familia GM LS: 4.8, 5.3, 6.0 o 6.2 litros. Se elige
              esa familia porque es compacta para ser un V8, mecánicamente
              sencilla y tiene la mayor disponibilidad de repuestos y mejoras del
              mercado.
            </KeyAnswer>
            <p className="font-sans leading-relaxed text-muted">
              En Costa Rica es la conversión más común para modernizar pick-ups y
              armar proyectos de alto rendimiento sin depender de un motor de
              fábrica difícil de conseguir. La familia LS se produce desde 1997,
              así que hay motores, cajas y partes de reemplazo en circulación
              constante.
            </p>
            <p className="font-sans leading-relaxed text-muted">
              Por eso <strong className="text-accent">swap LS</strong> y{' '}
              <strong className="text-accent">swap V8</strong> se usan casi como
              sinónimos en el ambiente automotriz: LS es, en la práctica, la
              familia V8 con la que se hacen la mayoría de conversiones.
            </p>
          </Reveal>
        </section>

        {/* Qué motor */}
        <section className="mt-24" aria-labelledby="que-motor">
          <SectionHeading
            id="que-motor"
            eyebrow="Selección"
            title="¿Qué motor V8 conviene?"
          />
          <Reveal className="mt-10 max-w-3xl">
            <KeyAnswer>
              Para la mayoría de proyectos en Costa Rica el LS 5.3 es el punto de
              equilibrio: es el V8 más disponible, el más económico de mantener y
              le sobra potencia a casi cualquier plataforma. El 6.0 LQ4 y el LQ9
              se eligen cuando el vehículo carga peso o se busca más torque desde
              bajas revoluciones.
            </KeyAnswer>
          </Reveal>

          <Reveal>
            <TableWrap caption="Comparativa de motores V8 de la familia LS">
              <thead>
                <tr>
                  <th scope="col" className={TH}>Motor</th>
                  <th scope="col" className={TH}>Cilindrada</th>
                  <th scope="col" className={TH}>Bloque</th>
                  <th scope="col" className={TH}>Potencia de fábrica</th>
                  <th scope="col" className={TH}>Para quién</th>
                </tr>
              </thead>
              <tbody>
                {engineComparison.map((engine) => (
                  <tr key={engine.name}>
                    <th
                      scope="row"
                      className={`${TD} font-display font-bold uppercase text-white`}
                    >
                      {engine.name}
                    </th>
                    <td className={TD}>{engine.displacement}</td>
                    <td className={TD}>{engine.block}</td>
                    <td className={TD}>{engine.factoryPower}</td>
                    <td className={TD}>{engine.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrap>
          </Reveal>

          <Reveal className="mt-6 max-w-3xl">
            <p className="font-sans text-sm leading-relaxed text-muted">
              Las potencias son las cifras de fábrica publicadas por General
              Motors y varían según el año y las culatas. Sirven para comparar
              motores entre sí, no como la potencia final del swap: eso depende
              del estado del motor, la calibración y los accesorios. Podés ver las
              configuraciones disponibles en el{' '}
              <Link
                href="/catalogo"
                className="text-primary-light underline underline-offset-2 hover:text-white"
              >
                catálogo de paquetes
              </Link>
              .
            </p>
          </Reveal>
        </section>

        {/* Transmisión */}
        <section className="mt-24" aria-labelledby="que-transmision">
          <SectionHeading
            id="que-transmision"
            eyebrow="Transmisión"
            title="¿Qué transmisión le corresponde?"
          />
          <Reveal className="mt-10 max-w-3xl">
            <KeyAnswer>
              La transmisión se elige por el torque que va a recibir y por el uso
              real del vehículo, no por el motor solo. La 4L60E cubre la mayoría
              de swaps de 5.3; la 4L80E es la de trabajo pesado; la 6L80E, de seis
              velocidades, es la de mejor rendimiento en carretera.
            </KeyAnswer>
          </Reveal>

          <Reveal>
            <TableWrap caption="Comparativa de transmisiones automáticas GM">
              <thead>
                <tr>
                  <th scope="col" className={TH}>Transmisión</th>
                  <th scope="col" className={TH}>Velocidades</th>
                  <th scope="col" className={TH}>Tracción</th>
                  <th scope="col" className={TH}>Cuándo elegirla</th>
                </tr>
              </thead>
              <tbody>
                {transmissionComparison.map((t) => (
                  <tr key={t.name}>
                    <th
                      scope="row"
                      className={`${TD} font-display font-bold uppercase text-white`}
                    >
                      {t.name}
                    </th>
                    <td className={TD}>{t.speeds}</td>
                    <td className={TD}>{t.traction}</td>
                    <td className={TD}>{t.whenToChoose}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrap>
          </Reveal>
        </section>

        {/* Proceso */}
        <section className="mt-24" aria-labelledby="proceso">
          <SectionHeading
            id="proceso"
            eyebrow="Paso a paso"
            title="Cómo se hace un swap LS"
          />
          <Reveal className="mt-10 max-w-3xl">
            <KeyAnswer>
              Un swap LS tiene siete etapas: diagnóstico del vehículo, selección
              de motor y transmisión, adaptación de soportes y cardán,
              enfriamiento y escape, cableado y electrónica, programación de la
              ECU con HP Tuners, y pruebas de ruta con ajuste final.
            </KeyAnswer>
          </Reveal>

          <ol className="mt-12 space-y-6">
            {swapSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.id}
                id={step.id}
                delay={Math.min(index * 60, 300)}
                className="flex scroll-mt-28 gap-5 border border-dark-border bg-dark-surface p-6 sm:gap-6 sm:p-8"
              >
                <span
                  className="shrink-0 font-display text-3xl font-black leading-none text-secondary sm:text-4xl"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-2 font-display text-base font-bold uppercase tracking-tight text-white sm:text-lg">
                    {step.name}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-muted sm:text-base">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Costo */}
        <section className="mt-24" aria-labelledby="costo">
          <SectionHeading
            id="costo"
            eyebrow="Presupuesto"
            title="¿Qué define el costo?"
          />
          <Reveal className="mt-10 max-w-3xl">
            <KeyAnswer>
              No existe un precio único de swap LS. El costo lo definen cuatro
              cosas: qué motor y transmisión se instalan, qué tanto hay que
              adaptar el vehículo aceptor, en qué estado están frenos y suspensión
              para aguantar un V8, y hasta dónde llega la integración eléctrica.
            </KeyAnswer>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {costFactors.map((factor, index) => (
              <Reveal
                as="article"
                key={factor.title}
                delay={index * 80}
                className="border-l-4 border-primary bg-dark-surface p-6 sm:p-8"
              >
                <h3 className="mb-3 font-display text-base font-bold uppercase tracking-tight text-white sm:text-lg">
                  {factor.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted">
                  {factor.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 max-w-3xl">
            <p className="font-sans leading-relaxed text-muted">
              Por eso cotizamos cada proyecto por separado. Si ya tenés claro qué
              querés armar, contanos los detalles en{' '}
              <Link
                href="/personalizar"
                className="text-primary-light underline underline-offset-2 hover:text-white"
              >
                el formulario de personalización
              </Link>{' '}
              y te damos un estimado real.
            </p>
          </Reveal>
        </section>

        {/* Antes de empezar */}
        <section className="mt-24" aria-labelledby="antes">
          <SectionHeading
            id="antes"
            eyebrow="Antes de empezar"
            title="Qué revisar primero"
          />
          <Reveal className="mt-10 max-w-3xl space-y-6">
            <KeyAnswer>
              Lo que decide si un swap es viable no es el motor: es el vehículo
              que lo va a recibir. Espacio del compartimiento, soportes, largo del
              cardán, capacidad de enfriamiento y electrónica del tablero definen
              el alcance real del trabajo antes de comprar nada.
            </KeyAnswer>
            <p className="font-sans leading-relaxed text-muted">
              El motor LS es compacto para ser un V8, así que entra en muchas
              plataformas: pick-ups Chevrolet y GMC, SUV, sedanes de tracción
              trasera y proyectos personalizados. Pero cada plataforma tiene su
              propio nivel de dificultad, y conviene resolver también el lado
              legal y de inscripción del cambio de motor según el caso antes de
              arrancar.
            </p>
            <p className="font-sans leading-relaxed text-muted">
              Por eso el primer paso siempre es el diagnóstico: revisamos tu
              vehículo y te decimos qué implica el swap antes de que comprometás
              plata.
            </p>
          </Reveal>
        </section>
      </Container>

      <CTA />

      <JsonLd schema={schema} />
    </>
  );
}
