/**
 * Proyectos del taller: el antes y el después de cada swap.
 *
 * ---------------------------------------------------------------------------
 * CÓMO AGREGAR UN PROYECTO
 * ---------------------------------------------------------------------------
 * 1. Subí las fotos a imgur y copiá el id de cada una (la parte del medio de
 *    https://i.imgur.com/XXXXXXX.jpeg).
 * 2. Copiá un bloque de `projects` y cambiá los datos. El `slug` es la URL:
 *    /proyectos/<slug>. Una vez publicado NO lo cambiés, porque rompe el enlace
 *    que ya tenga indexado Google.
 * 3. El primer proyecto de la lista es el que sale grande y con el comparador
 *    en /proyectos, así que poné arriba el más reciente o el más impresionante.
 *
 * REGLA DEL COMPARADOR: la foto [0] de `before` se compara contra la foto [0]
 * de `after`. Elegí un par tomado desde el mismo ángulo: el efecto depende de
 * que las dos imágenes calcen. El resto de las fotos van en las galerías.
 *
 * Si ese par no es horizontal, poné `compareRatio` con la forma del marco
 * (`aspect-square`, `aspect-[3/4]`…). Las dos fotos se recortan para llenarlo,
 * así que conviene la proporción que menos les corte a las dos.
 *
 * `during` es opcional: las fotos del trabajo a medio camino (el motor en la
 * mesa, colgando del tecle, el compartimiento destapado). Si el proyecto no
 * las tiene, se omite el campo y esa sección no se dibuja.
 *
 * Las fotos se sirven desde imgur, pero el visitante nunca habla con imgur:
 * next/image las pasa por el optimizador de Vercel, que las baja una vez, las
 * convierte a AVIF y las cachea un año (ver `remotePatterns` en next.config).
 * Por eso hay que declarar `width` y `height` de cada foto: sin ellas el
 * navegador no sabe cuánto espacio reservar y la página salta al cargar (CLS).
 *
 * El `alt` describe lo que de verdad se ve en la foto. Es lo que posiciona las
 * imágenes en Google Imágenes y lo que escucha quien navega con lector de
 * pantalla; un "foto del proyecto 1" no sirve para ninguna de las dos cosas.
 */

/** Arma la URL de imgur a partir del id. */
const imgur = (id, alt, { width = 1600, height = 1200 } = {}) => ({
  src: `https://i.imgur.com/${id}.jpeg`,
  alt,
  width,
  height,
});

