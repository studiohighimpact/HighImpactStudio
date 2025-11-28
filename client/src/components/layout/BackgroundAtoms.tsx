import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MousePos {
  x: number;
  y: number;
}

const ATOMS = [
  { size: 160, blur: 110, opacity: 0.55, color: 'rgba(220,220,220,0.95)', depth: 0.12 },
  { size: 280, blur: 190, opacity: 0.35, color: 'rgba(180,180,190,0.9)', depth: 0.06 },
  { size: 220, blur: 160, opacity: 0.4, color: 'rgba(230,230,230,0.9)', depth: -0.08 },
  { size: 190, blur: 140, opacity: 0.3, color: 'rgba(200,200,210,0.9)', depth: 0.14 },
];

export default function BackgroundAtoms() {
  const [mouse, setMouse] = useState<MousePos>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMouse({ x, y });
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Sutil gradiente de fondo base */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-80" />

      {ATOMS.map((atom, index) => {
        const translateX = (mouse.x - 0.5) * 90 * atom.depth;
        const translateY = (mouse.y - 0.5) * 90 * atom.depth;

        const basePositions = [
          { top: '10%', left: '15%' },
          { top: '18%', right: '8%' },
          { bottom: '16%', left: '10%' },
          { bottom: '12%', right: '18%' },
        ];

        const pos = basePositions[index % basePositions.length];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: atom.opacity,
              scale: [1, 1.06, 1],
              x: translateX,
              y: translateY,
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' },
              x: { type: 'spring', stiffness: 40, damping: 30 },
              y: { type: 'spring', stiffness: 40, damping: 30 },
            }}
            className="absolute rounded-full"
            style={{
              width: atom.size,
              height: atom.size,
              ...pos,
              background: atom.color,
              filter: `blur(${atom.blur}px)`,
              mixBlendMode: 'screen',
            }}
          />
        );
      })}

      {/* Capa de sutil ruido/grano para darle textura */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:12px_12px]" />
    </div>
  );
}
