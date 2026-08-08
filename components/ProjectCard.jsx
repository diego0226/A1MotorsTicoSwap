import Image from 'next/image';
import Link from 'next/link';

import Transformation from '@/components/Transformation';
import { ArrowRight } from '@/components/icons';

/**
 * Ficha de proyecto para la grilla de /proyectos.
 *
 * La foto grande es el después —el resultado es el gancho— y el antes va como
 * recuadro chico en la esquina. Se resolvió así y no con un cambio al pasar el
 * mouse porque en el celular no existe el hover: la mitad de las visitas se
 * habrían quedado sin ver el antes.
 */
export default function ProjectCard({ project, priority = false }) {
  // La portada es el vehículo terminado; si el proyecto no trae una, se cae
  // a la primera foto del después.
  const main = project.cover ?? project.after[0];
  const before = project.before[0];

  return (
    <article className="group h-full border border-dark-border bg-dark-surface transition-colors duration-300 hover:border-primary-light">
      <Link href={`/proyectos/${project.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-dark-border bg-dark-base">
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="(min-width: 1024px) 45vw, (min-width: 640px) 48vw, 92vw"
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span
            className="absolute inset-0 bg-gradient-to-t from-dark-base/70 via-transparent to-transparent"
            aria-hidden="true"
          />

          {before ? (
            <span
              className="absolute bottom-4 left-4 block w-24 overflow-hidden border-2 border-dark-base shadow-xl outline outline-1 outline-white/20 transition-transform duration-500 group-hover:scale-105 sm:w-28"
              aria-hidden="true"
            >
              <span className="relative block aspect-[4/3]">
                <Image
                  src={before.src}
                  alt=""
                  fill
                  sizes="112px"
                  loading="lazy"
                  className="object-cover"
                />
              </span>
              <span className="block bg-dark-base/90 py-1 text-center font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                Antes
              </span>
            </span>
          ) : null}

          <span className="absolute right-0 top-0 bg-secondary px-3 py-1.5 font-display text-xs font-black uppercase tracking-wider text-white">
            {project.from} a {project.to}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <Transformation
            from={project.from}
            to={project.to}
            size="sm"
            className="mb-3"
          />

          <h3 className="font-display text-xl font-bold uppercase leading-tight text-white transition-all group-hover:text-glow">
            {project.name}
          </h3>

          <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          <span className="mt-6 flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-primary-light">
            Ver el proyecto
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
