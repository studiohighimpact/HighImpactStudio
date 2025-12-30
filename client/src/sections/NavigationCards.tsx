import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const pasos = [
  {
    step: 1,
    title: "Reservá una llamada",
    image: "/paso1.jpg",
    description: "Nos contás sobre tu negocio y analizamos juntos si podemos ayudarte a crear tu sitio web. En caso de que sí, te contamos a profundidad cómo sería, qué objetivos tendría y nos ponemos de acuerdo en la creación.",
  },
  {
    step: 2,
    title: "Diseñamos y lanzamos la web demo",
    image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765984656/Banner-Capa-03_70cf8534-cbe6-44ee-ad26-6589d5ba5848_qwnwj3.webp",
    description: "La DEMO es un boceto, una simple muestra de cómo quedaría la página web. Este paso lo usamos para corregir cosas entre ambas partes, sumar cosas que nos digas y definir la web final.",
  },
  {
    step: 3,
    title: "Terminamos la WEB",
    image: "/paso3.jpg",
    description: "Este es el mejor paso, es donde terminamos de programar la web para que quede el proyecto finalizado y así poder subirla a internet con un host propio para que ya puedas empezar a usarla. Te daremos TIPs de cómo promocionar la web, dónde compartirla y cómo empezar a convertir.",
  },
  {
    step: 4,
    title: "Mantenimiento mensual",
    image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986475/programming-background-with-person-working-with-codes-computer-1024x683.jpg.optimal_emkvq1.jpg",
    description: "Nuestro trabajo no termina nunca, nos comprometemos a mejorarlo día a día, semana a semana. Estaremos en constante contacto para actualizar, cambiar o sumarle cosas a la web según tu pedido. Aparte le haremos mantenimiento para que siga siendo rápida, segura y de fácil acceso con optimizaciones constantes.",
  }
];

export default function NavigationCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % pasos.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + pasos.length) % pasos.length);
  };

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
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            De una web que no vende a<br />
            <span className="text-white/80">una que genera clientes, en solo 4 pasos</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Sin procesos eternos, sin estrés técnico, sin vueltas. Así transformamos tu presencia digital en un canal de ventas real.
          </p>
        </motion.div>

        {/* Stacked Cards Carousel */}
        <div className="relative max-w-lg mx-auto h-[500px] flex items-center justify-center">
          {/* Cards Stack */}
          <div className="relative w-full h-full">
            {pasos.map((paso, index) => {
              const position = (index - currentIndex + pasos.length) % pasos.length;
              const isActive = position === 0;
              const isNext = position === 1;
              const isPrev = position === pasos.length - 1;
              const isBehind = position === 2;

              return (
                <motion.div
                  key={paso.step}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isNext ? 60 : isPrev ? -60 : 0,
                    y: isActive ? 0 : isNext ? 20 : isPrev ? 20 : 40,
                    scale: isActive ? 1 : isNext ? 0.9 : isPrev ? 0.9 : 0.8,
                    zIndex: isActive ? 30 : isNext ? 20 : isPrev ? 20 : 10,
                    opacity: isActive ? 1 : isNext ? 0.7 : isPrev ? 0.7 : isBehind ? 0.4 : 0,
                    rotateY: isActive ? 0 : isNext ? -5 : isPrev ? 5 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-gradient-to-b from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl h-full">
                    {/* Step number badge */}
                    <div className="absolute top-4 left-4 z-20 bg-white text-black text-sm font-bold px-4 py-2 rounded-full">
                      Paso {paso.step}
                    </div>

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={paso.image} 
                        alt={paso.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {paso.title}
                      </h3>
                      <p className="text-white/70 text-base leading-relaxed">
                        {paso.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {pasos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir al paso ${index + 1}`}
            />
          ))}
        </div>

        {/* Current Step Text */}
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center text-white/50 text-sm mt-4"
        >
          Paso {currentIndex + 1} de {pasos.length}
        </motion.p>
      </div>
    </section>
  );
}
