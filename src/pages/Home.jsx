import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <CTA />
    </div>
  );
}
