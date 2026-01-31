import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const AuroraBackground = () => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Aurora layers */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 50% at 20% 40%, hsl(270 50% 60% / 0.15), transparent)",
            "radial-gradient(ellipse 80% 50% at 80% 60%, hsl(270 50% 60% / 0.15), transparent)",
            "radial-gradient(ellipse 80% 50% at 40% 80%, hsl(270 50% 60% / 0.15), transparent)",
            "radial-gradient(ellipse 80% 50% at 20% 40%, hsl(270 50% 60% / 0.15), transparent)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 70% 30%, hsl(175 35% 55% / 0.12), transparent)",
            "radial-gradient(ellipse 60% 40% at 30% 70%, hsl(175 35% 55% / 0.12), transparent)",
            "radial-gradient(ellipse 60% 40% at 60% 50%, hsl(175 35% 55% / 0.12), transparent)",
            "radial-gradient(ellipse 60% 40% at 70% 30%, hsl(175 35% 55% / 0.12), transparent)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 40% 30% at 50% 50%, hsl(45 70% 60% / 0.08), transparent)",
            "radial-gradient(ellipse 40% 30% at 30% 40%, hsl(45 70% 60% / 0.08), transparent)",
            "radial-gradient(ellipse 40% 30% at 70% 60%, hsl(45 70% 60% / 0.08), transparent)",
            "radial-gradient(ellipse 40% 30% at 50% 50%, hsl(45 70% 60% / 0.08), transparent)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
