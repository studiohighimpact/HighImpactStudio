import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'typing' | 'value' | 'complete' | 'exit'>('typing');
  const [typedCode, setTypedCode] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const codeLines = [
    'const brandName = "HIGH IMPACT";',
    'let isReady = true;',
  ];

  const fullCode = codeLines.join('\n');

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (phase !== 'typing') return;

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullCode.length) {
        setTypedCode(fullCode.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setPhase('value');
      }
    }, 25); // Faster typing

    return () => clearInterval(typingInterval);
  }, [phase, fullCode]);

  // After typing, wait and then exit
  useEffect(() => {
    if (phase === 'value') {
      const timer = setTimeout(() => {
        setPhase('complete');
      }, 400); // Faster
      return () => clearTimeout(timer);
    }
    
    if (phase === 'complete') {
      const timer = setTimeout(() => {
        setPhase('exit');
      }, 300); // Faster
      return () => clearTimeout(timer);
    }

    if (phase === 'exit') {
      const timer = setTimeout(() => {
        onComplete();
      }, 500); // Faster
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  // Syntax highlighting
  const highlightCode = (code: string) => {
    return code.split('\n').map((line, lineIndex) => {
      // Comments
      if (line.startsWith('//')) {
        return <span key={lineIndex} className="text-white/40 italic">{line}</span>;
      }
      
      // Process the line
      let highlighted = line
        // Keywords
        .replace(/\b(const|let|true|false)\b/g, '<span class="text-purple-400">$1</span>')
        // Strings
        .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
        // Variable names after const/let
        .replace(/(const|let)\s+(<span[^>]*>[^<]*<\/span>)\s+(\w+)/g, '$1 $2 <span class="text-blue-300">$3</span>')
        // = operator
        .replace(/=/g, '<span class="text-white/60">=</span>')
        // ; at end
        .replace(/;/g, '<span class="text-white/40">;</span>');

      return (
        <span 
          key={lineIndex} 
          dangerouslySetInnerHTML={{ __html: highlighted || '&nbsp;' }} 
        />
      );
    });
  };

  return (
    <AnimatePresence>
      {phase !== 'exit' || true ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'exit' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* Code editor container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: phase === 'complete' || phase === 'exit' ? 1.1 : 1, 
              opacity: phase === 'exit' ? 0 : 1 
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-full max-w-2xl mx-4"
          >
            {/* Editor window */}
            <div className="bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-white/40 text-sm ml-4 font-mono">high-impact.config.js</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
                <div className="flex">
                  {/* Line numbers */}
                  <div className="text-white/20 text-right pr-4 select-none border-r border-white/5 mr-4">
                    {typedCode.split('\n').map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  
                  {/* Code */}
                  <div className="flex-1 text-white/90">
                    <pre className="whitespace-pre-wrap">
                      {highlightCode(typedCode).map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                      {phase === 'typing' && (
                        <span className={`inline-block w-2 h-5 bg-white/80 ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                      )}
                    </pre>
                  </div>
                </div>

                {/* Success indicator */}
                <AnimatePresence>
                  {(phase === 'complete' || phase === 'exit') && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-4 border-t border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          className="w-3 h-3 rounded-full bg-green-500"
                        />
                        <span className="text-green-400 font-mono text-sm">
                          ✓ Iniciando High Impact...
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 rounded-3xl blur-3xl -z-10 opacity-50" />
          </motion.div>

          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
