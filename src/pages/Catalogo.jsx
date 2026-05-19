import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import { transmissions } from '../data/transmissions';
import PackageCard from '../components/PackageCard';
import TransmissionCard from '../components/TransmissionCard';

export default function Catalogo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-dark-base)] pb-24">
      <div className="bg-[var(--color-dark-surface)] py-20 border-b border-[var(--color-dark-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-l-4 border-[var(--color-secondary)] inline-block ml-4 sm:ml-8 pl-6 text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4"
          >
            Catálogo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-accent)] font-sans text-lg max-w-2xl"
          >
            Encuentra motores, paquetes completos y transmisiones para llevar tu proyecto al siguiente nivel.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-black text-white uppercase tracking-tight mb-8 border-b border-[var(--color-dark-card)] pb-4 inline-block"
        >
            Paquetes de Swap
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>

        <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-black text-white uppercase tracking-tight mb-8 border-b border-[var(--color-dark-card)] pb-4 inline-block"
        >
            Transmisiones
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transmissions.map((trans, index) => (
            <motion.div
              key={trans.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TransmissionCard transmission={trans} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
