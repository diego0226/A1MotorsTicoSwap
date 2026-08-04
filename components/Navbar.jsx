'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Menu, WhatsApp, X } from '@/components/icons';
import { navigation, site, whatsappUrl } from '@/lib/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar el menú al navegar: si no, queda abierto sobre la página nueva.
  // Se ajusta durante el render en vez de con un efecto, que provocaría un
  // segundo render en cascada. Cubre también el botón atrás del navegador.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  // Bloquear el scroll del fondo y permitir cerrar con Escape.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => e.key === 'Escape' && setIsOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || isOpen
          ? 'border-dark-border bg-dark-base/95 py-3 shadow-lg backdrop-blur-sm'
          : 'border-transparent bg-gradient-to-b from-dark-base/80 to-transparent py-5'
      }`}
    >
      <nav aria-label="Navegación principal">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-black uppercase tracking-tighter text-white sm:text-2xl"
            aria-label={`${site.name} — inicio`}
          >
            A1 <span className="text-secondary text-glow">MOTORS</span> TICO{' '}
            <span className="text-primary-light">SWAP</span>
          </Link>

          {/* gap reducido en lg: con la Guía son seis enlaces más el botón y a
              1024px se salían del ancho disponible. */}
          <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navigation.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`font-sans text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-light'
                      : 'text-accent hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl(
                  'Hola A1 Motors Tico Swap, quiero cotizar un swap LS.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-secondary bg-secondary px-4 py-2 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-transparent hover:text-secondary"
              >
                <WhatsApp size={16} />
                Cotizar
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            // El padding negativo agranda el área de toque a ~44px sin mover
            // nada visualmente: Google penaliza los objetivos táctiles chicos.
            className="-m-2 p-2 text-accent transition-colors hover:text-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen ? (
          <div
            id="menu-movil"
            className="animate-rise border-t border-dark-border bg-dark-surface lg:hidden"
          >
            <ul className="mx-auto w-full max-w-7xl px-5 py-3 sm:px-6">
              {navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    className={`block border-l-2 px-4 py-3 font-sans text-base font-semibold uppercase tracking-wider transition-colors ${
                      isActive(link.path)
                        ? 'border-secondary bg-dark-card text-primary-light'
                        : 'border-transparent text-accent hover:bg-dark-card hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={whatsappUrl(
                    'Hola A1 Motors Tico Swap, quiero cotizar un swap LS.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-secondary px-4 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white"
                >
                  <WhatsApp size={18} />
                  Cotizar por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
