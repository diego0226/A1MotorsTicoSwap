import Link from 'next/link';

import Container from '@/components/Container';
import { Facebook, Instagram, MapPin, Phone } from '@/components/icons';
import { navigation, site } from '@/lib/site';

const services = [
  'Swap LS 5.3 y 6.0 completo',
  'Motores LQ4 y LQ9 rectificados',
  'Transmisiones 4L60E, 4L65E, 4L80E y 6L80E',
  'Programación de ECU con HP Tuners',
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-surface pb-8 pt-16 font-sans text-muted">
      <Container>
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="mb-5 inline-block font-display text-xl font-black uppercase tracking-tighter text-white"
            >
              A1 <span className="text-secondary">MOTORS</span> TICO{' '}
              <span className="text-primary-light">SWAP</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed">
              Especialistas en <strong className="font-semibold text-accent">swaps LS en Costa Rica</strong>.
              Motores rectificados, transmisiones GM y programación de ECU con precisión mecánica.
            </p>
            <div className="flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} en Facebook`}
                className="border border-dark-border p-2.5 text-muted transition-colors hover:border-primary-light hover:text-primary-light"
              >
                <Facebook size={20} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} en Instagram`}
                className="border border-dark-border p-2.5 text-muted transition-colors hover:border-primary-light hover:text-primary-light"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-enlaces">
            <h2
              id="footer-enlaces"
              className="mb-5 font-display text-base font-bold uppercase tracking-wider text-white"
            >
              Navegación
            </h2>
            <ul className="text-sm font-semibold">
              {navigation.slice(1).map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    // `py-2` da altura suficiente para tocar cómodamente en móvil.
                    className="inline-block py-2 transition-colors hover:text-primary-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-servicios">
            <h2
              id="footer-servicios"
              className="mb-5 font-display text-base font-bold uppercase tracking-wider text-white"
            >
              Servicios
            </h2>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contacto">
            <h2
              id="footer-contacto"
              className="mb-5 font-display text-base font-bold uppercase tracking-wider text-white"
            >
              Contacto
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start py-1 transition-colors hover:text-primary-light"
                >
                  <MapPin className="mr-3 shrink-0 text-secondary" size={20} />
                  <span>{site.address.full}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center py-1 transition-colors hover:text-primary-light"
                >
                  <Phone className="mr-3 shrink-0 text-secondary" size={20} />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="pt-1 text-xs leading-relaxed">
                <span className="font-semibold uppercase tracking-wider text-accent">
                  Horario
                </span>
                <br />
                Lunes a Viernes: 7am – 5pm
                <br />
                Sábados: 7am – 12pm
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 text-xs font-semibold tracking-wider text-muted md:flex-row">
          <div className="text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. Todos los derechos
              reservados.
            </p>
            <p className="mt-2 text-[11px] font-medium tracking-normal text-muted/70">
              Diseño y desarrollo web por{' '}
              <span className="font-semibold text-muted">CodLine</span>
            </p>
          </div>

          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center md:justify-end md:text-right">
            <Link
              href="/privacidad"
              className="py-1 transition-colors hover:text-primary-light"
            >
              Política de privacidad
            </Link>
            <span aria-hidden="true" className="text-dark-border">
              ·
            </span>
            <span>Swaps LS · Grecia, Alajuela · Costa Rica</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
