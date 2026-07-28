import Reveal from './Reveal';

/**
 * Encabezado de sección con la barra roja de marca.
 *
 * Centraliza la jerarquía tipográfica: antes cada sección repetía su propia
 * combinación de tamaños y algunas saltaban de h2 a h5, lo que confunde a los
 * rastreadores al leer la estructura de la página.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = 'h2',
  align = 'left',
  id,
  className = '',
}) {
  const centered = align === 'center';

  return (
    <Reveal
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
      ) : null}

      <Tag
        id={id}
        className="font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </Tag>

      <div
        className={`mt-6 h-1 w-24 bg-secondary ${centered ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />

      {description ? (
        <p className="mt-6 font-sans text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
