import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import FeaturedPackages from '@/components/FeaturedPackages';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Services from '@/components/Services';
import { faqs } from '@/data/faq';
import { buildMetadata, faqSchema } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = buildMetadata({
  title: `Swaps LS en Costa Rica | ${site.name}`,
  description: site.description,
  path: '/',
  keywords: site.keywords,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedPackages />
      <Gallery />
      <FAQ />
      <CTA />

      <JsonLd schema={faqSchema(faqs)} />
    </>
  );
}
