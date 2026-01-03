import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import AnimatedSocialLinks, { type Social } from '@/components/ui/social-links';

// Typewriter effect component
function TypewriterText({ text, className, delay = 0, speed = 80 }: { text: string; className?: string; delay?: number; speed?: number }) {
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

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7e293e7e-e3fc-4e91-b64a-7aad98f7156a',
          ...formData
        }),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const socialLinks: Social[] = [
    { 
      name: 'WhatsApp', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      href: 'https://wa.me/543513079334',
    },
    { 
      name: 'Instagram', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      href: 'https://instagram.com/aura.disenoweb',
    },
    { 
      name: 'TikTok', 
      image: 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png',
      href: 'https://tiktok.com/@aura.disenoweb',
    },
    { 
      name: 'LinkedIn', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      href: 'https://www.linkedin.com/in/axel-rodriguez-16b7a3261/',
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const logoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 5, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section ref={sectionRef} id="contact" className="relative bg-black py-16 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - Centered Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/50 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            <TypewriterText text="Comencemos tu proyecto" />
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            <TypewriterText 
              text="Agenda una llamada o envíanos un mensaje. Estamos listos para transformar tu visión en realidad." 
              delay={2000}
              speed={40}
            />
          </p>
        </motion.div>

        {/* Main Grid - Calendly + Form + Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-white">Agenda una llamada</h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">Selecciona el horario que mejor te convenga</p>
              </div>
              <div className="bg-white rounded-b-2xl">
                <iframe
                  src="https://calendly.com/studiohighimpact/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=000000"
                  width="100%"
                  height="550"
                  frameBorder="0"
                  title="Agenda una llamada con AURA"
                  className="rounded-b-2xl"
                  style={{ minHeight: '450px' }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form + Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Envíanos un mensaje</h3>
              
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h4>
                  <p className="text-white/60">Nos pondremos en contacto contigo pronto.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-white/80 hover:text-white transition-colors underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  {formState === 'error' && (
                    <p className="text-red-400 text-sm">Hubo un error. Por favor, intenta de nuevo.</p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-base rounded-xl hover:bg-white/90 active:bg-white/80 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Social Links - Animated */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-8 text-center">Síguenos</h3>
              <AnimatedSocialLinks 
                socials={socialLinks} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
