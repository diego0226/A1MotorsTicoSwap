import Image from 'next/image';

import { WhatsApp } from '@/components/icons';
import { whatsappUrl } from '@/lib/site';

/**
 * Ficha de catálogo, usada tanto por los paquetes de swap como por las
 * transmisiones. Antes eran dos componentes casi idénticos que solo cambiaban
 * la etiqueta, las filas de especificaciones y el texto del botón.
 */
export default function CatalogCard({
  name,
  image,
  alt,
  badge,
  specs = [],
  description,
  ctaLabel,
  whatsappMessage,
  headingLevel: Heading = 'h3',
  priority = false,
}) {
  return (
    <article className="group flex h-full flex-col border border-dark-border bg-dark-surface transition-colors duration-300 hover:border-primary-light">
      <div className="relative h-52 overflow-hidden border-b border-dark-border bg-dark-base sm:h-56">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          placeholder="blur"
          priority={priority}
          className="object-contain p-4 opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <span className="absolute right-0 top-0 bg-primary px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-white">
          {badge}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <Heading className="mb-4 font-display text-xl font-bold uppercase leading-tight text-white transition-all group-hover:text-glow">
          {name}
        </Heading>

        {description ? (
          <p className="mb-5 font-sans text-sm leading-relaxed text-muted">
            {description}
          </p>
        ) : null}

        <dl className="mb-6 flex-grow space-y-3 font-sans text-sm">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between gap-3 border-b border-dark-border pb-2"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                {spec.label}
              </dt>
              <dd className="text-right font-medium text-white">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-muted">
              Precio
            </span>
            <span className="font-display text-xl font-black text-white">
              Consultar
            </span>
          </div>

          <a
            href={whatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 border border-secondary bg-secondary py-4 text-center font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-transparent hover:text-secondary"
          >
            <WhatsApp size={16} />
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
