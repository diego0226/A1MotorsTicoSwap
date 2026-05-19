import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="bg-[var(--color-dark-surface)] border-b border-[var(--color-dark-card)] py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute h-full w-1/2 bg-[var(--color-primary)]/5 right-0 transform skew-x-[-20deg]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8"
        >
          ¿Listo para dominar la calle?
        </motion.h2>
        <p className="text-xl text-[var(--color-accent)] font-sans mb-10 max-w-2xl mx-auto">
          No dejes tu proyecto en manos de novatos. Confía en los expertos en LS swaps de Costa Rica.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/50689948485"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-[var(--color-secondary)] hover:bg-white hover:text-[var(--color-secondary)] border border-[var(--color-secondary)] text-white font-sans font-bold uppercase tracking-widest text-lg transition-all duration-300"
        >
          Cotizar Ahora
        </motion.a>
      </div>
    </section>
  );
}
