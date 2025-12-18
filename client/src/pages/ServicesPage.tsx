import { motion } from 'framer-motion';
import { Check, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundAtoms from '@/components/layout/BackgroundAtoms';

const ofertasFinDeAnio = [
  {
    name: "LANDING PAGE",
    originalPrice: "180.000",
    price: "150.000",
    description: "Página única diseñada para captar clientes. Ideal para cualquier negocio que necesite presencia web rápida y efectiva.",
    features: [
      "Diseño 100% personalizado",
      "Responsive (celular/tablet/desktop)",
      "Sección Hero impactante",
      "Presentación del negocio",
      "Áreas de práctica destacadas",
      "Equipo con fotos profesionales",
      "Testimonios de clientes",
      "Botón WhatsApp flotante",
      "Formulario de contacto",
      "Google Maps integrado",
      "Hosting + Dominio .com por 1 año",
      "Mantenimiento GRATIS 1 mes"
    ],
    delivery: "Entrega en 7 días hábiles",
    badge: "OFERTA FIN DE AÑO",
    popular: false
  },
  {
    name: "WEB INSTITUCIONAL",
    originalPrice: "280.000",
    price: "250.000",
    description: "Presencia web completa con múltiples secciones. Perfecta para cualquier empresa o negocio que busca proyectar seriedad y profesionalismo.",
    features: [
      "Hasta 6 páginas completas",
      "Página Inicio + Presentación",
      "Página Nosotros (historia + timeline)",
      "Áreas de práctica detalladas",
      "Blog / Publicaciones (opcional)",
      "Recursos / Calculadoras (opcional)",
      "Página de contacto completa",
      "Buscador de servicios (opcional)",
      "Equipo con biografías completas",
      "Valores corporativos",
      "Google Maps + WhatsApp",
      "Hosting + Dominio .com por 1 año",
      "Mantenimiento GRATIS 1 mes",
      "5 Emails corporativos incluidos"
    ],
    delivery: "Entrega en ~10 días hábiles",
    badge: "OFERTA FIN DE AÑO",
    popular: true
  }
];

const serviciosGenerales = [
  {
    name: "WEB INMOBILIARIA PRO",
    price: "390.000",
    description: "Sitio orientado a captación y conversión.",
    features: [
      "4 secciones (Home + Propiedades + Nosotros + Contacto)",
      "Diseño premium",
      "Carga de propiedades en forma de carrusel",
      "Formulario captación de leads",
      "SEO On Page",
      "Reseñas de Google Maps",
      "Integración con redes sociales"
    ],
    delivery: "Entrega en 5 días",
    badge: null
  },
  {
    name: "WEB ESTUDIO JURÍDICO",
    price: "300.000",
    description: "Estructura orientada a captación de clientes.",
    features: [
      "5 secciones",
      "Copywriting persuasivo",
      "Blog listo para SEO",
      "Testimonios positivos",
      "Reseñas de Google Maps",
      "Integraciones"
    ],
    delivery: "Entrega en 4/5 días",
    badge: null
  },
  {
    name: "WEB CONCESIONARIA PRO",
    price: "390.000",
    description: "Branding + captación de leads.",
    features: [
      "Home + Vehículos + Nosotros + Contacto",
      "Carga de vehículos EN STOCK",
      "Filtros básicos por modelo/precio",
      "Integración con redes",
      "Reseñas Google Maps o testimonios",
      "Animaciones"
    ],
    delivery: "Entrega en 3/4 días",
    badge: null
  },
  {
    name: "MENÚ DIGITAL",
    price: "74.000",
    description: "Carta digital profesional para restaurantes. Tus clientes pueden ver el menú desde su celular escaneando un código QR y hacen los pedidos en la misma carta, llegando los detalles del pedido a tu whatsapp.",
    features: [
      "Categorías de platos",
      "Fotos de alta calidad",
      "Precios y descripciones",
      "Código QR incluido",
      "Fácil actualización",
      "Pedidos por WhatsApp"
    ],
    delivery: "Entrega en 2/3 días",
    badge: null
  },
  {
    name: "PORTFOLIO PROFESIONAL",
    price: "180.000",
    description: "Sitio web para mostrar tu trabajo y proyectos. Ideal para fotógrafos, diseñadores, arquitectos y creativos.",
    features: [
      "Galería de trabajos",
      "Detalles de servicios",
      "Diseño acorde a tu estilo",
      "WhatsApp integrado",
      "Google Maps"
    ],
    delivery: "Entrega en 3-4 días",
    badge: null
  },
  {
    name: "E-COMMERCE",
    price: "530.000",
    description: "Tienda online completa para vender productos 24/7. Con carrito de compras, gestión de productos y medios de pago integrados.",
    features: [
      "Productos ilimitados",
      "Panel de administración",
      "Medios de pago integrados",
      "Google Maps incluido",
      "Sistema de envíos",
      "Carrito de compras",
      "Gestión de stock"
    ],
    delivery: "Entrega en 14 días",
    badge: null
  }
];

const planesMantenimiento = [
  {
    name: "PLAN BÁSICO",
    price: "25.000",
    description: "Para Landing Pages y sitios pequeños",
    features: [
      "Modificaciones menores (textos, imágenes)",
      "Backup mensual",
      "Monitoreo básico",
      "Soporte por WhatsApp"
    ]
  },
  {
    name: "PLAN PROFESIONAL",
    price: "45.000",
    description: "Para Sitios Institucionales completos",
    features: [
      "Modificaciones mayores (contenido, cambios de diseño simples)",
      "Backup semanal",
      "Informes mensuales",
      "Soporte prioritario",
      "Seguridad avanzada",
      "Optimización SEO"
    ]
  },
  {
    name: "PLAN PREMIUM",
    price: "65.000",
    description: "Para E-commerce y sitios grandes",
    features: [
      "Asesoramiento continuo",
      "Backup diario",
      "Soporte prioritario",
      "Seguridad avanzada",
      "Ajustes bajo demanda"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <BackgroundAtoms />
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header with Background */}
        <div className="relative mb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <img 
              src="https://res.cloudinary.com/dwspyodrs/image/upload/v1765984656/Banner-Capa-03_70cf8534-cbe6-44ee-ad26-6589d5ba5848_qwnwj3.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-20" />
          </div>
          
          <div className="container mx-auto px-4 relative z-30 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Servicios
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Soluciones web profesionales adaptadas a tus necesidades
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">

          {/* Ofertas Fin de Año */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ofertas de Fin de Año
              </h2>
              <p className="text-white/60">
                Precios especiales en Landing Pages y Webs Institucionales hasta el 31 de diciembre
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              {ofertasFinDeAnio.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border ${
                    plan.popular ? 'border-white/30' : 'border-white/10'
                  } p-8 rounded-lg hover:border-white/30 transition-all duration-300 flex flex-col`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold tracking-wider rounded-full">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      {plan.originalPrice && (
                        <span className="text-white/40 text-lg line-through">ARS ${plan.originalPrice}</span>
                      )}
                      <span className="text-4xl font-bold text-white">ARS ${plan.price}</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6 flex items-center gap-2 text-sm text-white/70 bg-white/5 px-3 py-2 rounded border border-white/10">
                    <Clock className="w-4 h-4" />
                    <span>{plan.delivery}</span>
                  </div>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-white/90'
                        : 'border-white/20 hover:border-white/40 hover:bg-white/5 text-white'
                    }`}
                    asChild
                  >
                    <a href="/contacto">
                      Solicitar <Zap className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Servicios Generales */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Servicios Generales
              </h2>
              <p className="text-white/60">
                Para todo tipo de negocios y emprendimientos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {serviciosGenerales.map((servicio, index) => (
                <motion.div
                  key={servicio.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-lg hover:border-white/30 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">{servicio.name}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-3xl font-bold text-white">ARS ${servicio.price}</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed min-h-[3rem]">
                      {servicio.description}
                    </p>
                  </div>

                  <div className="mb-6 flex items-center gap-2 text-sm text-white/70 bg-white/5 px-3 py-2 rounded border border-white/10">
                    <Clock className="w-4 h-4" />
                    <span>{servicio.delivery}</span>
                  </div>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {servicio.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-white/20 hover:border-white/40 hover:bg-white/5 text-white"
                    asChild
                  >
                    <a href="/contacto">Consultar</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Planes de Mantenimiento */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Planes de Mantenimiento
              </h2>
              <p className="text-white/60">
                Todos los sitios incluyen 1 mes de mantenimiento GRATIS. Después podés contratar un plan opcional.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {planesMantenimiento.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-lg hover:border-white/30 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/60 text-sm mb-3">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">ARS ${plan.price}</span>
                      <span className="text-white/60 text-sm">/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-white/20 hover:border-white/40 hover:bg-white/5 text-white"
                    asChild
                  >
                    <a href="/contacto">Contratar</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
