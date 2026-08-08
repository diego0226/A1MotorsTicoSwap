'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { ChevronLeft, ChevronRight } from '@/components/icons';

/**
 * Comparador antes/después: dos fotos superpuestas y una línea que se arrastra.
 *
 * El control es un `<input type="range">` a pantalla completa y transparente.
 * Parece un truco, pero es lo que hace que el componente funcione con mouse,
 * con dedo y con teclado (flechas, Inicio y Fin) sin escribir un solo manejador
 * de gestos: el navegador ya sabe hacer todo eso con un range.
 *
 * El arrastre NO pasa por el estado de React. Cada movimiento escribe la
 * variable CSS `--ba-pos` directamente sobre el nodo, así que el navegador
 * solo recalcula el `clip-path` en vez de volver a renderizar el árbol. En un
 * móvil de gama media la diferencia entre las dos versiones son unos 60 fps
 * sostenidos contra un arrastre a tirones.
 *
 * Sin JavaScript el comparador se queda partido al 50%, que es exactamente lo
 * que se quiere enseñar: las dos fotos, una al lado de la otra.
 */
export default function BeforeAfter({
  before,
  after,
  sizes = '100vw',
  priority = false,
  className = '',
  // Todas las fotos del taller salen en 4:3. Si algún proyecto llega con otra
  // proporción, se cambia acá y las dos capas siguen calzando.
  frameClassName = 'aspect-[4/3]',
  // Manda el alto en vez del ancho a partir de `lg`, para que el comparador
  // quepa en pantalla sea cual sea la forma de las fotos. Ver `.media-fit`.
  fitHeight = false,
  hint = true,
}) {
  const frameRef = useRef(null);

  const handleInput = (event) => {
    frameRef.current?.style.setProperty('--ba-pos', `${event.target.value}%`);
  };

  return (
    <figure className={`${fitHeight ? 'media-fit' : ''} ${className}`}>
      <div
        ref={frameRef}
        className={`media-frame group/ba relative isolate overflow-hidden border border-dark-border bg-dark-surface ${frameClassName}`}
        // El valor inicial vive en el HTML del servidor: sin él la primera
        // pintura no sabría dónde poner el corte.
        style={{ '--ba-pos': '50%' }}
      >
        {/* Capa base: el después. */}
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />

        {/* Capa recortada: el antes. El corte se mueve con --ba-pos. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: 'inset(0 calc(100% - var(--ba-pos)) 0 0)' }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        </div>

        {/* Etiquetas. `pointer-events-none` para no robarle el clic al range. */}
        <p className="pointer-events-none absolute left-3 top-3 z-20 border border-white/15 bg-dark-base/80 px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-accent backdrop-blur-sm sm:left-4 sm:top-4 sm:text-xs">
          Antes
        </p>
        <p className="pointer-events-none absolute right-3 top-3 z-20 border border-secondary/60 bg-secondary/90 px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:text-xs">
          Después
        </p>

        {/* Manija: solo decorado, el que manda es el range de abajo. */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(0,0,0,0.85)]"
          style={{ left: 'var(--ba-pos)' }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-px border border-white/70 bg-secondary text-white shadow-lg transition-transform duration-200 group-hover/ba:scale-110">
            <ChevronLeft size={16} />
            <ChevronRight size={16} />
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          defaultValue="50"
          onInput={handleInput}
          aria-label={`Comparar el antes y el después. ${before.alt} frente a ${after.alt}`}
          className="ba-range absolute inset-0 z-30 h-full w-full cursor-ew-resize"
        />
      </div>

      {hint ? (
        <figcaption className="ba-hint mt-3 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-muted">
          <span
            className="inline-block h-px w-6 bg-secondary"
            aria-hidden="true"
          />
          Arrastrá la línea para comparar
        </figcaption>
      ) : null}
    </figure>
  );
}
