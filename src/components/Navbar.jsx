import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Catalogo', path: '/catalogo' },
    { name: 'Personalizar', path: '/personalizar' },
    { name: 'Sobre Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[var(--color-dark-base)] border-[var(--color-dark-card)] shadow-lg py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-display font-black tracking-tighter text-white uppercase">
            A1 <span className="text-[var(--color-secondary)] text-glow">MOTORS</span> TICO <span className="text-[var(--color-primary)]">SWAP</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans font-semibold text-sm uppercase tracking-wider transition-colors duration-200 ${location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-[var(--color-accent)] hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-accent)] hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[var(--color-dark-surface)] border-b border-[var(--color-dark-card)]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-sans font-semibold uppercase tracking-wider ${location.pathname === link.path ? 'text-[var(--color-primary)] bg-[var(--color-dark-card)]' : 'text-[var(--color-accent)] hover:text-white hover:bg-[var(--color-dark-card)]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
