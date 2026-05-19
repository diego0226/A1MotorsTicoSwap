import { motion } from 'framer-motion';
import p1 from '../assets/galeria/proyecto1.png';
import p2 from '../assets/galeria/proyecto2.png';
import p3 from '../assets/galeria/proyecto3.png';
import p4 from '../assets/galeria/proyecto4.png';

export default function Gallery() {
  const images = [
    p1,
    p2,
    p3,
    p4,
  ];

  return (
    <section className="py-24 bg-[var(--color-dark-base)] border-b border-[var(--color-dark-card)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
              GALERÍA DE PROYECTOS
            </h2>
            <div className="h-1 w-24 bg-[var(--color-primary)]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-64 sm:h-80 overflow-hidden group border border-[var(--color-dark-base)]"
            >
              <div className="absolute inset-0 bg-[var(--color-dark-base)]/14 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={img}
                alt={`Proyecto ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--color-dark-base)] to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-display font-bold uppercase tracking-wider text-sm">Construcción {idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
