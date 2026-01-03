import { motion } from 'framer-motion';
import { Code, Shield, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Code,
    title: "Código limpio y profesional",
    description: "Desarrollamos con las últimas tecnologías y mejores prácticas. Nada de plantillas genericas feas. Hacemos códigos mantenibles, escalables y optimizados para máximo rendimiento."
  },
  {
    icon: Shield,
    title: "100% transparente",
    description: "Presupuesto formal con detalle de costos. Todo el proceso explicado paso a paso. Comunicación clara y constante para que siempre sepas en qué estado está tu proyecto."
  },
  {
    icon: Gift,
    title: "Hosting y soporte incluido",
    description: "Hosting profesional y dominio. Mantenimiento y soporte técnico para que tu web siempre esté actualizada, segura y rápida. Nos encargamos de todo para que no tengas que preocuparte por nada."
  }
];

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.05 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Floating Paths Background */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por qué elegir <span className="text-white/80">AURA Diseño Web</span>
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
      </div>
    </section>
  );
}
