import Link from 'next/link';

import CTA from '@/components/CTA';
import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import PhotoGrid from '@/components/PhotoGrid';
import ProjectCard from '@/components/ProjectCard';
import ProjectHero from '@/components/ProjectHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Transformation from '@/components/Transformation';
import { ArrowRight } from '@/components/icons';
import { shots, sortedProjects, totalPhotos } from '@/data/projects';
import { breadcrumbSchema, buildMetadata, projectListSchema } from '@/lib/seo';

const breadcrumb = [
  { name: 'Inicio', path: '/' },
  { name: 'Proyectos', path: '/proyectos' },
];

export const metadata = buildMetadata({
  title: 'Proyectos: el antes y el después de cada swap',
  description:
    'Swaps de motor V8 terminados en Costa Rica. Mirá el antes y el después de cada proyecto: qué llegó al taller, qué motor se instaló y cómo quedó.',
  path: '/proyectos',
  keywords: [
    'proyectos swap ls costa rica',
    'antes y despues swap v8',
    'swap v8 camaro costa rica',
    'trabajos motor v8 costa rica',
    'conversion v6 a v8',
    'taller swap ls grecia alajuela',
  ],
});

export default function ProyectosPage() {
  const [featured, ...rest] = sortedProjects;

  const stats = [
    `${sortedProjects.length} ${sortedProjects.length === 1 ? 'proyecto documentado' : 'proyectos documentados'}`,
    `${totalPhotos} fotos`,
    'Taller propio en Grecia, Alajuela',
  ];

  return (
    <>
      <PageHeader
        title="Proyectos"
        description="Acá no hay renders ni fotos de catálogo: son vehículos que entraron al taller, se les cambió el motor y salieron andando. Deslizá la línea de cada comparación y mirá el antes y el después."
        breadcrumb={breadcrumb}
      >
        <ul className="animate-rise mt-8 flex flex-wrap gap-x-3 gap-y-2 font-sans text-xs font-bold uppercase tracking-wider text-muted">
          {stats.map((stat) => (
            <li
              key={stat}
              className="border border-dark-border bg-dark-card px-3 py-1.5"
            >
              {stat}
            </li>
          ))}
        </ul>
      </PageHeader>

      {featured ? (
        <section
          className="section-y border-b border-dark-border"
          aria-labelledby="proyecto-destacado"
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-7">
                {/* Esta imagen es el LCP de la página: entra con prioridad para
                    que no se pinte primero un rectángulo vacío donde va lo
                    único que la gente vino a ver. */}
                <ProjectHero
                  project={featured}
                  sizes="(min-width: 1024px) 60vw, 92vw"
                  priority
                />
              </Reveal>

              <Reveal className="lg:col-span-5" delay={120}>
                <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Proyecto destacado
                </p>

                <h2
                  id="proyecto-destacado"
                  className="font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl"
                >
                  {featured.name}
                </h2>

                <Transformation
                  from={featured.from}
                  to={featured.to}
                  size="lg"
                  className="mt-7"
                />

                <p className="mt-7 font-sans text-base leading-relaxed text-muted sm:text-lg">
                  {featured.summary}
                </p>

                <Link
                  href={`/proyectos/${featured.slug}`}
                  className="group mt-9 inline-flex items-center gap-3 border border-secondary bg-secondary px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-transparent hover:text-secondary"
                >
                  Ver el proyecto completo
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <Container as="section" className="section-y" aria-labelledby="mas-proyectos">
          <SectionHeading
            id="mas-proyectos"
            eyebrow="Trabajos terminados"
            title="Más proyectos"
            description="Cada ficha trae la comparación completa, la ficha técnica y todas las fotos del proceso."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={Math.min(index * 80, 320)}
                className="h-full"
              >
                <ProjectCard project={project} priority={index < 2} />
              </Reveal>
            ))}
          </div>
        </Container>
      ) : null}

      {shots.length > 0 ? (
        <Container
          as="section"
          className="section-y border-t border-dark-border"
          aria-labelledby="del-taller"
        >
          <SectionHeading
            id="del-taller"
            eyebrow="Bitácora"
            title="Del taller"
            description="Motores recién armados, cajas listas para instalar y proyectos en proceso. Tocá cualquier foto para verla en grande."
          />

          <Reveal className="mt-14 block">
            <PhotoGrid photos={shots} columns={4} />
          </Reveal>
        </Container>
      ) : null}

      <CTA />

      <JsonLd
        schema={[
          breadcrumbSchema(breadcrumb),
          projectListSchema({ path: '/proyectos', projects: sortedProjects }),
        ]}
      />
    </>
  );
}
