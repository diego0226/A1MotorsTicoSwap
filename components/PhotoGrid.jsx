'use client';

import Image from 'next/image';
import { useState } from 'react';

import Lightbox from '@/components/Lightbox';
import { Expand } from '@/components/icons';

/**
 * Grilla de fotos con visor a pantalla completa.
 *
 * Cada foto es un `<button>`, no un `<div>` con `onClick`: así se puede abrir
 * con Enter o con la barra espaciadora y el lector de pantalla la anuncia como
 * algo en lo que se puede hacer clic.
 *
 * Las miniaturas van en `loading="lazy"` y con un `sizes` ajustado a la
 * cantidad de columnas, así que el navegador baja variantes de unos 400px en
 * vez de la foto entera. La versión grande solo se pide cuando alguien abre
 * el visor.
 */
export default function PhotoGrid({ photos, columns = 3, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (photos.length === 0) return null;

  // Las clases se escriben completas porque Tailwind lee el archivo como texto:
  // una plantilla tipo `sm:grid-cols-${n}` nunca llegaría al CSS final.
  const grid =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 4
        ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  const sizes =
    columns === 2
      ? '(min-width: 640px) 45vw, 92vw'
      : columns === 4
        ? '(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw'
        : '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw';

  return (
    <>
      <ul className={`grid gap-3 sm:gap-4 ${grid} ${className}`}>
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block aspect-[4/3] w-full overflow-hidden border border-dark-border bg-dark-surface transition-colors duration-300 hover:border-primary-light"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span
                className="absolute inset-0 bg-dark-base/20 transition-colors duration-300 group-hover:bg-transparent"
                aria-hidden="true"
              />

              <span
                className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center bg-dark-base/80 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              >
                <Expand size={16} />
              </span>

              <span className="sr-only">Ampliar: {photo.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null ? (
        <Lightbox
          photos={photos}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
    </>
  );
}
