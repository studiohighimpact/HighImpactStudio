import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { CustomButton } from '@/components/ui/custom-button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Sobre mí', href: '/sobre-mi' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setLocation(href);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('/')}>
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img
              src="https://res.cloudinary.com/dwspyodrs/image/upload/v1765985290/Logotipo_para_Agencia_de_Marketing_Digital_Minimalista_Negro_1_nvxbje.png"
              alt="High Impact Studio logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white font-heading font-bold text-xl tracking-tighter hidden sm:block">
            HIGH IMPACT STUDIO
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <CustomButton variant="primary" size="sm" onClick={() => handleNavClick('/contacto')}>
            Impacto
          </CustomButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg text-gray-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <CustomButton variant="primary" className="w-full" onClick={() => handleNavClick('/contacto')}>
                Impacto
              </CustomButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
