import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Typewriter effect component
function TypewriterText({ text, className, delay = 0, speed = 50 }: { text: string; className?: string; delay?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [delayComplete, setDelayComplete] = useState(delay === 0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || delayComplete) return;
    
    const timeout = setTimeout(() => {
      setDelayComplete(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, delay, delayComplete]);

  useEffect(() => {
    if (!hasStarted || !delayComplete) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, hasStarted, delayComplete, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {!isComplete && hasStarted && delayComplete && (
        <span className="animate-blink ml-1">|</span>
      )}
    </span>
  );
}

const pasos = [
  {
    step: 1,
    title: "Reservá una llamada",
    image: "/paso1.jpg",
    description: "Nos contás sobre tu negocio y analizamos juntos si podemos ayudarte a crear tu sitio web.",
  },
  {
    step: 2,
    title: "Diseñamos la web demo",
    image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765984656/Banner-Capa-03_70cf8534-cbe6-44ee-ad26-6589d5ba5848_qwnwj3.webp",
    description: "La DEMO es un boceto para corregir y definir cómo quedará la página web final.",
  },
  {
    step: 3,
    title: "Terminamos la WEB",
    image: "/paso3.jpg",
    description: "Programamos la web finalizada y la subimos a internet para que puedas empezar a usarla.",
  },
  {
    step: 4,
    title: "Mantenimiento mensual",
    image: "https://res.cloudinary.com/dwspyodrs/image/upload/v1765986475/programming-background-with-person-working-with-codes-computer-1024x683.jpg.optimal_emkvq1.jpg",
    description: "Actualizamos, mejoramos y optimizamos tu web constantemente para que siga convirtiendo.",
  }
];

export default function NavigationCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scale effect: starts small, grows to full, shrinks on exit
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 1, 1, 1, 0.8]);
  // Rotate effect on entry/exit
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [10, 0, 0, 0, -10]);
  // Opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0, 1, 1, 1, 0]);
  // Blur effect
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [10, 0, 0, 0, 10]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % pasos.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + pasos.length) % pasos.length);
  };

  return (
    <section ref={sectionRef} id="como-trabajamos" className="relative min-h-screen overflow-hidden" style={{ perspective: "1000px" }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      {/* Content - Two Column Layout with scroll effects */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center py-24"
        style={{ 
          scale, 
          rotateX,
          opacity,
          filter: useTransform(blur, (v) => `blur(${v}px)`)
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
                Cómo trabajamos
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug">
                De una web que no vende a <span className="text-white/80">una que genera clientes</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                <TypewriterText 
                  text="Un proceso simple y directo: sin complicaciones técnicas, sin demoras innecesarias. Convertimos tu presencia digital en una herramienta que genera clientes reales."
                  speed={30}
                />
              </p>
              
              {/* Progress Indicators */}
              <div className="flex gap-3 mt-8">
                {pasos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/30 hover:bg-white/50 w-2'
                    }`}
                    aria-label={`Ir al paso ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Step Counter */}
              <p className="text-white/50 text-sm mt-4">
                Paso {currentIndex + 1} de {pasos.length}
              </p>
            </motion.div>

            {/* Right Column - Stacked Cards */}
            <div className="relative h-[480px] flex items-center justify-center">
              {/* Cards Stack */}
              <div className="relative w-full max-w-md h-full">
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
                        x: isActive ? 0 : isNext ? 40 : isPrev ? -40 : 0,
                        y: isActive ? 0 : isNext ? 15 : isPrev ? 15 : 30,
                        scale: isActive ? 1 : isNext ? 0.92 : isPrev ? 0.92 : 0.85,
                        zIndex: isActive ? 30 : isNext ? 20 : isPrev ? 20 : 10,
                        opacity: isActive ? 1 : isNext ? 0.6 : isPrev ? 0.6 : isBehind ? 0.3 : 0,
                        rotateY: isActive ? 0 : isNext ? -3 : isPrev ? 3 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 w-full"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="bg-black/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full">
                        {/* Step number badge */}
                        <div className="absolute top-4 left-4 z-20 bg-white text-black text-sm font-bold px-4 py-2 rounded-full">
                          Paso {paso.step}
                        </div>

                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={paso.image} 
                            alt={paso.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6 bg-black/95">
                          <h3 className="text-xl font-bold text-white mb-3">
                            {paso.title}
                          </h3>
                          <p className="text-white/70 text-sm leading-relaxed">
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
                className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextCard}
                className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
