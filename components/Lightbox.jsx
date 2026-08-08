'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ChevronLeft, ChevronRight, X } from '@/components/icons';

/**
 * Visor de fotos a pantalla completa.
 *
 * Solo se monta cuando hay una foto abierta, así que mientras nadie toque la
 * galería no descarga ni una imagen grande: las miniaturas de la grilla ya
 * bastan para navegar.
 *
 * Se dibuja con `createPortal` colgado del `<body>` y no donde está el
 * componente. No es un capricho: las galerías van dentro de un `<Reveal>`, y
 * cualquier ancestro con `transform` —justo lo que usa la animación de
 * aparición— deja de ser un elemento normal y pasa a ser el marco de
 * referencia de sus hijos `position: fixed`. Sin el portal, el visor "a
 * pantalla completa" se encogía al tamaño de la grilla.
 *
 * El z-index tiene que ganarle al botón flotante de WhatsApp, que vive en 100
 * y 101; por eso 120.
 */
export default function Lightbox({ photos, index, onIndexChange, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const titleId = useId();

  const total = photos.length;
  const photo = photos[index];

  const go = useCallback(
    (step) => onIndexChange((index + step + total) % total),
    [index, onIndexChange, total],
  );

  // Bloquear el scroll del fondo mientras el visor está abierto.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Llevar el foco adentro al abrir y devolverlo a donde estaba al cerrar: sin
  // esto, quien navega con teclado vuelve al principio de la página.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'ArrowRight') {
        go(1);
        return;
      }
      if (event.key === 'ArrowLeft') {
        go(-1);
        return;
      }

      // Encerrar el tabulador dentro del diálogo. Son tres botones, así que
      // basta con saltar del último al primero y viceversa.
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusables = dialogRef.current.querySelectorAll('button');
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go, onClose]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const travelled = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    // 50px de umbral: menos que eso suele ser un toque tembloroso, no un gesto.
    if (Math.abs(travelled) > 50) go(travelled < 0 ? 1 : -1);
  };

  // El componente solo se monta después de un clic, así que acá siempre hay
  // un `document`: no hace falta esperar a que termine la hidratación.
  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="animate-fade fixed inset-0 z-[120] flex flex-col bg-dark-base/95 backdrop-blur-sm"
      // Cerrar al tocar el fondo. El clic sobre la foto no burbujea hasta acá
      // porque la imagen va dentro de un contenedor que lo detiene.
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-dark-border/60 px-4 py-3 sm:px-6">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-white">
          {index + 1}
          <span className="text-muted"> / {total}</span>
        </p>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar el visor de fotos"
          className="-m-2 p-2 text-accent transition-colors hover:text-secondary"
        >
          <X size={26} />
        </button>
      </header>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 py-4 sm:px-16"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="100vw"
          priority
          className="animate-fade h-auto max-h-full w-auto max-w-full object-contain"
        />

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="absolute left-1 top-1/2 -translate-y-1/2 border border-dark-border bg-dark-base/80 p-2.5 text-accent transition-colors hover:border-secondary hover:text-secondary sm:left-2 sm:p-3"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto siguiente"
              className="absolute right-1 top-1/2 -translate-y-1/2 border border-dark-border bg-dark-base/80 p-2.5 text-accent transition-colors hover:border-secondary hover:text-secondary sm:right-2 sm:p-3"
            >
              <ChevronRight size={24} />
            </button>
          </>
        ) : null}
      </div>

      <p
        id={titleId}
        className="shrink-0 border-t border-dark-border/60 px-4 py-4 text-center font-sans text-xs leading-relaxed text-muted sm:px-6 sm:text-sm"
      >
        {photo.alt}
      </p>
    </div>,
    document.body,
  );
}
