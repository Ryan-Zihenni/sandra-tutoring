import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInView({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ''
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
