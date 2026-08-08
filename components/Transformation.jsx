import { ArrowRight } from '@/components/icons';

const SIZES = {
  sm: { text: 'text-sm sm:text-base', icon: 14, gap: 'gap-2' },
  md: { text: 'text-2xl sm:text-3xl', icon: 22, gap: 'gap-3' },
  lg: { text: 'text-4xl sm:text-5xl', icon: 32, gap: 'gap-4' },
};

/**
 * El titular del proyecto: «V6 → V8».
 *
 * Es lo que la gente busca cuando entra a ver trabajos de un taller de swaps,
 * así que se pinta grande y en una sola línea. El motor que sale va tachado en
 * rojo y el que entra va en blanco: se entiende de un vistazo, sin leer nada.
 */
export default function Transformation({ from, to, size = 'md', className = '' }) {
  const { text, icon, gap } = SIZES[size] ?? SIZES.md;

  return (
    <p
      // `flex-wrap` por si un motor trae nombre largo: en un móvil angosto
      // preferimos que pase a dos líneas antes que desbordar la pantalla.
      className={`flex flex-wrap items-center font-display font-black uppercase leading-none tracking-tight ${gap} ${text} ${className}`}
    >
      <span className="text-muted line-through decoration-secondary decoration-[0.12em]">
        {from}
      </span>
      <ArrowRight size={icon} className="shrink-0 text-secondary" />
      <span className="text-white">{to}</span>
    </p>
  );
}
