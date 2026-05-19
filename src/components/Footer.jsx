import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-surface)] border-t border-[var(--color-dark-card)] pt-16 pb-8 text-[var(--color-accent)] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-display font-black tracking-tighter text-white mb-6 inline-block">
              A1 <span className="text-[var(--color-secondary)]">MOTORS</span> TICO <span className="text-[var(--color-primary)]">SWAP</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Especialistas en Costa Rica en LS Swaps de alto rendimiento. Construimos proyectos de precisión mecánica.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61555571203804" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/a1motors_ticoswaps_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6 uppercase tracking-wider">Enlaces Rápidos</h3>
            <ul className="space-y-3 font-semibold text-sm">
              <li><Link to="/catalogo" className="hover:text-[var(--color-primary)] transition-colors">Catálogo de Paquetes</Link></li>
              <li><Link to="/personalizar" className="hover:text-[var(--color-primary)] transition-colors">Personaliza tu Proyecto</Link></li>
              <li><Link to="/nosotros" className="hover:text-[var(--color-primary)] transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-[var(--color-primary)] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="https://maps.app.goo.gl/JuNr1F3gQxaNp3886" target="_blank" rel="noopener noreferrer" className="flex items-start hover:text-[var(--color-primary)] transition-colors">
                  <MapPin className="mr-3 text-[var(--color-secondary)] shrink-0" size={20} />
                  <span>Alajuela, Grecia, Costa Rica</span>
                </a>
              </li>
              <li>
                <a href="tel:+50689948485" className="flex items-center hover:text-[var(--color-primary)] transition-colors">
                  <Phone className="mr-3 text-[var(--color-secondary)] shrink-0" size={20} />
                  <span>+506 8994 8485</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-dark-card)] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-semibold tracking-wider">
          <p>&copy; {new Date().getFullYear()} A1 Motors Tico Swap. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
