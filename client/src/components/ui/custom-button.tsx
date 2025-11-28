import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CustomButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-none transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:pointer-events-none tracking-wide cursor-pointer";
    
    const variants = {
      primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
      secondary: "bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white",
      outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
      ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
    };

    const sizes = {
      sm: "h-9 px-4 text-xs uppercase",
      md: "h-12 px-8 text-sm uppercase",
      lg: "h-14 px-10 text-base uppercase"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
