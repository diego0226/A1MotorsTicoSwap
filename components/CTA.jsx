import Link from 'next/link';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import { WhatsApp } from '@/components/icons';
import { whatsappUrl } from '@/lib/site';

export default function CTA() {
  return (
    <section
      className="section-y relative overflow-hidden border-b border-dark-border bg-dark-surface"
      aria-labelledby="cta-titulo"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute right-0 h-full w-1/2 skew-x-[-20deg] bg-primary/10" />
      </div>

      <Container className="relative z-10 max-w-4xl text-center">
        <Reveal>
          <h2
            id="cta-titulo"
            className="mb-6 font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            ¿Listo para dominar la calle?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            No dejés tu proyecto en manos de novatos. Contanos qué vehículo tenés y
            te armamos el swap LS que le corresponde.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl(
                'Hola A1 Motors Tico Swap, quiero cotizar un swap LS para mi vehículo.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-secondary bg-secondary px-10 py-5 font-sans text-base font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-transparent hover:text-secondary"
            >
              <WhatsApp size={20} />
              Cotizar ahora
            </a>
            <Link
              href="/personalizar"
              className="border border-accent/40 px-10 py-5 text-center font-sans text-base font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-primary-light hover:bg-primary/15"
            >
              Personalizar proyecto
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
