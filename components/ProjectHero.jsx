import Image from 'next/image';

import BeforeAfter from '@/components/BeforeAfter';

/**
 * La imagen grande de un proyecto.
 *
 * Normalmente es el comparador antes/después, pero no todos los trabajos
 * tienen foto del motor viejo: a veces el carro llega ya desarmado, o
 * sencillamente nadie se acordó de tomarla antes de empezar. En esos casos
 * cae a la foto de portada, en el mismo marco y con el mismo tamaño, para que
 * la ficha no se vea a medias.
 *
 * `hasComparison()` en data/projects.js decide cuál de los dos toca, y las
 * páginas la usan también para ajustar los títulos de la sección.
 */
export default function ProjectHero({
  project,
  sizes,
  priority = false,
  fitHeight = false,
  className = '',
}) {
  const before = project.before?.[0];
  const after = project.after?.[0];

  if (before && after) {
    return (
      <BeforeAfter
        before={before}
        after={after}
        frameClassName={project.compareRatio}
        fitHeight={fitHeight}
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  const photo = project.cover ?? after;
  if (!photo) return null;

  return (
    <figure className={`${fitHeight ? 'media-fit' : ''} ${className}`}>
      <div
        className="media-frame relative overflow-hidden border border-dark-border bg-dark-surface"
        // La proporción sale de la foto misma, así que acá no se recorta nada:
        // sin par que hacer calzar, no hay razón para forzar un formato.
        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </figure>
  );
}
