import { CustomButton } from '@/components/ui/custom-button';
import { Calendar, Mail, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white blur-[150px] rounded-full" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-gray-500 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            ¿Listo para generar impacto?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Conectemos y llevemos tu proyecto al siguiente nivel.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a href="https://calendly.com" target="_blank" rel="noreferrer" className="w-full">
              <CustomButton variant="primary" className="w-full gap-3 h-16 text-lg">
                <Calendar size={20} />
                Agendar Llamada
              </CustomButton>
            </a>
            
            <a href="https://wa.link/obtvgx" target="_blank" rel="noreferrer" className="w-full">
              <CustomButton variant="outline" className="w-full gap-3 h-16 text-lg">
                <MessageCircle size={20} />
                Hablar por WhatsApp
              </CustomButton>
            </a>
            
            <a href="https://www.instagram.com/highimpact.studio/" target="_blank" rel="noreferrer" className="w-full">
              <CustomButton variant="secondary" className="w-full gap-3 h-16 text-lg">
                <Instagram size={20} />
                Ver Instagram
              </CustomButton>
            </a>

            <a href="mailto:studiohighimpact@gmail.com" className="w-full">
              <CustomButton variant="secondary" className="w-full gap-3 h-16 text-lg">
                <Mail size={20} />
                Enviar Correo
              </CustomButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
