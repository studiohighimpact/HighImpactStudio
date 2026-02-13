import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { useEffect, memo } from 'react';

// FloatingPaths component for background
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

// Projects data
const projects = [
  {
    title: "Check Car Córdoba",
    description: "Servicio de peritaje automotor pre-compra",
    image: "https://res.cloudinary.com/dzt42drme/image/upload/v1771009596/Captura_de_pantalla_2026-02-13_a_la_s_4.05.03_p._m._pywath.png",
    link: "https://checkcarcordoba.vercel.app/"
  },
  {
    title: "Sumicake Pastelería",
    description: "Pastelería y cursos online en Lima, Perú",
    image: "https://res.cloudinary.com/dzt42drme/image/upload/v1771009596/Captura_de_pantalla_2026-02-13_a_la_s_4.05.24_p._m._ikv4if.png",
    link: "https://sumicake.vercel.app/"
  },
  {
    title: "Vértice Propiedades",
    description: "Inmobiliaria de propiedades premium en Miami",
    image: "https://res.cloudinary.com/dzt42drme/image/upload/v1771009596/Captura_de_pantalla_2026-02-13_a_la_s_4.05.46_p._m._ojuhop.png",
    link: "https://vertice-propiedades.vercel.app/"
  },
  {
    title: "ProFitness",
    description: "Plataforma de fitness y entrenamiento personal",
    image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986704/Captura_de_pantalla_2025-12-17_a_la_s_12.50.55_p._m._drgewm.png",
    link: "https://profitnesspagina.vercel.app/"
  },
  {
    title: "Farías y Farías",
    description: "Sitio web corporativo para estudio contable",
    image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986724/Captura_de_pantalla_2025-12-17_a_la_s_12.51.54_p._m._mbv53c.png",
    link: "https://fariasyfarias.vercel.app/"
  },
  {
    title: "Axel Developer",
    description: "Portfolio personal de desarrollador",
    image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986711/Captura_de_pantalla_2025-12-17_a_la_s_12.51.09_p._m._uiepwq.png",
    link: "https://axel-developer-portfolio.vercel.app/"
  }
];

// Project interface
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

// 3D Circular Carousel Component - Continuous rotation, images only
const Carousel3D = memo(({ 
  projectsData
}: { 
  projectsData: Project[];
}) => {
  const cylinderWidth = 1200;
  const faceCount = projectsData.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  
  const transform = useTransform(
    rotation,
    (value) => `rotate3d(0, 1, 0, ${value}deg)`
  );

  // Auto-rotate continuously - never stops
  useEffect(() => {
    const interval = setInterval(() => {
      rotation.set(rotation.get() - 0.3);
    }, 16);
    return () => clearInterval(interval);
  }, [rotation]);

  return (
    <div
      className="flex h-[300px] items-center justify-center"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="relative flex h-full origin-center justify-center"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
      >
        {projectsData.map((project, i) => (
          <motion.div
            key={project.title}
            className="absolute flex h-full origin-center items-center justify-center"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
          >
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[280px] group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[180px] object-cover object-top"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

// Testimonials data
const testimonials = [
  {
    author: {
      name: "Martín González",
      handle: "ProFitness",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "AURA transformó completamente nuestra presencia digital. El sitio web que nos crearon no solo es visualmente impresionante, sino que también ha aumentado nuestras conversiones en un 40%."
  },
  {
    author: {
      name: "Carolina Farías",
      handle: "Farías y Farías Contadores",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Profesionalismo de principio a fin. Entendieron exactamente lo que necesitábamos y entregaron más de lo esperado. Nuestros clientes ahora nos encuentran fácilmente."
  },
  {
    author: {
      name: "Lucas Ramírez",
      handle: "Emprendedor Digital",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "La mejor inversión que hice para mi negocio. El equipo de AURA no solo creó un sitio hermoso, sino que me enseñaron cómo aprovecharlo al máximo."
  },
  {
    author: {
      name: "Ana Martínez",
      handle: "Coaching Personal",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Tenía miedo de invertir en un sitio web, pero AURA me dio confianza desde la primera llamada. El resultado superó mis expectativas."
  },
  {
    author: {
      name: "Roberto Silva",
      handle: "Silva Inmobiliaria",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "El diseño es impecable y la velocidad de carga es increíble. Mis propiedades ahora se muestran de forma profesional."
  }
];

export default function ProjectsTestimonials() {
  return (
    <section id="projects" className="relative bg-black overflow-hidden">
      {/* Floating Paths Background */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Projects Section */}
      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
              Portafolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proyectos que <span className="text-white/80">convierten</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Cada proyecto es único, diseñado para generar resultados reales
            </p>
          </motion.div>

          {/* 3D Circular Carousel */}
          <div className="w-full overflow-hidden">
            <Carousel3D projectsData={projects} />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
              Testimonios
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lo que dicen <span className="text-white/80">nuestros clientes</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </motion.div>

          {/* Marquee Testimonials - Never stops */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                {[...Array(4)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
