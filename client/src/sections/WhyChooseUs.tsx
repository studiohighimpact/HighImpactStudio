import { motion } from 'framer-motion';
import { Code, Shield, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Code,
    title: "Código limpio y profesional",
    description: "Desarrollamos con las últimas tecnologías y mejores prácticas. Código mantenible, escalable y optimizado para máximo rendimiento."
  },
  {
    icon: Shield,
    title: "100% legal y transparente",
    description: "Presupuesto formal con detalle de costos. Contrato de servicios profesional. Factura tipo A/B. Todo en regla para tu tranquilidad."
  },
  {
    icon: Gift,
    title: "Hosting y soporte incluido",
    description: "Hosting profesional y dominio por 1 año sin costo adicional. Mantenimiento y soporte técnico durante el primer mes completamente gratis."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por qué elegir <span className="text-white/80">High Impact Studio</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            No solo creamos sitios web, construimos soluciones digitales que impulsan tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-lg hover:border-white/30 hover:from-white/[0.08] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-lg bg-white/5 border border-white/10">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-lg mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel digital?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors duration-300"
          >
            Agendar llamada gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
