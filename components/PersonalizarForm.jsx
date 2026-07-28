'use client';

import { useState } from 'react';

import { WhatsApp } from '@/components/icons';
import { whatsappUrl } from '@/lib/site';

const EMPTY = {
  nombre: '',
  telefono: '',
  vehiculo: '',
  motor: '',
  descripcion: '',
};

const MOTORES = [
  'LS 5.3 Gen 3',
  'LS 5.3 Gen 4',
  'LS 6.0 LQ4',
  'LS 6.0 LQ9',
  'LS 6.0 Gen 4',
  'LS 6.2 (L99 / LS3)',
  'No estoy seguro, necesito asesoría',
];

const field =
  'w-full border border-dark-border bg-dark-card p-3 font-sans text-white outline-none transition-all placeholder:text-muted/60 focus:border-primary-light focus:ring-1 focus:ring-primary-light';
const labelStyle =
  'mb-2 block font-sans text-xs font-bold uppercase tracking-wider text-accent';

export default function PersonalizarForm() {
  const [formData, setFormData] = useState(EMPTY);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Se arma en texto plano y se codifica una sola vez al final: así un "&"
    // o un "#" en la descripción no parte la URL de WhatsApp.
    const message = [
      '¡Hola A1 Motors Tico Swap! Quiero personalizar un proyecto.',
      '',
      `Nombre: ${formData.nombre}`,
      `Teléfono: ${formData.telefono}`,
      `Vehículo aceptor: ${formData.vehiculo}`,
      `Motor LS deseado: ${formData.motor}`,
      `Descripción: ${formData.descripcion}`,
    ].join('\n');

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setFormData(EMPTY);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelStyle}>
            Nombre completo
          </label>
          <input
            required
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            value={formData.nombre}
            onChange={handleChange}
            className={field}
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="telefono" className={labelStyle}>
            Teléfono
          </label>
          <input
            required
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={formData.telefono}
            onChange={handleChange}
            className={field}
            placeholder="+506 8888 8888"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="vehiculo" className={labelStyle}>
            Vehículo aceptor
          </label>
          <input
            required
            id="vehiculo"
            name="vehiculo"
            type="text"
            value={formData.vehiculo}
            onChange={handleChange}
            className={field}
            placeholder="Ej: Chevrolet Silverado 1999"
          />
          <p className="mt-2 font-sans text-xs text-muted">
            Marca, modelo y año del vehículo que va a recibir el motor.
          </p>
        </div>

        <div>
          <label htmlFor="motor" className={labelStyle}>
            Motor deseado
          </label>
          <select
            required
            id="motor"
            name="motor"
            value={formData.motor}
            onChange={handleChange}
            className={`${field} appearance-none`}
          >
            <option value="">Selecciona un motor</option>
            {MOTORES.map((motor) => (
              <option key={motor} value={motor}>
                {motor}
              </option>
            ))}
          </select>
          <p className="mt-2 font-sans text-xs text-muted">
            Si no estás seguro, elegí la última opción y lo vemos juntos.
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="descripcion" className={labelStyle}>
          Descripción del proyecto
        </label>
        <textarea
          required
          id="descripcion"
          name="descripcion"
          rows={5}
          value={formData.descripcion}
          onChange={handleChange}
          className={`${field} resize-none`}
          placeholder="Contanos qué uso le vas a dar al vehículo, si ya tiene adaptaciones, qué transmisión querés, etc."
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 border border-primary bg-primary py-4 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-secondary hover:border-secondary"
      >
        <WhatsApp size={18} />
        Enviar por WhatsApp
      </button>

      <p className="text-center font-sans text-xs text-muted">
        Al enviar se abre WhatsApp con los datos ya escritos. Solo tenés que
        darle enviar en el chat.
      </p>
    </form>
  );
}
