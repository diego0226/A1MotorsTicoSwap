'use client';

import { useEffect, useRef } from 'react';

/**
 * Animación de aparición al hacer scroll, con IntersectionObserver.
 *
 * Sustituye a `whileInView` de framer-motion pesando ~1 KB en lugar de ~34 KB.
 * El hijo se renderiza en el servidor: este componente solo añade una clase,
 * así que el HTML que ve Google lleva el contenido completo.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sin soporte del observer, mostrar de una vez en lugar de dejarlo invisible.
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.disconnect();
      },
      // Dispara un poco antes de que el bloque entre del todo en pantalla.
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
