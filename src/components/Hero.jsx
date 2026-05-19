import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/HeroFondo.png';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-[var(--color-dark-base)] overflow-hidden border-b border-[var(--color-dark-card)] pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-base)] via-[var(--color-dark-base)]/60 to-transparent z-10" />
        <img
          src={heroBg}
          alt="Automotive Workshop"
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/5 mix-blend-overlay z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-[var(--color-secondary)] px-4 py-1 mb-6 border border-[var(--color-secondary)] text-white font-sans font-bold uppercase tracking-widest text-xs"
          >
            PRECISIÓN MECÁNICA COSTARRICENSE
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-8 uppercase tracking-tight">
            ESPECIALISTAS EN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)]">
              LS SWAPS EN COSTA RICA.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-accent)] font-sans max-w-2xl mb-12 leading-relaxed">
            Especialistas en Costa Rica en conversiones LS. Elevamos el rendimiento de tu vehículo con paquetes completos diseñados para dominar las calles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/catalogo"
              className="px-8 py-4 bg-[var(--color-secondary)] hover:bg-white hover:text-[var(--color-secondary)] text-white text-center font-sans font-bold uppercase tracking-wider transition-all duration-300 border border-[var(--color-secondary)]"
            >
              Ver Paquetes
            </Link>
            <Link
              to="/personalizar"
              className="px-8 py-4 bg-transparent border border-[var(--color-accent)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 text-white text-center font-sans font-bold uppercase tracking-wider transition-all duration-300"
            >
              Personalizar Swap
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
