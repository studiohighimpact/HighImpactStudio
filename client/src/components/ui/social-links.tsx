import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Social = {
  name: string;
  image: string;
  href?: string;
};

interface AnimatedSocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[];
}

const AnimatedSocialLinks = React.forwardRef<
  HTMLDivElement,
  AnimatedSocialLinksProps
>(({ socials, className, ...props }, ref) => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [cliked, setCliked] = useState<boolean>(false);

  const animation = {
    scale: cliked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  };

  useEffect(() => {
    const handleClick = () => {
      setCliked(true);
      setTimeout(() => {
        setCliked(false);
      }, 200);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [cliked]);

  return (
    <div
      ref={ref}
      className={`flex flex-wrap items-center justify-center gap-2 sm:gap-0 ${className || ''}`}
      {...props}
    >
      {socials.map((social, index) => (
        <a
          href={social.href || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative cursor-pointer px-3 sm:px-5 py-3 transition-opacity duration-200 ${
            hoveredSocial && hoveredSocial !== social.name
              ? 'opacity-50'
              : 'opacity-100'
          }`}
          key={index}
          onMouseEnter={() => {
            setHoveredSocial(social.name);
            setRotation(Math.random() * 20 - 10);
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={() => {
            setCliked(true);
          }}
        >
          <span className="block text-base sm:text-lg text-white">{social.name}</span>
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className="absolute bottom-full left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  initial={{
                    y: 10,
                    rotate: rotation,
                    opacity: 0,
                    filter: 'blur(2px)',
                  }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: 10, opacity: 0, filter: 'blur(2px)' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      ))}
    </div>
  );
});

AnimatedSocialLinks.displayName = 'AnimatedSocialLinks';

export default AnimatedSocialLinks;