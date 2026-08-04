import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import { WhatsApp } from '@/components/icons';
import { whatsappUrl } from '@/lib/site';
import heroBg from '@/assets/herofondo2.webp';

const stats = [
  { value: 'LS 5.3 – 6.2', label: 'Motores V8 rectificados' },
  { value: '4L60E · 6L80E', label: 'Transmisiones GM' },
  { value: 'HP Tuners', label: 'Programación de ECU' },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-dark-border bg-dark-base pb-16 pt-28">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Taller de A1 Motors Tico Swap en Grecia, Alajuela, con motores LS rectificados listos para instalar"
          fill
          // LCP de la página: `priority` la precarga con prioridad alta en vez
          // de esperar a que el navegador descubra la etiqueta.
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center opacity-45 grayscale"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-base/70 to-dark-base/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="animate-rise mb-6 inline-block bg-secondary px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white">
            Precisión mecánica costarricense
          </p>

          <h1 className="animate-rise mb-6 font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl" style={{ animationDelay: '80ms' }}>
            Especialistas en{' '}
            <span className="bg-gradient-to-r from-secondary to-primary-light bg-clip-text text-transparent">
              swaps LS y motores V8
            </span>{' '}
            en Costa Rica
          </h1>

          <p className="animate-rise mb-10 max-w-2xl font-sans text-base leading-relaxed text-accent sm:text-lg md:text-xl" style={{ animationDelay: '160ms' }}>
            Instalamos motores <strong className="font-semibold text-white">V8 LS 5.3, 6.0 LQ4 y LQ9</strong>{' '}
            rectificados con transmisión GM, adaptación completa y calibración de ECU.
            Taller en Grecia, Alajuela, con servicio para todo el país.
          </p>

          <div className="animate-rise flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '240ms' }}>
            <Link
              href="/catalogo"
              className="border border-secondary bg-secondary px-8 py-4 text-center font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-transparent hover:text-secondary"
            >
              Ver paquetes de swap
            </Link>
            <a
              href={whatsappUrl(
                'Hola A1 Motors Tico Swap, quiero cotizar un swap LS para mi vehículo.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-accent/40 px-8 py-4 text-center font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:border-primary-light hover:bg-primary/15"
            >
              <WhatsApp size={18} />
              Cotizar por WhatsApp
            </a>
          </div>

          <dl className="animate-rise mt-14 grid max-w-2xl grid-cols-1 gap-px border border-dark-border bg-dark-border sm:grid-cols-3" style={{ animationDelay: '320ms' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="bg-dark-base/85 px-5 py-4">
                <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
