import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { Settings, ShieldCheck, WhatsApp, Zap } from '@/components/icons';
import { breadcrumbSchema, buildMetadata } from '@/lib/seo';
import { whatsappUrl } from '@/lib/site';

import heroBg from '@/assets/herofondo2.webp';
import hptuners from '@/assets/nosotros/hptunners.webp';
import logo from '@/assets/nosotros/logo.webp';
import performance from '@/assets/nosotros/performance.webp';
import stock from '@/assets/nosotros/stock.webp';
import workshop from '@/assets/nosotros/workshop.webp';

const breadcrumb = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
];

export const metadata = buildMetadata({
  title: 'Sobre nosotros — Taller de swaps LS en Grecia, Alajuela',
  description:
    'Conocé A1 Motors Tico Swap: taller costarricense especializado en swaps LS, motores rectificados traídos desde México y programación de ECU con HP Tuners. Estamos en Grecia, Alajuela.',
  path: '/nosotros',
  keywords: [
    'taller swaps ls costa rica',
    'a1 motors tico swap',
    'taller ls grecia alajuela',
    'hp tuners costa rica',
    'motores ls rectificados',
  ],
});

const values = [
  {
    Icon: Settings,
    color: 'text-secondary',
    title: 'Excelencia mecánica',
    description:
      'Sin atajos. Usamos los mejores componentes y técnicas de ensamblaje para garantizar resultados superiores.',
  },
  {
    Icon: Zap,
    color: 'text-primary-light',
    title: 'Alto rendimiento',
    description:
      'Nuestros swaps están diseñados para dominar la calle y la pista, optimizando la entrega de torque y potencia.',
  },
  {
    Icon: ShieldCheck,
    color: 'text-white',
    title: 'Legado tico',
    description:
      'Orgullosamente costarricenses, elevando el estándar de la industria nacional a niveles internacionales.',
  },
];

