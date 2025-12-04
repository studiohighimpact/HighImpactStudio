import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "El sistema que desarrollaron nos ahorra más de 20 horas al mes. La automatización es una locura.",
    author: "CEO, TechStartup"
  },
  {
    quote: "Gracias a Axel, nuestro gimnasio tiene una página web profesional, destacándonos de nuestra competencia y gracias a ellos sumamos nuevos alumnos.",
    author: "Dueño del gimnasio, ProFitness"
  },
  {
    quote: "Nos guiaron en todo el proceso y entregaron justo lo que necesitábamos, y más.",
    author: "Fundador, SaaS Company"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Testimonios</h2>
          <p className="text-gray-400">Lo que dicen nuestros clientes sobre el impacto generado.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 border border-white/10 p-8 relative"
            >
              <Quote className="text-white/20 mb-6" size={40} />
              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">"{item.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-medium font-heading tracking-wide">{item.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
