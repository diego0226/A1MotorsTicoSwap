import Link from 'next/link';

import Container from '@/components/Container';

/**
 * Cabecera de las páginas internas.
 *
 * Unifica el bloque que Catálogo, Personalizar y Contacto repetían con
 * márgenes distintos, y añade las migas de pan visibles que acompañan al
 * schema BreadcrumbList.
 */
export default function PageHeader({ title, description, breadcrumb = [], children }) {
  return (
    <section className="border-b border-dark-border bg-dark-surface pb-16 pt-32 md:pb-20 md:pt-40">
      <Container>
        {breadcrumb.length > 0 ? (
          <nav aria-label="Migas de pan" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-muted">
              {breadcrumb.map((crumb, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {isLast ? (
                      <span aria-current="page" className="text-accent">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={crumb.path}
                          className="transition-colors hover:text-primary-light"
                        >
                          {crumb.name}
                        </Link>
                        <span aria-hidden="true" className="text-dark-border">
                          /
                        </span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div className="border-l-4 border-secondary pl-6">
          <h1 className="animate-rise font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p
              className="animate-rise mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: '100ms' }}
            >
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
