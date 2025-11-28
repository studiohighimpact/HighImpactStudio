import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square bg-black grayscale">
              <img 
                src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764303488/Webaxel_-_1_gtpzmg.png" 
                alt="Axel Rodriguez, fundador de High Impact Studio" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-white/30" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-white/30" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Sobre mí</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Mi nombre es Axel Rodríguez, fundador de High Impact Studio, y soy de Córdoba, Argentina.</span>
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
      </div>
    </section>
  );
}