const skills = [
  { label: 'Conversiones V8 LS', value: 98 },
  { label: 'Programación de ECU', value: 95 },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-center overflow-hidden border-b-4 border-secondary pb-16 pt-32 md:min-h-[80svh]">
        <Image
          src={heroBg}
          alt="Taller de A1 Motors Tico Swap con motores LS listos para instalar"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center opacity-40 grayscale"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-base/70 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <nav aria-label="Migas de pan" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-primary-light">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true" className="text-dark-border">
                /
              </li>
              <li aria-current="page" className="text-accent">
                Nosotros
              </li>
            </ol>
          </nav>

          <p className="animate-rise mb-6 inline-block bg-secondary px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white">
            Costa Rica&apos;s finest
          </p>
          <h1
            className="animate-rise max-w-4xl font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            {/* Dos bloques en lugar de <br />: así el texto queda separado por
                un salto real y no se lee "MotorsTico" al extraerlo. */}
            <span className="block">Sobre A1 Motors</span>
            <span className="block text-secondary">Tico Swap</span>
          </h1>
        </Container>
      </section>

      {/* Quiénes somos */}
      <Container as="section" className="section-y" aria-labelledby="quienes-somos">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="flex flex-col justify-center md:col-span-7">
            <Reveal>
              <h2
                id="quienes-somos"
                className="mb-8 border-l-8 border-secondary pl-6 font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:text-4xl"
              >
                A1 <span className="text-secondary">Motors</span> Tico{' '}
                <span className="text-primary-light">Swap</span>
              </h2>

              <div className="space-y-6 font-sans text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  A1 Motors Tico Swap nace de la pasión por el rendimiento, la mecánica
                  y la cultura automotriz. Nos especializamos en{' '}
                  <strong className="font-semibold text-accent">swaps de motores LS</strong>{' '}
                  y proyectos de alto desempeño, ayudando a que cada vehículo alcance su
                  verdadero potencial.
                </p>
                <p>
                  Trabajamos con motores 100% rectificados traídos desde México,
                  seleccionados para ofrecer potencia, confiabilidad y calidad en cada
                  proyecto. Además contamos con herramientas profesionales como{' '}
                  <strong className="font-semibold text-accent">HP Tuners</strong>, lo que
                  nos permite trabajar la ECU de su vehículo desde desbloqueos hasta
                  calibraciones completas.
                </p>
                <p>
                  Creemos que cada proyecto es único, por eso nuestro objetivo no es solo
                  instalar un motor, sino construir algo que represente el verdadero
                  rendimiento y la identidad de nuestra marca.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-12 grid grid-cols-2 gap-5">
              <div className="border-l-4 border-primary bg-dark-surface p-5 sm:p-6">
                <p className="mb-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                  HP Tuners
                </p>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
                  Software profesional
                </p>
              </div>
              <div className="border-l-4 border-secondary bg-dark-surface p-5 sm:p-6">
                <p className="mb-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                  100%
                </p>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
                  Precisión técnica
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="md:col-span-5">
            <div className="h-full border border-dark-border bg-dark-surface p-1 transition-colors hover:border-primary-light">
              <div className="relative h-80 w-full md:h-full md:min-h-[420px]">
                <Image
                  src={logo}
                  alt="Logo de A1 Motors Tico Swap, taller de swaps LS en Costa Rica"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Bento */}
      <section className="section-y bg-dark-surface" aria-labelledby="pasion-detalle">
        <Container>
          <SectionHeading
            id="pasion-detalle"
            eyebrow="Nuestro día a día"
            title="Nuestra pasión en detalle"
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4">
            <Reveal className="group relative h-72 overflow-hidden border border-dark-border bg-dark-card sm:h-96 md:col-span-2 md:row-span-2 md:h-auto md:min-h-[36rem]">
              <Image
                src={workshop}
                alt="Stand de A1 Motors Tico Swap en una feria automotriz de Costa Rica, con motores LS y turbos en exhibición"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover opacity-70 transition-all duration-700 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-base to-transparent p-6">
                <span className="inline-block bg-primary px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
                  Ferias y eventos
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={100}
              className="group relative h-56 overflow-hidden border border-dark-border bg-dark-card md:col-span-2"
            >
              <Image
                src={hptuners}
                alt="Logo de HP Tuners, el software con el que programamos y calibramos la ECU"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover opacity-70 transition-all duration-700 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-base to-transparent p-6">
                <span className="inline-block bg-primary px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
                  Calibración digital
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={160}
              className="group relative aspect-square overflow-hidden border border-dark-border bg-dark-card"
            >
              <Image
                src={stock}
                alt="Estantes con repuestos para swap LS: múltiples de admisión, alternadores, turbos, computadoras y headers"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                placeholder="blur"
                className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-base to-transparent p-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
                  Inventario
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={220}
              className="group relative aspect-square overflow-hidden border border-dark-border bg-dark-card"
            >
              <Image
                src={performance}
                alt="Toyota Land Cruiser FJ40 blanco con motor LS instalado por A1 Motors Tico Swap"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                placeholder="blur"
                className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-base to-transparent p-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
                  Rendimiento
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <Container as="section" className="section-y" aria-labelledby="valores">
        <h2 id="valores" className="sr-only">
          Nuestros valores
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map(({ Icon, color, title, description }, index) => (
            <Reveal key={title} as="article" delay={index * 120} className="space-y-4">
              <Icon size={40} className={color} />
              <h3 className="font-display text-xl font-bold uppercase text-white">
                {title}
              </h3>
              <p className="font-sans leading-relaxed text-muted">{description}</p>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Métricas */}
      <section
        className="border-t-2 border-primary bg-dark-card py-20"
        aria-labelledby="metricas"
      >
        <Container className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <Reveal className="flex-1">
            <h2
              id="metricas"
              className="mb-4 font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:text-4xl"
            >
              Engineered for power
            </h2>
            <p className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">
              Nuestra métrica de éxito es tu satisfacción al volante.
            </p>
          </Reveal>

          <Reveal delay={120} className="w-full flex-1 space-y-8">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="mb-2 flex justify-between font-sans text-sm font-semibold uppercase tracking-wider text-accent">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div
                  className="h-4 w-full bg-dark-base"
                  role="img"
                  aria-label={`${skill.label}: ${skill.value} por ciento`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 text-center md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, #e31e24 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <Reveal>
            <h2 className="mb-6 font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              ¿Listo para el swap?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
              Transformá tu proyecto hoy mismo con los especialistas en swaps LS de
              Costa Rica.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl(
                  'Hola A1 Motors Tico Swap, quiero información sobre un swap LS.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-b-4 border-secondary-dark bg-secondary px-8 py-4 font-display text-base font-bold uppercase text-white transition-colors hover:bg-secondary/90 sm:px-12 sm:py-5 sm:text-xl"
              >
                <WhatsApp size={22} />
                Hablar por WhatsApp
              </a>
              <Link
                href="/catalogo"
                className="border-2 border-white px-8 py-4 font-display text-base font-bold uppercase text-white transition-colors hover:bg-white hover:text-dark-base sm:px-12 sm:py-5 sm:text-xl"
              >
                Ver catálogo
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <JsonLd schema={breadcrumbSchema(breadcrumb)} />
    </>
  );
}
