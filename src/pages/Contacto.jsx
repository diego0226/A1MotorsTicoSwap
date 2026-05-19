import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
      </div>
    </div>
  );
}
