import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const MAP_URL = "https://maps.app.goo.gl/P8TPUhDnyj2MtQmMA";
const MAP_EMBED = "https://maps.google.com/maps?q=Grecia,+Alajuela,+Costa+Rica&output=embed&z=15";

export default function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    { icon: <MapPin size={32} />, title: "Ubicación", detail: "Alajuela, Grecia. (Click para dirección exacta del taller)", href: "https://maps.app.goo.gl/JuNr1F3gQxaNp3886" },
    { icon: <Phone size={32} />, title: "Teléfono", detail: "+506 8994 8485", href: "tel:+50689948485" },
    { icon: <Mail size={32} />, title: "Correo", detail: "info@a1motorsticoswap.cr", href: "mailto:info@a1motorsticoswap.cr" },
    { icon: <Clock size={32} />, title: "Horario", detail: "Lunes a Viernes: 7am - 5pm\nSábados: 7am - 12pm" }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-dark-base)] pb-24">
      <div className="bg-[var(--color-dark-surface)] py-20 border-b border-[var(--color-dark-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4"
          >
            Contacto
          </motion.h1>
          <div className="h-1 w-24 bg-[var(--color-secondary)] mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-accent)] font-sans text-lg max-w-2xl mx-auto"
          >
            Estamos listos para escuchar tu proyecto. Comunícate con nosotros.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, idx) => {
            const Wrapper = info.href ? motion.a : motion.div;
            return (
              <Wrapper
                key={idx}
                href={info.href}
                target={info.href?.startsWith('http') ? "_blank" : undefined}
                rel={info.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--color-dark-surface)] border border-[var(--color-dark-card)] p-8 text-center hover:border-[var(--color-primary)] transition-colors duration-300 block"
              >
                <div className="text-[var(--color-primary)] flex justify-center mb-6">
                  {info.icon}
                </div>
                <h3 className="font-display font-bold text-white uppercase mb-3">{info.title}</h3>
                <p className="font-sans text-[var(--color-accent)] text-sm whitespace-pre-line">{info.detail}</p>
              </Wrapper>
            );
          })}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
              Encuéntranos
            </h2>
            <div className="h-1 w-16 bg-[var(--color-secondary)] mx-auto mb-4"></div>
            <p className="text-[var(--color-accent)] font-sans text-xs sm:text-sm">
              Haz clic en el mapa para abrir la dirección exacta en Google Maps
            </p>
          </div>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group cursor-pointer"
            aria-label="Abrir ubicación en Google Maps"
          >
            {/* Border glow on hover */}
            <div className="relative border-2 border-[var(--color-dark-card)] group-hover:border-[var(--color-primary)] transition-colors duration-300 overflow-hidden"
              style={{ boxShadow: '0 0 0 0 transparent' }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-secondary)] z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-secondary)] z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-secondary)] z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-secondary)] z-10 pointer-events-none"></div>

              {/* Map iframe */}
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[480px]">
                <iframe
                  src={MAP_EMBED}
                  className="w-full h-full pointer-events-none"
                  style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación A1 Motors Tico Swap — Grecia, Alajuela"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 flex flex-col items-center gap-3">
                  <div className="bg-[var(--color-secondary)] text-white font-display font-black uppercase px-8 py-4 flex items-center gap-3 text-base md:text-lg tracking-wide shadow-lg">
                    <Navigation size={22} className="shrink-0" />
                    Abrir en Google Maps
                  </div>
                  <p className="text-white/80 font-sans text-sm">Grecia, Alajuela · Costa Rica</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA bar */}
            <div className="bg-[var(--color-dark-surface)] border border-t-0 border-[var(--color-dark-card)] group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin size={16} className="text-[var(--color-secondary)] shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
                  Grecia, Alajuela, Costa Rica
                </span>
              </div>
              <span className="font-display font-bold text-[11px] sm:text-xs uppercase tracking-widest text-[var(--color-accent)] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                <Navigation size={13} />
                Ver dirección exacta en Google Maps
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
