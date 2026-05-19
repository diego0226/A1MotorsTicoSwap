import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function PackageCard({ pkg }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[var(--color-dark-surface)] border border-[var(--color-dark-card)] hover:border-[var(--color-primary)] transition-colors duration-300 group flex flex-col h-full rounded-none"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden bg-[var(--color-dark-base)] border-b border-[var(--color-dark-card)]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
        >
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <div className="absolute top-0 right-0 bg-[var(--color-primary)] px-3 py-1 text-xs font-display font-bold uppercase tracking-wider text-white">
          LS Swap
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-display font-bold text-xl text-white mb-4 leading-tight uppercase group-hover:text-glow transition-all">{pkg.name}</h3>

        <ul className="space-y-3 text-sm font-sans mb-6 flex-grow">
          <li className="flex justify-between border-b border-[var(--color-dark-card)] pb-2">
            <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold text-xs">Motor</span>
            <span className="text-white font-medium">{pkg.engine}</span>
          </li>
          <li className="flex justify-between border-b border-[var(--color-dark-card)] pb-2">
            <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold text-xs">Acelerador</span>
            <span className="text-white font-medium">{pkg.throttle}</span>
          </li>
          <li className="flex justify-between border-b border-[var(--color-dark-card)] pb-2">
            <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold text-xs">Transmisión</span>
            <span className="text-white font-medium">{pkg.transmission}</span>
          </li>
          <li className="flex justify-between border-b border-[var(--color-dark-card)] pb-2">
            <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold text-xs">Tracción</span>
            <span className="text-white font-medium">{pkg.traction}</span>
          </li>
        </ul>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest">Precio</span>
            <span className="text-2xl font-display font-black text-white">{pkg.price}</span>
          </div>

          <a
            href={`https://wa.me/50689948485?text=${encodeURIComponent(`Hola, estoy interesado en el paquete de swap ${pkg.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-[var(--color-secondary)] hover:bg-white hover:text-[var(--color-secondary)] border border-[var(--color-secondary)] text-white text-center font-sans font-bold uppercase tracking-wider text-sm transition-all duration-300"
          >
            Consultar Paquete
          </a>
        </div>
      </div>
    </motion.div>
  );
}
