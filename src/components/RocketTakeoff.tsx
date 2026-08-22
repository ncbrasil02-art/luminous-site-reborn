import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import rocketAsset from "@/assets/3d/rocket-hero.png.asset.json";

export function RocketTakeoff() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [400, -800]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.5, 1.2, 0.6, 0.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

  const smoothY = useSpring(y, { stiffness: 40, damping: 20, restDelta: 0.001 });
  const smoothRotate = useSpring(rotate, { stiffness: 40, damping: 20 });

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <motion.div
        style={{ 
          y: smoothY, 
          rotate: smoothRotate, 
          scale, 
          opacity,
          // Removido drop-shadow pesado para melhorar FPS em dispositivos móveis
          filter: "brightness(1.2)"
        }}
        className="absolute top-[60%] left-1/2 md:left-2/3 -translate-x-1/2 w-48 h-48 md:w-96 md:h-96"
      >
        <img 
          src={rocketAsset.url} 
          alt="" 
          className="w-full h-full object-contain will-change-transform"
          loading="eager"
          width="384"
          height="384"
        />
        
        {/* Deep Exhaust Flame Effect */}
        <motion.div 
          animate={{ 
            scaleY: [1, 1.5, 1], 
            opacity: [0.7, 0.9, 0.7] 
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-20 h-64 bg-gradient-to-t from-transparent via-primary/60 to-primary/90 blur-3xl -z-10 will-change-transform"
        />
        
        {/* Intense Core Flame */}
        <motion.div 
          animate={{ 
            scaleY: [1, 1.3, 1], 
            opacity: [0.5, 0.7, 0.5] 
          }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-8 h-32 bg-white/40 blur-xl -z-10 will-change-transform"
        />

        {/* Dynamic Glow Around Base */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-20 will-change-opacity"
        />
      </motion.div>
    </div>
  );
}