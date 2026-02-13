import { motion } from 'framer-motion';
import { Check, Clock, CreditCard, Building2, Bitcoin, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundAtoms from '@/components/layout/BackgroundAtoms';

const metodosPago = [
  {
    name: "Western Union",
    description: "Envíos internacionales rápidos",
    icon: Wallet
  },
  {
    name: "Payoneer",
    description: "Pagos internacionales seguros",
    icon: CreditCard
  },
  {
    name: "Mercado Pago",
    description: "Tarjetas, transferencia y cuotas",
    icon: CreditCard
  },
  {
    name: "Transferencia Bancaria",
    description: "Depósito directo a cuenta",
    icon: Building2
  },
  {
    name: "USDT (Cripto)",
    description: "Stablecoin en red TRC20/ERC20",
    icon: Bitcoin
  }
];

const serviciosGenerales = [
  {
    name: "LANDING PAGE",
    price: "400 USD",
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
      "Google Maps o testimonios integrado",
    ],
    delivery: "Entrega en 5 días hábiles",
    badge: null
  },
  {
    name: "WEB INSTITUCIONAL",
    price: "800 USD",
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
      "Formulario avanzado"
    ],
    delivery: "Entrega en ~10 días hábiles",
    badge: null
  },
  {
    name: "WEB INMOBILIARIA PRO",
    price: "700 USD",
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
    delivery: "Entrega en 10 días",
    badge: null
  },
  {
    name: "WEB ESTUDIO JURÍDICO",
    price: "500 USD",
    description: "Estructura orientada a captación de clientes.",
    features: [
      "5 secciones",
      "Copywriting persuasivo",
      "Blog listo para SEO",
      "Testimonios positivos",
      "Reseñas de Google Maps",
      "Integraciones"
    ],
    delivery: "Entrega en 10 días",
    badge: null
  },
  {
    name: "WEB CONCESIONARIA PRO",
    price: "700 USD",
    description: "Branding + captación de leads.",
    features: [
      "Home + Vehículos + Nosotros + Contacto",
      "Carga de vehículos EN STOCK",
      "Filtros básicos por modelo/precio",
      "Integración con redes",
      "Reseñas Google Maps o testimonios",
      "Animaciones"
    ],
    delivery: "Entrega en 10 días",
    badge: null
  },
  {
    name: "MENÚ DIGITAL",
    price: "150 USD",
    description: "Carta digital profesional para restaurantes. Tus clientes pueden ver el menú desde su celular escaneando un código QR y hacen los pedidos en la misma carta, llegando los detalles del pedido a tu whatsapp.",
    features: [
      "Categorías de platos",
      "Fotos de alta calidad",
      "Precios y descripciones",
      "Código QR incluido",
      "Fácil actualización",
      "Pedidos por WhatsApp"
    ],
    delivery: "Entrega en 10 días",
    badge: null
  },
  {
    name: "PORTFOLIO PROFESIONAL",
    price: "400 USD",
    description: "Sitio web para mostrar tu trabajo y proyectos. Ideal para fotógrafos, diseñadores, arquitectos y creativos.",
    features: [
      "Galería de trabajos",
      "Detalles de servicios",
      "Diseño acorde a tu estilo",
      "WhatsApp integrado",
      "Google Maps"
    ],
    delivery: "Entrega en 5 días",
    badge: null
  },
  {
    name: "E-COMMERCE",
    price: "1000 USD",
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
    delivery: "Entrega en 15 días",
    badge: null
  }
];
 
const planesMantenimiento = [
  {
    name: "PLAN BÁSICO",
    price: "70 USD",
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
    price: "100 USD",
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
    price: "150 USD",
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
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Header with Background */}
        <div className="relative mb-10 sm:mb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <img 
              src="https://res.cloudinary.com/dwspyodrs/image/upload/v1765984656/Banner-Capa-03_70cf8534-cbe6-44ee-ad26-6589d5ba5848_qwnwj3.webp" 
              alt="Servicios de diseño web profesional" 
              className="w-full h-full object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-20" />
          </div>
          
          <div className="container mx-auto px-4 relative z-30 py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                Servicios
              </h1>
              <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Soluciones web profesionales adaptadas a tus necesidades
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">

          {/* Servicios Generales */}
          <section className="mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12 px-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                Servicios Generales
              </h2>
              <p className="text-white/60 text-sm sm:text-base">
                Para todo tipo de negocios y emprendimientos
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {serviciosGenerales.map((servicio, index) => (
                <motion.div
                  key={servicio.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-5 sm:p-8 rounded-lg hover:border-white/30 active:border-white/30 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{servicio.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl font-bold text-white">ARS ${servicio.price}</span>
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed min-h-[2.5rem] sm:min-h-[3rem]">
                      {servicio.description}
                    </p>
                  </div>

                  <div className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm text-white/70 bg-white/5 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-white/10">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>{servicio.delivery}</span>
                  </div>

                  <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 flex-grow">
                    {servicio.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-white/20 hover:border-white/40 hover:bg-white/5 active:bg-white/10 text-white text-sm sm:text-base py-2 sm:py-2.5 touch-manipulation"
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
              className="text-center mb-8 sm:mb-12 px-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                Planes de Mantenimiento
              </h2>
              <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-3xl mx-auto">
                Todos los sitios son con mantenimiento mensual. Después podés contratar un plan opcional. Esta pensado para que nunca te preocupes por nada tecnico, nosotros nos encargamos de todo.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {planesMantenimiento.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-5 sm:p-8 rounded-lg hover:border-white/30 active:border-white/30 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">{plan.name}</h3>
                    <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-bold text-white">ARS ${plan.price}</span>
                      <span className="text-white/60 text-xs sm:text-sm">/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-white/20 hover:border-white/40 hover:bg-white/5 active:bg-white/10 text-white text-sm sm:text-base py-2 sm:py-2.5 touch-manipulation"
                    asChild
                  >
                    <a href="/contacto">Contratar</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Métodos de Pago */}
          <section className="mt-16 sm:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12 px-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                Métodos de Pago
              </h2>
              <p className="text-white/60 text-sm sm:text-base">
                Aceptamos múltiples formas de pago para tu comodidad
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-5xl mx-auto px-2">
              {metodosPago.map((metodo, index) => (
                <motion.div
                  key={metodo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 px-3 sm:px-6 py-2.5 sm:py-4 rounded-full hover:border-white/30 active:border-white/30 transition-all duration-300 flex items-center gap-2 sm:gap-3"
                >
                  <metodo.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 shrink-0" />
                  <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">{metodo.name}</span>
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
