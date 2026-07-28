import Link from 'next/link';

import Container from '@/components/Container';
import { navigation } from '@/lib/site';

export const metadata = {
  title: 'Página no encontrada',
  // Una 404 indexada solo diluye la autoridad del dominio.
  robots: { index: false, follow: true },
  // Sin esto hereda el canonical del layout y apuntaría a la portada, que es
  // justo lo que no queremos declarar desde una página inexistente.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
      <p className="mb-4 font-display text-6xl font-black text-secondary sm:text-8xl">
        404
      </p>
      <h1 className="mb-5 font-display text-2xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Esta página se salió de la pista
      </h1>
      <p className="mb-10 max-w-md font-sans text-muted">
        No encontramos lo que buscabas. Probá desde el catálogo o escribinos y te
        ayudamos.
      </p>

      <nav aria-label="Páginas del sitio">
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {navigation.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="inline-block border border-dark-border px-5 py-3 font-sans text-sm font-bold uppercase tracking-wider text-accent transition-colors hover:border-primary-light hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
