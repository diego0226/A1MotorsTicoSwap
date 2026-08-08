import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRight } from '@/components/icons';
import { gallery } from '@/data/gallery';

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="section-y overflow-hidden border-b border-dark-border bg-dark-base"
      aria-labelledby="galeria-titulo"
    >
      <Container>
        <SectionHeading
          id="galeria-titulo"
          eyebrow="Trabajos realizados"
          title="Galería de proyectos"
          description="Swaps LS terminados en nuestro taller: desde un Land Cruiser FJ40 hasta un Tahoe de pista."
        />

        <ul className="mt-14 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => {
            const photo = (
              <>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  // Cuatro columnas en escritorio, dos en tablet, una en móvil:
                  // así el navegador baja la variante justa y no una de 1200px.
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 bg-dark-base/25 transition-colors duration-500 group-hover:bg-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-dark-base via-dark-base/80 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </p>
                  {item.href ? (
                    <p className="mt-1.5 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-primary-light">
                      Ver el proyecto
                      <ArrowRight size={14} />
                    </p>
                  ) : null}
                </div>
              </>
            );

            return (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 100}
                className="group relative h-72 overflow-hidden border border-dark-base sm:h-80"
              >
                {item.href ? (
                  <Link href={item.href} className="absolute inset-0">
                    {photo}
                  </Link>
                ) : (
                  photo
                )}
              </Reveal>
            );
          })}
        </ul>

        {/* Puerta de entrada a /proyectos. Estas cuatro fotos son la vitrina;
            el antes y el después completo de cada trabajo vive allá. */}
        <Reveal className="mt-12 block" delay={120}>
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 border border-accent/40 px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-primary-light hover:bg-primary/15"
          >
            Ver el antes y el después
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
