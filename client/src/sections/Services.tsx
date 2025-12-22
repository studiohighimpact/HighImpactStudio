import { Check, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: "Landing Page",
    price: "400 USD",
    description: "Ideal para lanzar tu producto o servicio rápidamente con un sitio enfocado en conversión.",
    features: [
      "Diseño profesional a medida",
      "100% Responsive (mobile-first)",
      "Formulario de contacto integrado",
      "SEO básico optimizado",
      "Hosting y dominio incluido (1 año)",
      "1 mes de soporte técnico"
    ],
    delivery: "Entrega en 7-10 días",
    badge: null,
    popular: false
  },
  {
    name: "Web Profesional",
    price: "800 USD",
    description: "Para empresas que necesitan presencia digital completa con múltiples secciones y funcionalidades.",
    features: [
      "Todo de Landing Page +",
      "Hasta 6 secciones personalizadas",
      "Blog o portafolio integrado",
      "Integración con redes sociales",
      "Formularios avanzados",
      "Analytics y métricas",
      "3 meses de soporte y mantenimiento"
    ],
    delivery: "Entrega en 15-20 días",
    badge: "RECOMENDADO",
    popular: true
  },
  {
    name: "E-commerce",
    price: "1000 USD",
    description: "Tienda online completa para vender tus productos con sistema de pagos y gestión de inventario.",
    features: [
      "Todo de Web Profesional +",
      "Catálogo de productos ilimitado",
      "Carrito de compras avanzado",
      "Pasarela de pago integrada",
      "Panel de administración",
      "Sistema de envíos",
      "6 meses de soporte premium"
    ],
    delivery: "Entrega en 15-20 días",
    badge: null,
    popular: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planes y Precios
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Soluciones digitales accesibles y profesionales para cada etapa de tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border ${
                plan.popular ? 'border-white/30 md:-translate-y-4' : 'border-white/10'
              } p-8 rounded-lg hover:border-white/30 transition-all duration-300 flex flex-col`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold tracking-wider rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-white/60 text-sm">ARS</span>
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed min-h-[3rem]">
                  {plan.description}
                </p>
              </div>

              {/* Delivery time */}
              <div className="mb-6 flex items-center gap-2 text-sm text-white/70 bg-white/5 px-3 py-2 rounded border border-white/10">
                <Clock className="w-4 h-4" />
                <span>{plan.delivery}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'border-white/20 hover:border-white/40 hover:bg-white/5 text-white'
                }`}
                asChild
              >
                <a href="#contact">
                  Empezar ahora <Zap className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/50 text-sm mt-12 max-w-3xl mx-auto"
        >
          * Todos los planes incluyen hosting y dominio por 1 año. Los precios están en pesos argentinos (ARS). 
          Aceptamos transferencia bancaria, Mercado Pago y criptomonedas.
        </motion.p>
      </div>
    </section>
  );
}
