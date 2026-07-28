import CatalogCard from '@/components/CatalogCard';

export default function PackageCard({ pkg, headingLevel, priority }) {
  return (
    <CatalogCard
      name={pkg.name}
      image={pkg.image}
      alt={pkg.alt}
      badge="Swap LS"
      description={pkg.description}
      headingLevel={headingLevel}
      priority={priority}
      specs={[
        { label: 'Motor', value: pkg.engine },
        { label: 'Acelerador', value: pkg.throttle },
        { label: 'Transmisión', value: pkg.transmission },
        { label: 'Tracción', value: pkg.traction },
      ]}
      ctaLabel="Consultar paquete"
      whatsappMessage={`Hola A1 Motors Tico Swap, estoy interesado en el paquete de swap ${pkg.name}.`}
    />
  );
}
