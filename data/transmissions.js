import t4L60 from '@/assets/transmision/4L60.webp';
import t4L65 from '@/assets/transmision/4L65.webp';
import t4L80 from '@/assets/transmision/4L80.webp';
import t6L80 from '@/assets/transmision/6L80.webp';

/** Transmisiones automáticas GM disponibles para acompañar el swap. */
export const transmissions = [
  {
    id: 1,
    slug: '4l60e',
    name: '4L60E',
    traction: '4x2 / 4x4',
    speeds: '4 velocidades',
    image: t4L60,
    alt: 'Transmisión automática GM 4L60E para swap LS en Costa Rica',
    description:
      'Transmisión automática GM 4L60E de cuatro velocidades, compatible con 4x2 y 4x4. La más común en swaps LS 5.3 por su tamaño y disponibilidad de repuestos.',
  },
  {
    id: 2,
    slug: '4l65e',
    name: '4L65E',
    traction: '4x2 / 4x4',
    speeds: '4 velocidades',
    image: t4L65,
    alt: 'Transmisión automática GM 4L65E reforzada para swap LS',
    description:
      'Transmisión automática GM 4L65E, versión reforzada de la 4L60E con planetarios de cinco piñones. Aguanta más torque sin cambiar de tamaño.',
  },
  {
    id: 3,
    slug: '4l80e',
    name: '4L80E',
    traction: '4x4',
    speeds: '4 velocidades',
    image: t4L80,
    alt: 'Transmisión automática GM 4L80E de trabajo pesado para swap LS 4x4',
    description:
      'Transmisión automática GM 4L80E de trabajo pesado para configuraciones 4x4. La elección obvia cuando el motor entrega mucho torque o el vehículo carga peso.',
  },
  {
    id: 4,
    slug: '6l80e',
    name: '6L80E',
    traction: '4x2',
    speeds: '6 velocidades',
    image: t6L80,
    alt: 'Transmisión automática GM 6L80E de seis velocidades para swap LS performance',
    description:
      'Transmisión automática GM 6L80E de seis velocidades. Cambios más rápidos y mejor rendimiento de combustible en carretera que las de cuatro marchas.',
  },
];
