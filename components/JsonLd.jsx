/**
 * Inserta datos estructurados schema.org para Google.
 *
 * Es un Server Component: el JSON-LD viaja dentro del HTML inicial, que es
 * justo lo que el rastreador necesita para generar resultados enriquecidos.
 */
export default function JsonLd({ schema }) {
  const payload = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          // El contenido es nuestro, no viene de entrada del usuario.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
