'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

import { WhatsApp, X } from '@/components/icons';
import { site, whatsappUrl } from '@/lib/site';

const EMPTY = { nombre: '', mensaje: '', acepta: false };

/**
 * Botón flotante de WhatsApp con panel de contacto.
 *
 * El formulario no manda nada a ningún servidor: arma el texto y abre
 * wa.me para que la persona lo envíe desde su propio WhatsApp. Eso es lo que
 * describe /privacidad.
 */
export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);

  const panelId = useId();
  const titleId = useId();
  const containerRef = useRef(null);
  const fabRef = useRef(null);
  const nameRef = useRef(null);

  const close = () => {
    setOpen(false);
    fabRef.current?.focus();
  };

  // Cerrar con Escape o tocando fuera del widget.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    const onPointerDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  // Llevar el foco al primer campo al abrir, para quien navega con teclado.
  useEffect(() => {
    if (open) nameRef.current?.focus();
  }, [open]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      `¡Hola ${site.name}! Soy ${form.nombre.trim()}.`,
      '',
      form.mensaje.trim(),
    ].join('\n');

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setForm(EMPTY);
    setOpen(false);
  };

  const fieldStyle =
    'w-full rounded-lg border border-dark-border bg-dark-card px-4 py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-muted/70 focus:border-primary-light focus:ring-1 focus:ring-primary-light';

  return (
    <div ref={containerRef}>
      {/* Panel.
          En móvil ocupa el ancho de la pantalla menos los márgenes; desde `sm`
          se ancla a la derecha con ancho fijo. El alto se limita al viewport
          (svh, que en móvil descuenta la barra del navegador) y el cuerpo
          scrollea por dentro, así nunca se sale de pantalla. */}
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-labelledby={titleId}
          className="animate-pop fixed inset-x-4 bottom-20 z-[101] flex max-h-[calc(100svh-7rem)] flex-col overflow-hidden rounded-2xl border border-dark-border bg-dark-surface shadow-2xl sm:inset-x-auto sm:bottom-28 sm:right-6 sm:max-h-[calc(100svh-9rem)] sm:w-[22rem] lg:bottom-32 lg:right-10 lg:w-[23rem]"
        >
          <header className="flex shrink-0 items-center gap-3 bg-[#25D366] px-4 py-3.5">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/25"
              aria-hidden="true"
            >
              <WhatsApp className="h-6 w-6 text-white" />
            </span>

            <span className="min-w-0 flex-1">
              <span
                id={titleId}
                className="block truncate font-display text-sm font-bold uppercase leading-tight text-white"
              >
                {site.name}
              </span>
              <span className="mt-1 flex items-center gap-1.5">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-white"
                  aria-hidden="true"
                />
                <span className="truncate font-sans text-xs font-medium text-white/90">
                  Te respondemos lo antes posible
                </span>
              </span>
            </span>

            <button
              type="button"
              onClick={close}
              aria-label="Cerrar ventana de contacto"
              className="-mr-1 shrink-0 rounded-full p-1.5 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto overscroll-contain p-4">
            <div className="rounded-xl rounded-tl-sm border border-dark-border bg-dark-card p-4">
              <p className="font-sans text-sm leading-relaxed text-accent">
                ¡Hola! 👋 Somos el equipo de {site.name}. Dejanos tu nombre y contanos
                qué vehículo tenés — te atendemos personalmente por WhatsApp.
              </p>
              <p className="mt-2 text-right font-sans text-[11px] text-muted">Ahora</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label htmlFor="wa-nombre" className="sr-only">
                  Tu nombre
                </label>
                <input
                  ref={nameRef}
                  required
                  id="wa-nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  maxLength={60}
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={fieldStyle}
                />
              </div>

              <div>
                <label htmlFor="wa-mensaje" className="sr-only">
                  Contanos tu proyecto o consulta
                </label>
                <textarea
                  required
                  id="wa-mensaje"
                  name="mensaje"
                  rows={3}
                  maxLength={500}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos brevemente tu proyecto o consulta"
                  className={`${fieldStyle} resize-none`}
                />
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  required
                  id="wa-acepta"
                  name="acepta"
                  type="checkbox"
                  checked={form.acepta}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-dark-border bg-dark-card accent-[#25D366]"
                />
                <label
                  htmlFor="wa-acepta"
                  className="cursor-pointer font-sans text-xs leading-relaxed text-muted"
                >
                  Acepto la{' '}
                  <Link
                    href="/privacidad"
                    onClick={close}
                    className="text-primary-light underline underline-offset-2 hover:text-white"
                  >
                    política de privacidad
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-[#1EBE5D]"
              >
                <WhatsApp size={18} />
                Iniciar conversación
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* Botón flotante circular */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={
          open ? 'Cerrar ventana de contacto' : `Escribir por WhatsApp a ${site.name}`
        }
        className="animate-rise fixed bottom-5 right-4 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-[#1EBE5D] active:scale-95 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 lg:bottom-10 lg:right-10"
        style={{ animationDelay: '500ms' }}
      >
        {open ? (
          <X className="h-7 w-7 sm:h-8 sm:w-8" />
        ) : (
          <WhatsApp className="h-7 w-7 sm:h-8 sm:w-8" />
        )}
      </button>
    </div>
  );
}
