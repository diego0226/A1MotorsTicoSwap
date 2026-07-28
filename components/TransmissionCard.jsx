import CatalogCard from '@/components/CatalogCard';

export default function TransmissionCard({ transmission, headingLevel }) {
  return (
    <CatalogCard
      name={transmission.name}
      image={transmission.image}
      alt={transmission.alt}
      badge="Transmisión"
      description={transmission.description}
      headingLevel={headingLevel}
      specs={[
        { label: 'Velocidades', value: transmission.speeds },
        { label: 'Tracción', value: transmission.traction },
      ]}
      ctaLabel="Consultar transmisión"
      whatsappMessage={`Hola A1 Motors Tico Swap, estoy interesado en la transmisión ${transmission.name}.`}
    />
  );
}
