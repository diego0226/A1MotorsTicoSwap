/**
 * Ancho y padding horizontal únicos para todo el sitio.
 *
 * Antes cada página fijaba su propio contenedor (`max-w-7xl` en unas,
 * `max-w-[1440px] lg:px-[64px]` en otras) y los bloques no alineaban entre
 * secciones. Con esto el contenido cae siempre sobre la misma rejilla.
 */
export default function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
