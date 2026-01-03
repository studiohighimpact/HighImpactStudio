import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Search, Palette, Server, Award, MessageSquare, Clock, Heart, Lightbulb, CheckCircle } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: "DESARROLLO FRONTEND",
    description: "HTML5, CSS3, JavaScript moderno. Código limpio, semántico y optimizado para rendimiento."
  },
  {
    icon: Server,
    title: "DESARROLLO BACKEND",
    description: "Experiencia en desarrollo backend y arquitectura de aplicaciones del lado del servidor."
  },
  {
    icon: Database,
    title: "BASES DE DATOS",
    description: "Diseño y gestión de bases de datos relacionales y optimización de consultas."
  },
  {
    icon: Smartphone,
    title: "RESPONSIVE DESIGN",
    description: "Diseños que se adaptan perfectamente a cualquier dispositivo: móvil, tablet y desktop."
  },
  {
    icon: Search,
    title: "SEO OPTIMIZACIÓN",
    description: "Sitios optimizados para motores de búsqueda con buenas prácticas de SEO técnico."
  },
  {
    icon: Palette,
    title: "UI/UX DESIGN",
    description: "Interfaces intuitivas y atractivas centradas en la experiencia del usuario."
  }
];

const values = [
  {
    icon: Award,
    title: "CALIDAD",
    description: "Cada proyecto recibe la misma atención al detalle, sin importar su tamaño. Código limpio y diseño profesional siempre."
  },
  {
    icon: MessageSquare,
    title: "COMUNICACIÓN",
    description: "Respuestas rápidas y claras. Todo el proceso por WhatsApp para que sea simple y directo."
  },
  {
    icon: Clock,
    title: "PUNTUALIDAD",
    description: "Respeto los tiempos acordados. Si digo una fecha de entrega, la cumplo."
  },
  {
    icon: Heart,
    title: "COMPROMISO",
    description: "Tu proyecto es importante para mí. Me involucro para que logres tus objetivos."
  },
  {
    icon: Lightbulb,
    title: "INNOVACIÓN",
    description: "Siempre busco las mejores soluciones y me mantengo actualizado con las últimas tecnologías."
  },
  {
    icon: CheckCircle,
    title: "HONESTIDAD",
    description: "Te digo lo que realmente necesitas, sin venderte cosas innecesarias."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Intro Section with Photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          
          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square bg-black grayscale">
              <img 
                src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764303488/Webaxel_-_1_gtpzmg.png" 
                alt="Axel Rodriguez, fundador de AURA Diseño Web" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-white/30" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-white/30" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Sobre mí</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Mi nombre es Axel Rodríguez, fundador de AURA Diseño Web, y soy de Córdoba, Argentina.</span>
              </p>
              <p>
                Tengo certificaciones como Professional Software Developer por Digital House y actualmente estudio la Tecnicatura en Desarrollo de Software en el ISPC.
              </p>
              <p>
                Me especializo en desarrollo de software, automatizaciones con IA y estrategias digitales que potencian negocios. Combino tecnología, creatividad y marketing para diseñar soluciones que generan impacto real y resultados medibles.
              </p>
              <p>
                Mi enfoque no es solo entregar código, sino construir sistemas que se conviertan en activos reales para tu empresa.
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">2+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Años Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">10+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Proyectos</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Compromiso</span>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Mis Habilidades
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones web profesionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6 rounded-lg hover:border-white/30 hover:from-white/[0.08] transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-white mb-4" strokeWidth={1.5} />
                  <h4 className="text-sm font-bold text-white mb-2 tracking-wide">
                    {skill.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Mis Valores
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Principios que guían mi trabajo y mi relación con los clientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6 rounded-lg hover:border-white/30 hover:from-white/[0.08] transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-white mb-4" strokeWidth={1.5} />
                  <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
                    {value.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
