import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Personalizar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    vehiculo: '',
    motor: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola A1 Motors! Quiero personalizar un proyecto.%0A%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Vehículo Aceptor:* ${formData.vehiculo}%0A*Motor LS Deseado:* ${formData.motor}%0A*Descripción:* ${formData.descripcion}`;
    window.open(`https://wa.me/50689948485?text=${message}`, '_blank');
    setFormData({
      nombre: '',
      telefono: '',
      vehiculo: '',
      motor: '',
      descripcion: ''
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-dark-base)] pb-24">
      <div className="bg-[var(--color-dark-surface)] py-20 border-b border-[var(--color-dark-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4 text-center"
          >
            Personaliza <span className="text-[var(--color-primary)]">Tu Proyecto</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-[var(--color-accent)] font-sans text-lg max-w-2xl mx-auto"
          >
            Completa el siguiente formulario con los detalles técnicos de tu visión. Nuestro equipo analizará la viabilidad y te contactará.
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--color-dark-surface)] p-8 sm:p-12 border border-[var(--color-dark-card)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--color-accent)] font-sans font-bold uppercase tracking-wider text-xs mb-2">Nombre completo</label>
                <input
                  required
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-dark-card)] border border-[var(--color-dark-card)] focus:border-[var(--color-primary)] text-white p-3 font-sans outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-[var(--color-accent)] font-sans font-bold uppercase tracking-wider text-xs mb-2">Teléfono</label>
                <input
                  required
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-dark-card)] border border-[var(--color-dark-card)] focus:border-[var(--color-primary)] text-white p-3 font-sans outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                  placeholder="+506 8888 8888"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--color-accent)] font-sans font-bold uppercase tracking-wider text-xs mb-2">Vehículo Aceptor</label>
                <input
                  required
                  type="text"
                  name="vehiculo"
                  value={formData.vehiculo}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-dark-card)] border border-[var(--color-dark-card)] focus:border-[var(--color-primary)] text-white p-3 font-sans outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                  placeholder="Ej: Chevrolet Silverado 1999"
                />
              </div>
              <div>
                <label className="block text-[var(--color-accent)] font-sans font-bold uppercase tracking-wider text-xs mb-2">Motor Deseado</label>
                <select
                  required
                  name="motor"
                  value={formData.motor}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-dark-card)] border border-[var(--color-dark-card)] focus:border-[var(--color-primary)] text-[var(--color-accent)] p-3 font-sans outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none"
                >
                  <option value="">Selecciona un motor</option>
                  <option value="LS 5.3">LS 5.3</option>
                  <option value="LS 6.0 LQ4">LS 6.0 LQ4</option>
                  <option value="LS 6.0 LQ9">LS 6.0 LQ9</option>
                  <option value="LS 6.2">LS 6.2 L99/LS3</option>
                  <option value="Otro">Otro (Especificar en descripción)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[var(--color-accent)] font-sans font-bold uppercase tracking-wider text-xs mb-2">Descripción del Proyecto</label>
              <textarea
                required
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                rows="5"
                className="w-full bg-[var(--color-dark-card)] border border-[var(--color-dark-card)] focus:border-[var(--color-primary)] text-white p-3 font-sans outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                placeholder="Detalla qué uso le darás al vehículo, si hay adaptaciones previas, etc."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-sans font-bold uppercase tracking-wider text-sm transition-colors duration-300 shadow-[0_0_15px_rgba(0,51,153,0.4)]"
            >
              Enviar a Mecánicos / WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
