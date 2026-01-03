import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GetStartedButton } from '@/components/ui/get-started-button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"
      )}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Text with Animation */}
        <motion.a 
          href="#hero"
          className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="AURA Diseño Web - Ir al inicio"
        >
          <motion.span 
            className="text-xl sm:text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                AURA
              </span>
            </span>
          </motion.span>
          <motion.span 
            className="text-xs sm:text-sm text-white/60 font-light tracking-wider uppercase hidden xs:block whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            diseño web
          </motion.span>
        </motion.a>

        {/* CTA Button */}
        <div 
          onClick={() => window.open('https://calendly.com/disenowebaura/30min', '_blank')}
          className="touch-manipulation"
        >
          <GetStartedButton text="Reservar llamada" />
        </div>
      </div>
    </nav>
  );
}
