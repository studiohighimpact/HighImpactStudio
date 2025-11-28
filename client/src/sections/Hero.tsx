import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import bgImage from '@assets/generated_images/abstract_tech_background.png';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Overlay */}
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-20" />
      </div>

      <div className="container mx-auto px-6 relative z-30 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Impulsa tu negocio con <span className="text-gray-500">software, IA</span> y estrategias de <span className="underline decoration-white/30 underline-offset-8">impacto real</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            Creamos soluciones digitales que automatizan, escalan y transforman tu operación: desarrollo de software, integraciones con IA y gestión estratégica de contenido.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomButton variant="primary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Crear Impacto
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

        {/* Hero Visual / Logo Highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full aspect-[4/3] max-w-md mx-auto"
          >
            {/* Outer glow frame */}
            <div className="absolute -inset-4 bg-gradient-to-b from-white/10 via-transparent to-white/5 blur-xl opacity-70" />
            <div className="relative w-full h-full border border-white/20 bg-gray-950/80 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-60" />
              <img 
                src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764297522/Logotipo_Para_Agencia_De_Marketing_Digital_Minimalista_Negro_-_1_ca37ab.png" 
                alt="High Impact Studio" 
                className="relative max-w-[98%] max-h-[98%] object-contain mix-blend-screen"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
