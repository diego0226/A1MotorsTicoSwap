import Link from 'next/link';

import Container from '@/components/Container';
import PackageCard from '@/components/PackageCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { packages } from '@/data/packages';

// Un motor de entrada, uno intermedio y el tope de gama: cubre las tres
// intenciones de compra sin repetir el catálogo entero en la portada.
const featured = [packages[0], packages[4], packages[6]];

export default function FeaturedPackages() {
  return (
    <section
      id="paquetes"
      className="section-y border-b border-dark-border bg-dark-surface"
      aria-labelledby="paquetes-titulo"
    >
      <Container>
        <SectionHeading
          id="paquetes-titulo"
          eyebrow="Catálogo"
          title="Paquetes de swap LS"
          description="Motores LS rectificados con su transmisión GM, listos para instalar. Cada paquete se cotiza según el vehículo aceptor."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((pkg, index) => (
            <Reveal key={pkg.id} delay={index * 120} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/catalogo"
            className="inline-block border border-accent/40 px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:border-primary-light hover:bg-primary/15"
          >
            Ver el catálogo completo de motores y transmisiones
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
