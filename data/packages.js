import gen4L60 from '@/assets/engines/gen4L60.webp';
import lq4 from '@/assets/engines/lq4.webp';
import lq9 from '@/assets/engines/lq9.webp';
import lsgen3 from '@/assets/engines/lsgen3.webp';
import lsgen4 from '@/assets/engines/lsgen4.webp';

/**
 * Paquetes de swap del catálogo.
 *
 * `description` y `alt` no son decorativos: alimentan el schema Product que
 * lee Google y el texto alternativo de las imágenes, que es lo que posiciona
 * en Google Imágenes.
 */
export const packages = [
  {
    id: 1,
    slug: 'ls-5-3-gen-3',
    name: 'LS 5.3 GEN 3',
    engine: '5.3 GEN 3',
    throttle: 'Chicote',
    transmission: '4L60',
    traction: '4x4',
    image: lsgen3,
    alt: 'Motor LS 5.3 Gen 3 rectificado con transmisión 4L60 para swap en Costa Rica',
    description:
      'Paquete de swap LS 5.3 Gen 3 con acelerador de chicote y transmisión 4L60, configurado para tracción 4x4. La opción más accesible para entrar al mundo LS.',
  },
  {
    id: 2,
    slug: 'ls-5-3-gen-4',
    name: 'LS 5.3 GEN 4',
    engine: '5.3 GEN 4',
    throttle: 'Pedal electrónico',
    transmission: '4L65',
    traction: '4x2',
    image: lsgen4,
    alt: 'Motor LS 5.3 Gen 4 con pedal electrónico y transmisión 4L65 para swap',
    description:
      'Paquete de swap LS 5.3 Gen 4 con pedal electrónico y transmisión 4L65 en configuración 4x2. Electrónica más moderna y mejor respuesta del acelerador.',
  },
  {
    id: 3,
    slug: 'ls-6-0-lq4',
    name: 'LS 6.0 LQ4',
    engine: '6.0 LQ4',
    throttle: 'Chicote',
    transmission: '4L80',
    traction: '4x4',
    image: lq4,
    alt: 'Motor LS 6.0 LQ4 rectificado con transmisión 4L80 para swap 4x4',
    description:
      'Paquete de swap LS 6.0 LQ4 con acelerador de chicote y transmisión 4L80 reforzada, ideal para pick-ups y proyectos 4x4 de trabajo pesado.',
  },
  {
    id: 4,
    slug: 'ls-6-0-lq4-electronico',
    name: 'LS 6.0 LQ4 Electrónico',
    engine: '6.0 LQ4',
    throttle: 'Pedal electrónico',
    transmission: '4L60',
    traction: '4x2',
    image: lq4,
    alt: 'Motor LS 6.0 LQ4 con pedal electrónico y transmisión 4L60 para swap 4x2',
    description:
      'Paquete de swap LS 6.0 LQ4 con pedal electrónico y transmisión 4L60 en configuración 4x2, con cableado y ECU listos para instalar.',
  },
  {
    id: 5,
    slug: 'ls-6-0-lq9',
    name: 'LS 6.0 LQ9',
    engine: '6.0 LQ9',
    throttle: 'Chicote',
    transmission: '4L65',
    traction: '4x4',
    image: lq9,
    alt: 'Motor LS 6.0 LQ9 rectificado con transmisión 4L65 para swap 4x4',
    description:
      'Paquete de swap LS 6.0 LQ9 con acelerador de chicote y transmisión 4L65 para 4x4. Mayor compresión que el LQ4 y más potencia de fábrica.',
  },
  {
    id: 6,
    slug: 'ls-6-0-lq9-electronico',
    name: 'LS 6.0 LQ9 Electrónico',
    engine: '6.0 LQ9',
    throttle: 'Pedal electrónico',
    transmission: '4L65',
    traction: '4x2',
    image: lq9,
    alt: 'Motor LS 6.0 LQ9 con pedal electrónico y transmisión 4L65 para swap 4x2',
    description:
      'Paquete de swap LS 6.0 LQ9 con pedal electrónico y transmisión 4L65 en configuración 4x2, la combinación más buscada para calle y pista.',
  },
  {
    id: 7,
    slug: 'ls-6-0-gen-4-performance',
    name: 'LS 6.0 GEN 4 Performance',
    engine: '6.0 GEN 4',
    throttle: 'Pedal electrónico',
    transmission: '6L80',
    traction: '4x2',
    image: gen4L60,
    alt: 'Motor LS 6.0 Gen 4 con transmisión automática 6L80 de seis velocidades para swap performance',
    description:
      'Paquete de swap LS 6.0 Gen 4 con transmisión 6L80 de seis velocidades. La configuración más completa del catálogo para proyectos de alto rendimiento.',
  },
];
