import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          {/* Logo + tagline */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dwspyodrs/image/upload/v1765985290/Logotipo_para_Agencia_de_Marketing_Digital_Minimalista_Negro_1_nvxbje.png"
                  alt="High Impact Studio logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold tracking-tight">
                HIGH IMPACT STUDIO
              </span>
            </div>
            <p className="text-white/50 text-sm">
              {language === 'es' ? 'Desarrollo Web Profesional' : 'Professional Web Development'}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/543513079334?text=Hola%2C%20me%20interesa%20trabajar%20con%20ustedes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-white/60 hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/highimpact.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-white/60 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:studiohighimpact@gmail.com"
              className="p-2 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-white/60 hover:text-white"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} High Impact Studio. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  );
}
