/**
 * Preguntas frecuentes.
 *
 * Doble propósito: resuelven dudas reales antes de que la persona escriba, y
 * generan el schema FAQPage que Google puede mostrar desplegado en los
 * resultados. Cada pregunta apunta a una búsqueda de cola larga distinta
 * ("cuánto cuesta un swap ls", "qué motor le queda a mi carro", etc.).
 *
 * Las respuestas evitan comprometer precios o plazos exactos: eso se define
 * por proyecto y se conversa por WhatsApp.
 */
export const faqs = [
  {
    question: '¿Qué es un swap LS y por qué se hace en Costa Rica?',
    answer:
      'Un swap LS consiste en reemplazar el motor original de un vehículo por un motor GM de la familia LS (5.3, 6.0 LQ4, LQ9 o 6.2). Se hace porque son motores V8 con mucha potencia, mecánica sencilla y una enorme disponibilidad de repuestos y mejoras. En Costa Rica es la conversión más popular para modernizar pick-ups y proyectos de alto rendimiento sin depender de un motor de fábrica difícil de conseguir.',
  },
  {
    question: '¿Cuánto cuesta un swap LS en Costa Rica?',
    answer:
      'El precio depende del motor elegido, la transmisión, el vehículo aceptor y qué tanto haya que adaptar. Un LS 5.3 con 4L60E en una plataforma común no cuesta lo mismo que un 6.0 Gen 4 con 6L80E. Por eso cotizamos cada proyecto por separado: escribinos por WhatsApp con la marca, el modelo y el año de tu vehículo y te damos un estimado real.',
  },
  {
    question: '¿En qué vehículos se puede hacer un swap LS?',
    answer:
      'El motor LS es compacto para ser un V8, así que entra en muchas plataformas: pick-ups Chevrolet y GMC, SUV, sedanes con tracción trasera y proyectos personalizados. Lo que define la viabilidad no es tanto el motor como el espacio del compartimiento, los soportes, el cardán y el sistema de enfriamiento. Analizamos tu caso antes de comprometer nada.',
  },
  {
    question: '¿Qué incluye un paquete de swap?',
    answer:
      'Los paquetes del catálogo se arman con el motor LS rectificado y la transmisión GM correspondiente, en la configuración de acelerador (chicote o pedal electrónico) y tracción que indica cada ficha. La instalación, la adaptación al vehículo y la programación de la ECU se cotizan según el proyecto.',
  },
  {
    question: '¿De dónde vienen los motores y en qué estado llegan?',
    answer:
      'Trabajamos con motores 100% rectificados traídos desde México, seleccionados por potencia, confiabilidad y calidad. No vendemos motores de patio sin revisar: cada uno pasa por rectificación antes de salir hacia un proyecto.',
  },
  {
    question: '¿Qué transmisión le corresponde a mi motor LS?',
    answer:
      'La 4L60E es la más usada en swaps de 5.3 por tamaño y disponibilidad. La 4L65E es su versión reforzada. La 4L80E es de trabajo pesado y se recomienda cuando hay mucho torque o el vehículo carga peso, normalmente en 4x4. La 6L80E, de seis velocidades, es la opción de mejor rendimiento en carretera. Te ayudamos a elegir según el uso real del vehículo.',
  },
  {
    question: '¿Qué es HP Tuners y por qué lo necesita un swap?',
    answer:
      'HP Tuners es la herramienta profesional con la que trabajamos la computadora del vehículo. Permite desbloquear la ECU, eliminar el sistema antirrobo VATS y calibrar motor y transmisión. Sin esa programación un motor LS trasplantado no arranca correctamente ni entrega lo que debería: es una parte tan importante del swap como la mecánica.',
  },
  {
    question: '¿Atienden proyectos fuera de Alajuela?',
    answer:
      'Sí. El taller está en Grecia, Alajuela, y atendemos proyectos de todo Costa Rica: San José, Heredia, Cartago, Puntarenas y Guanacaste. Coordinamos por WhatsApp la logística del vehículo o del motor según el caso.',
  },
];
