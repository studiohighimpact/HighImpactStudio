import { useEffect, useState } from 'react';

interface MousePos {
  x: number;
  y: number;
}

const ATOMS = [
  { size: 160, blur: 110, opacity: 0.55, color: 'rgba(220,220,220,0.95)', depth: 0.12 },
  { size: 280, blur: 190, opacity: 0.35, color: 'rgba(180,180,190,0.9)', depth: 0.06 },
];

export default function BackgroundAtoms() {
  const [mouse, setMouse] = useState<MousePos>({ x: 0.5, y: 0.5 });
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || 'ontouchstart' in window;
  });

  useEffect(() => {
    const checkMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    setIsMobile(checkMobile);
    
    // Skip mouse tracking on mobile for performance
    if (checkMobile) return;
    
    const handleMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMouse({ x, y });
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  // On mobile, render simplified background
  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
      </div>
    );
  }

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
        ];

        const pos = basePositions[index % basePositions.length];

        return (
          <div
            key={index}
            className="absolute rounded-full will-change-transform"
            style={{
              width: atom.size,
              height: atom.size,
              ...pos,
              background: atom.color,
              filter: `blur(${atom.blur}px)`,
              mixBlendMode: 'screen',
              opacity: atom.opacity,
              transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        );
      })}
    </div>
  );
}
