import Link from 'next/link';
import { notFound } from 'next/navigation';

import CTA from '@/components/CTA';
import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import PhotoGrid from '@/components/PhotoGrid';
import ProjectHero from '@/components/ProjectHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Transformation from '@/components/Transformation';
import { ArrowRight, ChevronLeft, ChevronRight } from '@/components/icons';
import {
  getProject,
  getProjectNeighbours,
  hasComparison,
  projects,
} from '@/data/projects';
import { breadcrumbSchema, buildMetadata, projectSchema } from '@/lib/seo';

/**
 * Prerenderiza una página por proyecto en el build. Salen como HTML estático
 * desde el CDN: sin servidor de por medio, que es lo más rápido que hay.
 */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: 'Proyecto no encontrado' };

  return buildMetadata({
    title: `${project.name} | Proyecto de swap`,
    description: project.summary,
    path: `/proyectos/${project.slug}`,
    type: 'article',
    keywords: [
      `swap ${project.vehicle.toLowerCase()} costa rica`,
      `${project.from} a ${project.to}`,
      'antes y despues swap v8',
      'swap ls costa rica',
      'motor v8 costa rica',
    ],
    // La foto de portada del proyecto es la que se ve al compartir el enlace,
    // en vez del og.jpg genérico del sitio.
    images: [
      {
        url: project.cover.src,
        width: project.cover.width,
        height: project.cover.height,
        alt: project.cover.alt,
      },
    ],
  });
}

export default async function ProyectoPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const path = `/proyectos/${project.slug}`;
  const { previous, next } = getProjectNeighbours(project.slug);
  const specs = project.specs.filter((spec) => spec.value);
  const comparable = hasComparison(project);

  const breadcrumb = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: project.shortName, path },
  ];

  return (
    <>
      <PageHeader
        title={project.name}
        description={project.summary}
        breadcrumb={breadcrumb}
      >
        <Transformation
          from={project.from}
          to={project.to}
          size="lg"
          className="animate-rise mt-8"
        />
      </PageHeader>

      <section
        className="section-y border-b border-dark-border"
        aria-labelledby="comparacion"
      >
        <Container>
          <SectionHeading
            id="comparacion"
            eyebrow={comparable ? 'Antes y después' : 'El resultado'}
            title={comparable ? 'El cambio' : 'Cómo quedó'}
            description={project.intro}
            align="center"
          />

          <Reveal className="mx-auto mt-14 block max-w-5xl" delay={100}>
            <ProjectHero
              project={project}
              fitHeight
              // Con `fitHeight` el ancho lo manda el alto (65vh, tope 600px),
              // así que en escritorio la foto nunca pasa de unos 800px.
              sizes="(min-width: 1024px) 800px, 92vw"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <Container as="section" className="section-y" aria-labelledby="ficha">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2
              id="ficha"
              className="font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl"
            >
              Ficha técnica
            </h2>
            <div className="mt-6 h-1 w-24 bg-secondary" aria-hidden="true" />

            <dl className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between gap-4 border-b border-dark-border py-3.5 font-sans text-sm"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {spec.label}
                  </dt>
                  <dd className="text-right font-medium text-white">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {project.work?.length > 0 ? (
            <Reveal className="lg:col-span-5" delay={120}>
              <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Qué se hizo
              </h2>
              <div className="mt-6 h-1 w-24 bg-secondary" aria-hidden="true" />

              <ul className="mt-10 space-y-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
                {project.work.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className="mt-2 h-1.5 w-4 shrink-0 bg-secondary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </Container>

      <section
        className="section-y border-t border-dark-border bg-dark-surface"
        aria-labelledby="galerias"
      >
        <Container>
          <h2 id="galerias" className="sr-only">
            Galería del proyecto
          </h2>

          {project.before.length > 0 ? (
            <>
              <SectionHeading
                as="h3"
                eyebrow={`${project.before.length} fotos`}
                title="Cómo llegó"
                // Sin "de fábrica": no todos los proyectos llegan con el motor
                // original. El Panchito, por ejemplo, ya venía con un 350.
                description={`El ${project.vehicle} tal como entró al taller, con su motor ${project.from}.`}
              />
              <Reveal className="mt-12 block">
                <PhotoGrid photos={project.before} columns={3} />
              </Reveal>
            </>
          ) : null}

          {project.during?.length > 0 ? (
            <>
              <SectionHeading
                as="h3"
                eyebrow={`${project.during.length} fotos`}
                title="El proceso"
                description="El trabajo a medio camino: el motor armado fuera del vehículo y la instalación."
                // Sin fotos del antes, esta es la primera sección de la
                // galería y no lleva el margen que la separa de la anterior.
                className={project.before.length > 0 ? 'mt-24' : ''}
              />
              <Reveal className="mt-12 block">
                <PhotoGrid photos={project.during} columns={3} />
              </Reveal>
            </>
          ) : null}

          <SectionHeading
            as="h3"
            eyebrow={`${project.after.length} fotos`}
            title="Cómo salió"
            description={`El resultado con el ${project.to} instalado y el compartimiento terminado.`}
            className="mt-24"
          />
          <Reveal className="mt-12 block">
            <PhotoGrid photos={project.after} columns={3} />
          </Reveal>
        </Container>
      </section>

      {previous || next ? (
        <Container as="nav" className="py-14" aria-label="Otros proyectos">
          <div className="grid gap-4 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/proyectos/${previous.slug}`}
                className="group flex items-center gap-4 border border-dark-border bg-dark-surface p-6 transition-colors hover:border-primary-light"
              >
                <ChevronLeft
                  size={22}
                  className="shrink-0 text-secondary transition-transform duration-300 group-hover:-translate-x-1"
                />
                <span className="min-w-0">
                  <span className="block font-sans text-xs font-bold uppercase tracking-widest text-muted">
                    Proyecto anterior
                  </span>
                  <span className="mt-1 block truncate font-display text-base font-bold uppercase text-white">
                    {previous.shortName}
                  </span>
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                href={`/proyectos/${next.slug}`}
                className="group flex items-center justify-end gap-4 border border-dark-border bg-dark-surface p-6 text-right transition-colors hover:border-primary-light"
              >
                <span className="min-w-0">
                  <span className="block font-sans text-xs font-bold uppercase tracking-widest text-muted">
                    Proyecto siguiente
                  </span>
                  <span className="mt-1 block truncate font-display text-base font-bold uppercase text-white">
                    {next.shortName}
                  </span>
                </span>
                <ChevronRight
                  size={22}
                  className="shrink-0 text-secondary transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            ) : null}
          </div>
        </Container>
      ) : null}

      <Container className="pb-16">
        <Link
          href="/proyectos"
          className="group inline-flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-widest text-primary-light transition-colors hover:text-white"
        >
          <ArrowRight
            size={18}
            className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
          />
          Volver a todos los proyectos
        </Link>
      </Container>

      <CTA />

      <JsonLd
        schema={[breadcrumbSchema(breadcrumb), projectSchema({ project, path })]}
      />
    </>
  );
}
