/**
 * Contenido de la guía de swap LS.
 *
 * Vive aparte de la página por la misma razón que `packages` y `transmissions`:
 * son los datos que alimentan a la vez el texto visible, las tablas y el schema
 * HowTo. Tenerlos en un solo lugar evita que el paso 4 de la tabla diga una cosa
 * y el paso 4 del JSON-LD diga otra.
 *
 * Las cifras de potencia y compresión son las de fábrica publicadas por General
 * Motors y varían según el año y las culatas. Se citan como referencia para
 * comparar motores entre sí, no como la potencia final de un swap: eso depende
 * del estado del motor, la calibración y los accesorios.
 */

/** Comparativa de los motores V8 de la familia LS que usamos en swaps. */
export const engineComparison = [
  {
    name: 'LS 5.3 Gen 3',
    displacement: '5.3 L',
    block: 'Hierro',
    factoryPower: '270–295 hp',
    bestFor: 'Primer swap, pick-ups y proyectos de calle con presupuesto medido.',
  },
  {
    name: 'LS 5.3 Gen 4',
    displacement: '5.3 L',
    block: 'Hierro o aluminio',
    factoryPower: '300–320 hp',
    bestFor: 'Quien quiere electrónica moderna y mejor respuesta de acelerador.',
  },
  {
    name: 'LS 6.0 LQ4',
    displacement: '6.0 L',
    block: 'Hierro',
    factoryPower: '300–330 hp',
    bestFor: 'Vehículos que cargan peso y 4x4 de trabajo pesado.',
  },
  {
    name: 'LS 6.0 LQ9',
    displacement: '6.0 L',
    block: 'Hierro',
    factoryPower: '345 hp',
    bestFor: 'Más potencia de fábrica que el LQ4 por su mayor compresión.',
  },
  {
    name: 'LS 6.0 Gen 4',
    displacement: '6.0 L',
    block: 'Aluminio o hierro',
    factoryPower: '355–367 hp',
    bestFor: 'Proyectos de alto rendimiento con transmisión de seis velocidades.',
  },
];

/** Cuándo corresponde cada transmisión automática GM. */
export const transmissionComparison = [
  {
    name: '4L60E',
    speeds: '4',
    traction: '4x2 / 4x4',
    whenToChoose:
      'Swaps de 5.3 en plataformas comunes. Es la más disponible y la más barata de reparar en Costa Rica.',
  },
  {
    name: '4L65E',
    speeds: '4',
    traction: '4x2 / 4x4',
    whenToChoose:
      'La misma caja reforzada con planetarios de cinco piñones. Aguanta más torque sin cambiar de tamaño.',
  },
  {
    name: '4L80E',
    speeds: '4',
    traction: '4x4',
    whenToChoose:
      'Trabajo pesado. Derivada de la TH400, es la opción cuando hay mucho torque o el vehículo carga peso.',
  },
  {
    name: '6L80E',
    speeds: '6',
    traction: '4x2',
    whenToChoose:
      'Mejor rendimiento en carretera y cambios más rápidos. La opción de performance del catálogo.',
  },
];

/**
 * El proceso real, en el orden en que ocurre. Alimenta el schema HowTo, que es
 * lo que se extrae cuando alguien le pregunta a un modelo "cómo se hace un
 * swap LS paso a paso".
 */
export const swapSteps = [
  {
    id: 'diagnostico',
    name: 'Diagnóstico del vehículo aceptor',
    text: 'Se revisa el vehículo que va a recibir el motor: espacio del compartimiento, estado del chasis y qué tan viable es la conversión antes de comprometer plata.',
  },
  {
    id: 'seleccion',
    name: 'Selección del motor y la transmisión',
    text: 'Se define qué motor V8 LS y qué transmisión GM corresponden al uso real del vehículo: no es lo mismo un carro de calle que un 4x4 que carga peso.',
  },
  {
    id: 'soportes',
    name: 'Adaptación de soportes y cardán',
    text: 'Se fabrican o adaptan los soportes de motor y caja, y se ajusta el cardán al nuevo largo. Es la parte que define si el motor queda alineado y sin vibraciones.',
  },
  {
    id: 'enfriamiento',
    name: 'Sistema de enfriamiento y escape',
    text: 'Se dimensiona el radiador y los ventiladores para el calor que genera un V8, y se arman los headers y el escape según el espacio disponible.',
  },
  {
    id: 'cableado',
    name: 'Cableado y electrónica',
    text: 'Se adapta el ramal del motor al vehículo y se resuelve la instrumentación: tacómetro, temperatura, testigos y señal de velocidad.',
  },
  {
    id: 'ecu',
    name: 'Programación de la ECU con HP Tuners',
    text: 'Se desbloquea la computadora, se elimina el antirrobo VATS y se calibran motor y transmisión. Sin este paso un LS trasplantado no arranca ni entrega lo que debería.',
  },
  {
    id: 'pruebas',
    name: 'Pruebas y ajuste final',
    text: 'Se rueda el vehículo, se revisan temperaturas y presiones, y se afina la calibración con el motor ya trabajando en su entorno definitivo.',
  },
];

/** Lo que mueve el precio de un swap, sin comprometer cifras por proyecto. */
export const costFactors = [
  {
    title: 'El motor y la transmisión',
    description:
      'Un 5.3 con 4L60E y un 6.0 Gen 4 con 6L80E no juegan en la misma categoría, ni en precio ni en lo que exigen del resto del vehículo.',
  },
  {
    title: 'El vehículo aceptor',
    description:
      'Una plataforma donde el swap ya está resuelto cuesta menos que una donde hay que fabricar soportes, modificar el túnel y rehacer el cardán.',
  },
  {
    title: 'El estado de lo que ya tiene',
    description:
      'Frenos, suspensión y diferencial fueron calculados para el motor original. Subir a un V8 muchas veces obliga a actualizarlos.',
  },
  {
    title: 'El alcance de la electrónica',
    description:
      'No es lo mismo conservar el tablero original que integrar instrumentación nueva, aire acondicionado y accesorios al ramal del LS.',
  },
];
