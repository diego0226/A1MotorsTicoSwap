import proyecto1 from '@/assets/galeria/proyecto1.webp';
import proyecto2 from '@/assets/galeria/proyecto2.webp';
import proyecto3 from '@/assets/galeria/proyecto3.webp';
import proyecto4 from '@/assets/galeria/proyecto4.webp';

/**
 * Proyectos terminados.
 *
 * El `alt` describe lo que realmente aparece en cada foto: es lo que posiciona
 * las imágenes en Google Imágenes y lo que escucha quien navega con lector de
 * pantalla. Un "Proyecto 1" genérico no sirve para ninguna de las dos cosas.
 *
 * `href` es opcional y apunta a la ficha del proyecto en /proyectos cuando esa
 * foto sale de un trabajo que ya está documentado. Las que lo tienen se
 * vuelven un enlace, así que esta galería deja de ser solo decorado y manda
 * tráfico —y autoridad de enlace— a la ficha completa.
 */
export const gallery = [
  {
    image: proyecto1,
    title: 'Múltiple de admisión A1 Motors',
    alt: 'Motor LS instalado en compartimiento azul con múltiple de admisión personalizado A1 Motors y cableado ordenado',
    href: '/proyectos/chevrolet-pick-up-250-a-ls-6-0',
  },
  {
    image: proyecto2,
    title: 'Swap LS2 de Corvette',
    alt: 'Motor LS2 de Corvette instalado en un proyecto azul con admisión de alto flujo y filtro de rendimiento',
    href: '/proyectos/chevrolet-panchito-1952-ls2-corvette',
  },
  {
    image: proyecto3,
    title: 'Toyota Land Cruiser FJ40',
    alt: 'Toyota Land Cruiser FJ40 blanco con swap de motor LS instalado y radiador de aluminio',
  },
  {
    image: proyecto4,
    title: 'Chevrolet Tahoe en pista',
    alt: 'Chevrolet Tahoe de dos puertas rojo y gris con swap LS en el autódromo, con placa de Costa Rica',
    href: '/proyectos/chevrolet-tahoe-1998-lq4',
  },
];
