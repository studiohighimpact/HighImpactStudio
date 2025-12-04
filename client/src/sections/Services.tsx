import { Code2, Cpu, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description: "Creamos soluciones digitales diseñadas para convertir: landing pages de alto rendimiento, e-commerce optimizados, apps modernas y sistemas a medida para tu negocio.",
    bullets: [
      "Landing pages enfocadas en conversión",
      "E-commerce completos y escalables",
      "Apps y sistemas personalizados",
      "Integraciones a medida"
    ]
  },
  {
    icon: Cpu,
    title: "Automatizaciones con IA",
    description: "Optimiza tu operación con automatizaciones inteligentes en n8n, Make y APIs personalizadas. Reduce tareas repetitivas, aumenta eficiencia y libera horas de trabajo.",
    bullets: [
      "Automatizaciones con IA",
      "Bots y flujos inteligentes",
      "Integración entre plataformas",
      "Reducción de carga operativa"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <div className="h-1 w-20 bg-white" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-3 bg-white text-black rounded-none group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="mt-1 text-white shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
