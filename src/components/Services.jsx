import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Zap } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: <Wrench size={40} />,
      title: 'Instalación Profesional',
      description: 'Nuestro equipo cuenta con la experiencia para integrar motores LS en cualquier plataforma.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Ajuste de Precisión',
      description: 'Afinación electrónica (tuning) y configuraciones mecánicas personalizadas para extraer la máxima potencia.'
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Garantía de Calidad',
      description: 'Utilizamos componentes de alto rendimiento probados para asegurar confiabilidad total en cada proyecto.'
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-dark-base)] border-b border-[var(--color-dark-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-6"
          >
            LA VENTAJA DEL LS
          </motion.h2>
          <div className="h-1 w-24 bg-[var(--color-secondary)] mx-auto mb-6"></div>
          <p className="text-[var(--color-accent)] font-sans text-lg">
            Los motores GM LS engine son la opción ideal para modernizar cualquier proyecto automotriz. Ofrecen gran potencia, confiabilidad comprobada y un enorme soporte de repuestos y mejoras. Con un LS no solo aumentás el rendimiento del vehículo, también obtenés una plataforma sólida y probada para llevar tu proyecto al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, borderColor: 'var(--color-primary)' }}
              className="bg-[var(--color-dark-surface)] border border-[var(--color-dark-card)] p-10 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-[var(--color-secondary)] mb-6">{feat.icon}</div>
              <h3 className="text-xl font-display font-bold text-white uppercase mb-4">{feat.title}</h3>
              <p className="text-[var(--color-accent)] font-sans leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
