import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundAtoms from '@/components/layout/BackgroundAtoms';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function ProjectsPage() {
  const { language } = useLanguage();
  
  const projects = language === 'es' ? [
    {
      name: "FARIAS & FARIAS",
      description: "Landing Page profesional para inmobiliaria. Diseño elegante enfocado en captación de clientes con showcase de propiedades y formulario de contacto optimizado.",
      tags: ["Landing Page", "Inmobiliaria", "Conversión", "WhatsApp"],
      category: "LANDING PAGE",
      image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986724/Captura_de_pantalla_2025-12-17_a_la_s_12.51.54_p._m._mbv53c.png",
      demoUrl: "https://fariasyfarias.vercel.app/",
      projectUrl: "https://fariasyfarias.vercel.app/"
    },
    {
      name: "PROFITNESS",
      description: "Landing Page moderna para gimnasio. Diseño atractivo enfocado en captar nuevos socios con llamadas a la acción claras y formulario de contacto directo.",
      tags: ["Landing Page", "Gimnasio", "Fitness", "Conversión"],
      category: "LANDING PAGE",
      image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986704/Captura_de_pantalla_2025-12-17_a_la_s_12.50.55_p._m._drgewm.png",
      demoUrl: "https://profitnesspagina.vercel.app/",
      projectUrl: "https://profitnesspagina.vercel.app/"
    },
    {
      name: "AXEL DEVELOPER PORTFOLIO",
      description: "Portfolio personal minimalista para desarrollador. Showcase de proyectos, habilidades técnicas y formulario de contacto. Diseño limpio y profesional.",
      tags: ["Portfolio", "Developer", "Dark Theme", "Responsive"],
      category: "PORTFOLIO",
      image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986711/Captura_de_pantalla_2025-12-17_a_la_s_12.51.09_p._m._uiepwq.png",
      demoUrl: "https://axel-developer-portfolio.vercel.app/",
      projectUrl: "https://axel-developer-portfolio.vercel.app/"
    }
  ] : [
    {
      name: "FARIAS & FARIAS",
      description: "Professional landing page for real estate agency. Elegant design focused on client acquisition with property showcase and optimized contact form.",
      tags: ["Landing Page", "Real Estate", "Conversion", "WhatsApp"],
      category: "LANDING PAGE",
      image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986724/Captura_de_pantalla_2025-12-17_a_la_s_12.51.54_p._m._mbv53c.png",
      demoUrl: "https://fariasyfarias.vercel.app/",
      projectUrl: "https://fariasyfarias.vercel.app/"
    },
    {
      name: "PROFITNESS",
      description: "Modern landing page for gym. Attractive design focused on attracting new members with clear calls to action and direct contact form.",
      tags: ["Landing Page", "Gym", "Fitness", "Conversion"],
      category: "LANDING PAGE",
      image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986704/Captura_de_pantalla_2025-12-17_a_la_s_12.50.55_p._m._drgewm.png",
      demoUrl: "https://profitnesspagina.vercel.app/",
      projectUrl: "https://profitnesspagina.vercel.app/"
    },
    {
      name: "AXEL DEVELOPER PORTFOLIO",
      description: "Minimalist personal portfolio for developer. Project showcase, technical skills and contact form. Clean and professional design.",
      tags: ["Portfolio", "Developer", "Dark Theme", "Responsive"],
      category: "PORTFOLIO",
      image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986711/Captura_de_pantalla_2025-12-17_a_la_s_12.51.09_p._m._uiepwq.png",
      demoUrl: "https://axel-developer-portfolio.vercel.app/",
      projectUrl: "https://axel-developer-portfolio.vercel.app/"
    }
  ];
  
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
              src="https://res.cloudinary.com/dwspyodrs/image/upload/v1765986475/programming-background-with-person-working-with-codes-computer-1024x683.jpg.optimal_emkvq1.jpg" 
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
                {language === 'es' ? 'Proyectos' : 'Projects'}
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Portfolio de sitios web desarrollados con código limpio y diseño profesional'
                  : 'Portfolio of websites developed with clean code and professional design'
                }
              </p>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
              {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </h2>
            <p className="text-white/60 text-center">
              {language === 'es'
                ? 'Webs institucionales, landing pages, e-commerce y menús digitales desarrollados a medida'
                : 'Business websites, landing pages, e-commerce and digital menus developed custom'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col group"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden bg-black/50">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-wider rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-xs"
                    asChild
                  >
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      {language === 'es' ? 'VER PROYECTO' : 'VIEW PROJECT'}
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-white text-black hover:bg-white/90 text-xs"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      {language === 'es' ? 'VER DEMO' : 'VIEW DEMO'} <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
