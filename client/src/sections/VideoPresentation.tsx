import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, ChevronDown } from 'lucide-react';

export default function VideoPresentation() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || 'ontouchstart' in window;
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations - simplified for better performance
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Simplified transforms for mobile
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], isMobile ? [0.9, 0.95, 1, 0.95, 0.9] : [0.6, 0.85, 1, 0.85, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);

  // Detect mobile at mount time
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="video-presentation" 
      className={`relative bg-black ${isMobile ? 'min-h-screen py-20' : 'min-h-[200vh]'}`}
    >
      {/* Sticky container for the video - simplified on mobile */}
      <div className={`${isMobile ? '' : 'sticky top-0 h-screen'} flex flex-col items-center justify-center overflow-hidden`}>
        {/* Title */}
        <motion.div 
          className="text-center mb-8 z-10"
          style={{ opacity }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Nuestra Presentación</h2>
          <p className="text-gray-400">Conoce cómo trabajamos</p>
        </motion.div>

        {/* Scroll indicator - only on desktop */}
        {!isMobile && (
          <motion.div 
            className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.5, 0]) }}
          >
            <span className="text-sm">Desliza para expandir</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        )}

        {/* Video Container */}
        <motion.div 
          className="relative w-full max-w-6xl mx-auto px-4 group will-change-transform"
          style={{ scale, opacity }}
        >
          {/* Window Frame */}
          <div 
            className="relative overflow-hidden shadow-2xl border border-white/10 rounded-xl"
          >
            {/* Window Title Bar */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41] hover:bg-[#28ca41]/80 transition-colors" />
              </div>
              {/* Window Title */}
              <div className="flex-1 text-center">
                <span className="text-white/50 text-sm">AURA Diseño Web - Presentación</span>
              </div>
              {/* Spacer for balance */}
              <div className="w-14" />
            </div>
            
            {/* Video Container */}
            <div className="relative w-full bg-black">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1151219147?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="AURA Diseño Web - Presentación"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.div 
          className="mt-8 text-center text-gray-400 text-sm z-10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]) }}
        >
          <div className="flex items-center justify-center gap-2">
            <Volume2 size={16} />
            <span>Activa el sonido para la mejor experiencia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