export const projects = [
  {
    slug: 'camaro-v6-a-v8',
    name: 'Chevrolet Camaro de V6 a V8',
    /** Versión corta, para tarjetas y migas de pan. */
    shortName: 'Camaro V6 a V8',

    /** El titular del cambio. Sale grande, con el V6 tachado en rojo. */
    from: 'V6',
    to: 'V8',

    vehicle: 'Chevrolet Camaro',
    /**
     * Fecha en la que se terminó. Ordena los proyectos —el más reciente sale
     * de destacado en /proyectos— y alimenta el `datePublished` del schema,
     * que es lo que Google y los modelos de IA leen para saber si el
     * contenido sigue vigente.
     * TODO A1 Motors: poner la fecha real de entrega.
     */
    date: '2026-01-15',

    summary:
      'Un Camaro 2012 entró al taller con el V6 manual de fábrica y salió con un LS3 6.2 y caja TR6060. De paso también cambió de color: entró negro y salió blanco.',

    intro:
      'El Camaro de quinta generación viene de fábrica con dos mundos distintos bajo el mismo capó: el V6 de la versión de entrada y el V8 de la SS. Pasar de uno al otro no es solo meter el motor grande, porque cambian los soportes, el sistema de admisión, el enfriamiento y, sobre todo, lo que la computadora espera encontrar. Acá además se mantuvo la caja manual, que obliga a resolver el embrague y el mando del cambio junto con todo lo demás. Tres meses de trabajo en nuestro taller de Grecia, Alajuela.',

    /**
     * Ficha técnica. Las filas sin `value` no se pintan, así que se puede
     * dejar una a medias sin que quede un hueco raro en la página.
     */
    specs: [
      { label: 'Vehículo', value: 'Chevrolet Camaro' },
      { label: 'Año', value: '2012' },
      { label: 'Generación', value: 'Quinta (2010-2015)' },
      { label: 'Motor original', value: 'V6 3.6 de fábrica' },
      { label: 'Motor instalado', value: 'V8 LS3 6.2' },
      { label: 'Transmisión original', value: 'Manual de fábrica' },
      { label: 'Transmisión instalada', value: 'Manual TR6060 de 6 velocidades' },
      { label: 'Pintura', value: 'De negro a blanco' },
      { label: 'Duración', value: '3 meses' },
      { label: 'Taller', value: 'Grecia, Alajuela' },
    ],

    /**
     * Lo que de verdad se tocó. Se pinta como lista con viñeta roja en la
     * página de detalle.
     */
    work: [
      'Desmontaje del V6 3.6 de fábrica, su caja manual y el cableado asociado',
      'Instalación del V8 LS3 6.2 con sus soportes y accesorios',
      'Caja manual TR6060 de seis velocidades, con su embrague y su mando de cambios',
      'Sistema de admisión de alto flujo con caja de aire cerrada',
      'Reordenado del compartimiento: mangueras, cableado y terminales',
      'Cambio de color completo, de negro a blanco, hecho en el taller',
    ],

    /**
     * Foto de portada: la que sale al compartir el enlace en WhatsApp,
     * Facebook o Instagram. Conviene una donde se vea el carro completo.
     */
    cover: imgur(
      'VWV9aKf',
      'Chevrolet Camaro 2012 con el capó abierto en el taller de A1 Motors Tico Swap, ya con el swap a LS3 terminado y repintado de blanco',
      { width: 1156, height: 868 },
    ),

    /** [0] es la mitad izquierda del comparador. */
    before: [
      imgur(
        'asfzDtZ',
        'Compartimiento de motor de un Chevrolet Camaro 2012 negro con el V6 3.6 de fábrica, su tapa plástica y la caja de aire original',
        { width: 1600, height: 1201 },
      ),
      imgur(
        'vXT7A71',
        'Frente del Chevrolet Camaro negro con el capó abierto, mostrando el V6 3.6 original antes del swap a LS3',
        { width: 1600, height: 1201 },
      ),
      imgur(
        'I2SDprW',
        'Chevrolet Camaro 2012 negro estacionado con el capó abierto en el taller de A1 Motors Tico Swap, antes de empezar el swap a LS3',
        { width: 1600, height: 1201 },
      ),
    ],

    /** [0] es la mitad derecha del comparador: mismo ángulo que before[0]. */
    after: [
      imgur(
        'Q9cvvWk',
        'Compartimiento del Chevrolet Camaro ya repintado de blanco, con el V8 LS3 6.2 instalado, tapas Chevrolet amarillas y caja de aire de alto flujo',
        { width: 1600, height: 1200 },
      ),
      imgur(
        'HYy66vV',
        'Vista lateral del V8 LS3 instalado en el Camaro, con filtro de alto flujo y calcomanía de A1 Motors Tico Swap en la caja de aire',
        { width: 1600, height: 1200 },
      ),
      imgur(
        'FC4BCYF',
        'Primer plano del múltiple de admisión del LS3 con las tapas Chevrolet pintadas de amarillo y el emblema V8',
        { width: 1600, height: 1201 },
      ),
      imgur(
        'VWV9aKf',
        'Chevrolet Camaro 2012 repintado de blanco con el capó abierto en el taller, ya con el swap a LS3 terminado',
        { width: 1156, height: 868 },
      ),
    ],
  },

  {
    slug: 'chevrolet-panchito-1952-ls2-corvette',
    name: 'Chevrolet Panchito 1952 con LS2 de Corvette',
    shortName: 'Panchito 1952 LS2',

    from: '350',
    to: 'LS2',

    vehicle: 'Chevrolet Panchito 1952',
    // TODO A1 Motors: poner la fecha real de entrega. Si esta queda posterior
    // a la del Camaro, el Panchito pasa a ser el proyecto destacado.
    date: '2025-09-10',

    // El par del comparador es una foto vertical contra una casi cuadrada, así
    // que el marco va cuadrado: es la forma que menos les recorta a las dos.
    compareRatio: 'aspect-square',

    summary:
      'Una pickup Chevrolet de 1952 que llegó con un V8 350 de bloque pequeño y salió con un LS2 de Corvette metido en el mismo compartimiento azul.',

    intro:
      'Meter un motor moderno en una carrocería de más de setenta años es un trabajo distinto al de un carro nuevo: no hay soportes que calcen, no hay espacio de sobra y todo lo que se instala hay que fabricarlo o adaptarlo. El LS2 de Corvette es un V8 6.0 de inyección con computadora, así que además del acople mecánico hay que resolverle el cableado, el enfriamiento y la calibración. El resultado mantiene la línea clásica del Panchito y le cambia por completo lo que tiene debajo del capó.',

    /** TODO A1 Motors: completar la duración. */
    specs: [
      { label: 'Vehículo', value: 'Chevrolet Panchito (pickup clásica)' },
      { label: 'Año', value: '1952' },
      { label: 'Motor que traía', value: 'V8 350 de bloque pequeño' },
      { label: 'Motor instalado', value: 'V8 LS2 6.0 de Corvette' },
      { label: 'Transmisión', value: 'Automática 4L65' },
      { label: 'Duración', value: '' },
      { label: 'Taller', value: 'Grecia, Alajuela' },
    ],

    /** TODO A1 Motors: ajustar según lo que realmente llevó el trabajo. */
    work: [
      'Desmontaje del V8 350 de carburador y de todo su sistema de encendido',
      'Instalación del LS2 6.0 de Corvette, con adaptación de soportes al chasis',
      'Transmisión automática 4L65 acoplada al motor nuevo',
      'Enfriamiento y mangueras nuevas para acompañar el motor de inyección',
      'Cableado y computadora del LS2 montados en el compartimiento original',
    ],

    cover: imgur(
      '3d3ef8B',
      'Pickup Chevrolet Panchito de 1952 azul, con aros de rayos y placa de Costa Rica, después del swap a LS2 de Corvette',
      { width: 1600, height: 1201 },
    ),

    before: [
      imgur(
        '5ZRdXYm',
        'Compartimiento azul de una pickup Chevrolet de 1952 con el V8 350 de bloque pequeño, filtro de aire cromado Edelbrock y tapas de balancines cromadas',
        { width: 1200, height: 1600 },
      ),
    ],

    after: [
      imgur(
        'Ddps9Wi',
        'El mismo compartimiento azul de la pickup Chevrolet de 1952 con el V8 LS2 de Corvette instalado, tapas negras con letras rojas, tubo de admisión rojo y filtro cónico',
        { width: 1201, height: 1141 },
      ),
      imgur(
        '3d3ef8B',
        'Pickup Chevrolet Panchito de 1952 azul vista de frente y de tres cuartos, con parrilla y parachoques cromados y aros de rayos',
        { width: 1600, height: 1201 },
      ),
      imgur(
        'vH3kxo9',
        'Pickup Chevrolet Panchito de 1952 azul vista desde el lado del pasajero, bajada de suspensión y con el cajón original',
        { width: 1600, height: 1201 },
      ),
    ],
  },

  {
    slug: 'chevrolet-pick-up-250-a-ls-6-0',
    name: 'Chevrolet pick up de 250 en línea a LS 6.0',
    shortName: 'Chevy pick up LS 6.0',

    from: '250',
    to: 'LS 6.0',

    vehicle: 'Chevrolet pick up',
    // TODO A1 Motors: poner la fecha real de entrega. Hoy queda de segundo en
    // la lista; con una fecha posterior a la del Camaro pasa a ser el
    // proyecto destacado de /proyectos.
    date: '2025-8-20',

    // El par del comparador son dos fotos cuadradas tomadas desde el mismo
    // punto, así que el marco va cuadrado y no se recorta nada.
    compareRatio: 'aspect-square',

    summary:
      'Una pick up Chevrolet que llegó con su 250 de seis cilindros en línea y de carburador, y salió con un LS 6.0 de inyección, caja 4L80.',

    intro:
      'Cambiar un seis en línea de carburador por un V8 de inyección es de los saltos más grandes que se pueden dar: no comparten soportes, ni escape, ni forma de alimentarse, ni manera de encender. El motor se armó completo fuera del vehículo —pintado, con sus accesorios y listo para bajar— y solo entonces se montó en el chasis. El múltiple de admisión de aluminio lo fabricamos nosotros, y es la pieza que le da el sello a este compartimiento.',

    /** TODO A1 Motors: completar el año del vehículo y la duración. */
    specs: [
      { label: 'Vehículo', value: 'Chevrolet pick up' },
      { label: 'Año', value: '' },
      { label: 'Motor original', value: '250 de 6 cilindros en línea' },
      { label: 'Motor instalado', value: 'V8 LS 6.0' },
      { label: 'Transmisión', value: 'Automática 4L80' },
      { label: 'Duración', value: '' },
      { label: 'Taller', value: 'Grecia, Alajuela' },
    ],

    work: [
      'Desmontaje del 250 de seis cilindros en línea, con su carburador y su encendido',
      'Armado del LS 6.0 fuera del vehículo: pintado y con sus accesorios montados',
      'Instalación del motor con adaptación de soportes al chasis de la pick up',
      'Transmisión automática 4L80, que es la que aguanta el torque de un 6.0',
      'Cableado, computadora y enfriamiento resueltos para el motor de inyección',
    ],

    cover: imgur(
      'pxaCeGA',
      'Pick up Chevrolet azul bajada de suspensión, con el capó abierto en el taller de A1 Motors Tico Swap después del swap a LS 6.0',
      { width: 3024, height: 3024 },
    ),

    before: [
      imgur(
        'rYVK3wo',
        'Compartimiento azul de una pick up Chevrolet con el motor 250 de seis cilindros en línea original, su carburador y su tapa de balancines negra',
        { width: 3024, height: 3024 },
      ),
    ],

    /** Fotos del taller a medio camino: el motor armado y la instalación. */
    during: [
      imgur(
        'p5AEa3G',
        'El motor LS 6.0 armado sobre la mesa de trabajo, con el bloque pintado de azul y las culatas en aluminio, con la pick up cubierta al fondo',
        { width: 1600, height: 1200 },
      ),
      imgur(
        'plK7QPe',
        'El LS 6.0 colgando de la cadena del tecle sobre el frente de la pick up Chevrolet azul, listo para bajarlo al compartimiento',
        { width: 1200, height: 1600 },
      ),
    ],

    after: [
      imgur(
        '1PQTw5r',
        'Compartimiento de la pick up Chevrolet con el LS 6.0 instalado y el múltiple de admisión de aluminio A1 Motors, con bobinas y cableado ordenados',
        { width: 3024, height: 3024 },
      ),
      imgur(
        '5wFpisG',
        'Primer plano del múltiple de admisión de aluminio fabricado por A1 Motors, con el filtro cónico Edelbrock montado sobre el LS 6.0',
        { width: 3024, height: 3024 },
      ),
      imgur(
        'pxaCeGA',
        'Pick up Chevrolet azul con el capó abierto en el taller, bajada de suspensión y con aros de aluminio, ya con el swap a LS 6.0 terminado',
        { width: 3024, height: 3024 },
      ),
      imgur(
        'Biq4KWy',
        'Otra vista de la pick up Chevrolet azul con el capó abierto en el taller de A1 Motors Tico Swap, con el LS 6.0 instalado',
        { width: 3024, height: 3024 },
      ),
    ],
  },

  {
    slug: 'chevrolet-tahoe-1998-lq4',
    name: 'Chevrolet Tahoe 1998 con LS 6.0 LQ4',
    shortName: 'Tahoe 1998 LQ4',

    from: '350',
    to: 'LQ4 6.0',

    vehicle: 'Chevrolet Tahoe',
    // TODO A1 Motors: poner la fecha real de entrega. Esta lo deja de segundo,
    // justo después del Camaro.
    date: '2025-12-20',

    summary:
      'Un Tahoe de dos puertas del 98 que cambió su 350 Vortec por un LS 6.0 LQ4 con caja 4L60. El motor y la caja se pintaron en rojo a juego con la carrocería antes de montarlos.',

    intro:
      'El 350 que traía y el LQ4 que se le puso llevan los dos el apellido Vortec, pero los separa una generación completa: el primero es un bloque pequeño de los de siempre, con distribuidor; el segundo ya es de la familia LS, con inyección secuencial y computadora. Acá el trabajo no se quedó en lo mecánico: el motor, la caja y los múltiples se prepararon y se pintaron en rojo a juego con la carrocería antes de bajarlos, para que el compartimiento quedara tan trabajado como el resto del carro.',

    /** TODO A1 Motors: completar la duración. */
    specs: [
      { label: 'Vehículo', value: 'Chevrolet Tahoe de dos puertas' },
      { label: 'Año', value: '1998' },
      { label: 'Motor original', value: '350 Vortec de bloque pequeño' },
      { label: 'Motor instalado', value: 'V8 LS 6.0 LQ4' },
      { label: 'Transmisión', value: 'Automática 4L60, tracción 4x2' },
      { label: 'Escape', value: 'Múltiples tipo header en acero inoxidable' },
      { label: 'Duración', value: '' },
      { label: 'Taller', value: 'Grecia, Alajuela' },
    ],

    work: [
      'Desmontaje del 350 Vortec de fábrica con su caja y su cableado',
      'Motor LQ4 y caja 4L60 armados y pintados en rojo, a juego con la carrocería',
      'Múltiples de escape tipo header en acero inoxidable',
      'Instalación del conjunto motor y caja con adaptación de soportes al chasis',
      'Cableado, computadora y enfriamiento resueltos para el LQ4',
    ],

    cover: imgur(
      'Qs83A4J',
      'Chevrolet Tahoe 1998 de dos puertas rojo y gris, bajado de suspensión y con aros pulidos, después del swap a LS 6.0 LQ4',
      { width: 2880, height: 2160 },
    ),

    /** Sin fotos del motor viejo: la ficha enseña la portada en grande. */
    before: [],

    during: [
      imgur(
        'wzaroJm',
        'El Chevrolet Tahoe rojo con el frente desarmado y el conjunto de motor LQ4 y caja 4L60 colgando de la grúa, todo pintado en rojo',
        { width: 1600, height: 900 },
      ),
      imgur(
        'Xcjx481',
        'El LQ4 6.0 y la caja 4L60 pintados en rojo colgando de la grúa, con múltiples tipo header en acero inoxidable y calcomanías de A1 Motors Tico Swap',
        { width: 2419, height: 3226 },
      ),
      imgur(
        'hRRDzuz',
        'Bajando el LQ4 al compartimiento del Tahoe con el frente desarmado, con un mecánico guiando el motor desde el tecle',
        { width: 3024, height: 4032 },
      ),
    ],

    after: [
      imgur(
        'AOHnPVx',
        'Compartimiento terminado del Chevrolet Tahoe con el LS 6.0 LQ4 instalado, tapa Vortec pintada en rojo y negro, tubo de admisión pulido y filtro cónico',
        { width: 1170, height: 1919 },
      ),
      imgur(
        'Qs83A4J',
        'Chevrolet Tahoe 1998 de dos puertas rojo y gris terminado, con aros pulidos y placa de Costa Rica, ya con el swap a LS 6.0 LQ4',
        { width: 2880, height: 2160 },
      ),
    ],
  },

  {
    slug: 'dodge-warlock-a-ls-5-3',
    name: 'Dodge Warlock con LS 5.3',
    shortName: 'Dodge Warlock LS 5.3',

    from: 'V8',
    to: 'LS 5.3',

    vehicle: 'Dodge Warlock',
    // TODO A1 Motors: poner la fecha real de entrega.
    date: '2025-1-05',

    // Sin `compareRatio`: el marco 4:3 por defecto deja la foto del después
    // sin recortar y le hace un acercamiento al compartimiento en la del
    // antes, que está tomada desde más lejos. Un marco cuadrado dejaba el
    // motor viejo demasiado chiquito al lado del nuevo.

    summary:
      'Una Dodge Warlock que cambió su V8 original de carburador por un LS 5.3 de inyección, con caja 4L65 y el compartimiento desarmado y repintado antes de montar el motor nuevo.',

    intro:
      'La Warlock es de las pick ups que uno no quiere tocar de más: la gracia está en que se vea como salió de fábrica. Por eso acá el trabajo fue tan de adentro como de motor. El compartimiento se desarmó y se repintó, y el LS 5.3 se montó buscando que se viera como si siempre hubiera estado ahí, con la admisión y las mangueras acomodadas al espacio original en vez de al revés.',

    /** TODO A1 Motors: completar el año, el V8 original exacto y la duración. */
    specs: [
      { label: 'Vehículo', value: 'Dodge Warlock' },
      { label: 'Año', value: '' },
      { label: 'Motor original', value: 'V8 de fábrica con carburador' },
      { label: 'Motor instalado', value: 'V8 LS 5.3' },
      { label: 'Transmisión', value: 'Automática 4L65' },
      { label: 'Duración', value: '' },
      { label: 'Taller', value: 'Grecia, Alajuela' },
    ],

    /** TODO A1 Motors: confirmar si la pintura del compartimiento fue en el taller. */
    work: [
      'Desmontaje del V8 original con su carburador y su sistema de encendido',
      'Compartimiento desarmado y repintado antes de montar el motor nuevo',
      'Instalación del LS 5.3 con adaptación de soportes al chasis',
      'Transmisión automática 4L65 acoplada al motor',
      'Cableado, computadora y enfriamiento resueltos para el motor de inyección',
    ],

    cover: imgur(
      'LJt5yjG',
      'Dodge Warlock azul con cajón escalonado y parachoques cromado, estacionada en la calle después del swap a LS 5.3',
      { width: 1600, height: 1200 },
    ),

    before: [
      imgur(
        'VGcyWaQ',
        'Frente de una Dodge Warlock azul con el capó abierto, mostrando el V8 original de carburador y el cableado viejo antes del swap',
        { width: 1200, height: 1600 },
      ),
    ],

    during: [
      imgur(
        'fjUaszm',
        'El LS 5.3 recién bajado al compartimiento de la Dodge Warlock, con el compartimiento ya repintado de azul y sin el radiador todavía',
        { width: 1600, height: 1200 },
      ),
      imgur(
        'V29fT29',
        'Vista lateral del LS 5.3 montado en la Warlock durante el armado, con el abanico instalado y el compartimiento azul recién pintado',
        { width: 1600, height: 1200 },
      ),
    ],

    after: [
      imgur(
        'yKf9jK2',
        'Compartimiento terminado de la Dodge Warlock con el LS 5.3 instalado, tubo de admisión pulido, manguera de silicona azul y filtro cónico',
        { width: 1600, height: 1200 },
      ),
      imgur(
        'LJt5yjG',
        'Dodge Warlock azul vista de tres cuartos en la calle, con cajón escalonado y parachoques cromado, ya con el swap a LS 5.3 terminado',
        { width: 1600, height: 1200 },
      ),
    ],
  },

  {
    slug: 'land-rover-defender-ls-5-3',
    name: 'Land Rover Defender con LS 5.3',
    shortName: 'Defender LS 5.3',

    // TODO A1 Motors: si se sabe qué motor traía (300Tdi, Td5, V8…), ponerlo
    // acá en vez de "Original". Un titular con el motor real —por ejemplo
    // "300Tdi a LS 5.3"— pesa mucho más que uno genérico, tanto para quien lo
    // lee como para lo que la gente busca en Google.
    from: 'Original',
    to: 'LS 5.3',

    vehicle: 'Land Rover Defender',
    date: '2024-11-15',

    summary:
      'Un Defender que dejó su motor original por un LS 5.3 armado desde cero en el taller, con caja 4L80 y la tracción 4x4 intacta. Entregado en 2024.',

    intro:
      'De este proyecto no quedaron fotos del motor viejo, pero sí de lo que de verdad cuesta: el armado. El LS 5.3 se construyó completo sobre el banco —bloque pintado, tapas de balancines, múltiples de escape tipo header en acero inoxidable y cuerpo de aceleración de 102mm— y en paralelo se prepararon y pintaron las piezas del tren motriz: convertidor, cardán, soportes y platos de freno. Todo eso antes de que el motor tocara el chasis. La 4L80 mantiene la tracción 4x4, que en un Defender no es un detalle: es la razón de ser del carro.',

    /** TODO A1 Motors: completar el año del vehículo y la duración. */
    specs: [
      { label: 'Vehículo', value: 'Land Rover Defender' },
      { label: 'Año', value: '' },
      { label: 'Motor original', value: 'El de fábrica' },
      { label: 'Motor instalado', value: 'V8 LS 5.3 armado en el taller' },
      { label: 'Transmisión', value: 'Automática 4L80 con tracción 4x4' },
      { label: 'Escape', value: 'Múltiples tipo header en acero inoxidable' },
      { label: 'Entregado', value: '2024' },
      { label: 'Duración', value: '' },
      { label: 'Taller', value: 'Grecia, Alajuela' },
    ],

    work: [
      'Armado completo del LS 5.3 sobre el banco, con el bloque pintado y sus accesorios',
      'Múltiples de escape tipo header en acero inoxidable',
      'Transmisión automática 4L80 conservando la tracción 4x4',
      'Preparación y pintura del tren motriz: convertidor, cardán, soportes y platos de freno',
      'Adaptación de soportes de motor y caja al chasis del Defender',
    ],

    cover: imgur(
      'pmHroum',
      'Land Rover Defender rojo con parrilla de techo, snorkel y llantas de barro, con el capó abierto en el taller de A1 Motors Tico Swap',
      { width: 1448, height: 1086 },
    ),

    /** Sin fotos del motor viejo: la ficha enseña la portada en grande. */
    before: [],

    during: [
      imgur(
        'gG19Loq',
        'El LS 5.3 armado sobre el banco con el bloque pintado de rojo, tapas de balancines negras y múltiples de escape tipo header en acero inoxidable',
        { width: 1600, height: 1200 },
      ),
      imgur(
        '5p39N8d',
        'Vista lateral del LS 5.3 armado, con el cuerpo de aceleración de 102mm, el alternador nuevo y la bomba de dirección montados',
        { width: 1600, height: 1200 },
      ),
      imgur(
        '9a0ybwU',
        'El LS 5.3 visto de frente sobre el banco, con el cuerpo de aceleración de 102mm y las poleas negras instaladas',
        { width: 1200, height: 1600 },
      ),
      imgur(
        'Q5XXWlr',
        'Piezas del tren motriz preparadas y pintadas junto al Defender: convertidor de torque, cardán, soportes, platos de freno y los múltiples de escape',
        { width: 1600, height: 1200 },
      ),
      imgur(
        'nsYKcc8',
        'Convertidor de torque, cardán, soportes de motor y platos de freno pintados sobre la mesa, con el Land Rover Defender rojo al fondo',
        { width: 1200, height: 1600 },
      ),
    ],

    after: [
      imgur(
        '8lJSiHn',
        'El LS 5.3 instalado en el compartimiento rojo del Land Rover Defender, con la tapa del múltiple pintada a juego y el cuerpo de aceleración pulido',
        { width: 1600, height: 1200 },
      ),
      imgur(
        'pmHroum',
        'Land Rover Defender rojo terminado, con parrilla de techo, snorkel, barra de luces y defensa delantera, ya con el swap a LS 5.3',
        { width: 1448, height: 1086 },
      ),
    ],
  },
];

