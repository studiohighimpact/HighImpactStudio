import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4"
            >
              AURA
            </motion.h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Transformamos ideas en experiencias digitales que generan resultados. Diseño web profesional para negocios que buscan destacar.
            </p>
            <p className="text-white/30 text-xs">
              Córdoba, Argentina 🇦🇷
            </p>
          </div>

          {/* Navigation Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white active:text-white/80 transition-colors text-xs sm:text-sm touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:disenowebaura@gmail.com"
                  className="text-white/50 hover:text-white active:text-white/80 transition-colors text-xs sm:text-sm touch-manipulation break-all sm:break-normal"
                >
                  disenowebaura@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/543513079334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white active:text-white/80 transition-colors text-xs sm:text-sm touch-manipulation"
                  aria-label="Contactar por WhatsApp"
                >
                  +54 351 307-9334
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aura.disenoweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white active:text-white/80 transition-colors text-xs sm:text-sm touch-manipulation"
                  aria-label="Seguir en Instagram"
                >
                  @aura.disenoweb
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/30 text-[10px] sm:text-xs text-center sm:text-left">
              © {currentYear} AURA Diseño Web. Todos los derechos reservados.
            </p>
            <p className="text-white/30 text-[10px] sm:text-xs text-center sm:text-left">
              Hecho con <span className="text-white/50">♥</span> en Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
