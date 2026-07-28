import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ShieldCheck, Wrench, Zap } from '@/components/icons';

const features = [
  {
    Icon: Wrench,
    title: 'Instalación profesional',
    description:
      'Adaptamos motores LS a cualquier plataforma: soportes, cardán, escape, radiador y cableado quedan listos para rodar.',
  },
  {
    Icon: Zap,
    title: 'Programación con HP Tuners',
    description:
      'Desbloqueo de ECU, eliminación de VATS y calibración de motor y transmisión para que el swap funcione como de fábrica.',
  },
  {
    Icon: ShieldCheck,
    title: 'Motores rectificados',
    description:
      'Trabajamos con motores 100% rectificados traídos desde México, seleccionados por potencia y confiabilidad comprobada.',
  },
];

export default function Services() {
  return (
    <section
      className="section-y border-b border-dark-border bg-dark-base"
      aria-labelledby="ventaja-ls"
    >
      <Container>
        <SectionHeading
          id="ventaja-ls"
          eyebrow="Por qué un swap LS"
          title="La ventaja del motor LS"
          align="center"
          description="Los motores GM LS son la mejor base para modernizar un proyecto en Costa Rica: mucha potencia por colón invertido, confiabilidad probada y una enorme disponibilidad de repuestos y mejoras."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ Icon, title, description }, index) => (
            <Reveal
              key={title}
              as="article"
              delay={index * 120}
              className="group flex flex-col items-center border border-dark-border bg-dark-surface p-8 text-center transition-colors duration-300 hover:border-primary-light md:p-10"
            >
              <div className="mb-6 text-secondary transition-transform duration-300 group-hover:scale-110">
                <Icon size={40} />
              </div>
              <h3 className="mb-4 font-display text-xl font-bold uppercase text-white">
                {title}
              </h3>
              <p className="font-sans leading-relaxed text-muted">{description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