/**
 * Fotos sueltas: un motor recién armado, una caja lista, un carro entregado.
 * Todo lo que vale la pena enseñar pero no da para un proyecto completo.
 *
 * Se pintan en una grilla al final de /proyectos, con visor a pantalla
 * completa. Si el arreglo queda vacío, la sección entera no se dibuja.
 *
 * Para agregar una:
 *   imgur('IDDEIMGUR', 'Descripción de lo que se ve en la foto', { width, height }),
 */
export const shots = [];

/** Proyectos ordenados del más reciente al más viejo. */
export const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

/**
 * Proyecto anterior y siguiente, para navegar entre fichas sin volver al
 * índice. Da la vuelta al final de la lista para que nunca quede un callejón
 * sin salida.
 */
export function getProjectNeighbours(slug) {
  const total = sortedProjects.length;
  const index = sortedProjects.findIndex((project) => project.slug === slug);
  if (index === -1 || total < 2) return { previous: null, next: null };

  const previous = sortedProjects[(index - 1 + total) % total];
  const next = sortedProjects[(index + 1) % total];

  // Con solo dos proyectos la vuelta hace que "anterior" y "siguiente" caigan
  // en el mismo, y quedan dos botones distintos llevando al mismo lado. En ese
  // caso se deja uno.
  return { previous: previous === next ? null : previous, next };
}

/**
 * ¿Tiene el par de fotos que necesita el comparador?
 *
 * No todos los proyectos traen foto del motor viejo. Cuando falta, la ficha
 * enseña la foto de portada en grande en vez del comparador, y se saltan la
 * sección "Cómo llegó" y el título de "antes y después".
 */
export function hasComparison(project) {
  return Boolean(project.before?.[0] && project.after?.[0]);
}

/** Todas las fotos de un proyecto, en el orden en que cuentan la historia. */
export function projectPhotos(project) {
  return [
    ...(project.before ?? []),
    ...(project.during ?? []),
    ...(project.after ?? []),
  ];
}

/** Total de fotos publicadas, para la tira de datos del encabezado. */
export const totalPhotos =
  projects.reduce((count, project) => count + projectPhotos(project).length, 0) +
  shots.length;
