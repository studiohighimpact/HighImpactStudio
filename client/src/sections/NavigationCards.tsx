import { motion } from "framer-motion";
import { Code2, FolderKanban, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "SERVICIOS",
    description: "Desarrollo web profesional, aplicaciones a medida y automatizaciones con IA para potenciar tu negocio.",
    icon: Code2,
    href: "/servicios",
    cta: "Ver servicios"
  },
  {
    title: "PROYECTOS",
    description: "Casos de éxito reales. Descubre cómo hemos transformado negocios digitalmente.",
    icon: FolderKanban,
    href: "/proyectos",
    cta: "Ver proyectos"
  },
  {
    title: "CONTACTO",
    description: "¿Listo para llevar tu negocio al siguiente nivel? Agenda una llamada gratuita de 30 minutos.",
    icon: MessageCircle,
    href: "/contacto",
    cta: "Agendar llamada"
  }
];

export default function NavigationCards() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Navegá por el sitio
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Descubre todo lo que podemos hacer por tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-white/30 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 min-h-[4.5rem]">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-white/20 hover:border-white/40 hover:bg-white/5 text-white"
                  >
                    {item.cta} →
                  </Button>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
