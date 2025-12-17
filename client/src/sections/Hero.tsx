import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Overlay */}
        <img 
          src="https://res.cloudinary.com/dwspyodrs/image/upload/v1765984452/hq720_lxheye.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-20" />
      </div>

      <div className="container mx-auto px-6 relative z-30 flex items-center justify-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Sitios Web que transforman tu negocio
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light">
            Código limpio. Diseño profesional. Sin complicaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton variant="primary" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
              Ver Servicios
            </CustomButton>
            <CustomButton
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://calendly.com/studiohighimpact/30min', '_blank')}
            >
              Agendar llamada
            </CustomButton>
          </div>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
    </section>
  );
}