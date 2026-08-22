import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import rocketAsset from "@/assets/3d/rocket-hero.png.asset.json";

interface RocketTakeoffProps {
  variant?: "hero" | "scrolling";
}

export function RocketTakeoff({ variant = "hero" }: RocketTakeoffProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isHero = variant === "hero";
  
  // Hero: Takeoff effect
  // Scrolling: Appears later in the page
  const yRange = isHero ? [400, -800] : [800, -400];
  const scaleRange = isHero ? [0.5, 1.2, 0.6, 0.3] : [0.3, 0.8, 0.3];
  
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], scaleRange);
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
          filter: "drop-shadow(0 0 30px rgba(49, 91, 255, 0.4))"
        }}
        animate={{
          x: [0, 5, -5, 0],
          y: [0, -5, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[50%] left-1/2 md:left-2/3 -translate-x-1/2 w-48 h-48 md:w-80 md:h-80"
      >
        <img 
          src={rocketAsset.url} 
          alt="" 
          className="w-full h-full object-contain will-change-transform"
          loading="eager"
          width="384"
          height="384"
        />
        
        <motion.div 
          animate={{ 
            scaleY: [1, 1.3, 1], 
            opacity: [0.6, 0.8, 0.6] 
          }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-16 h-48 bg-gradient-to-t from-transparent via-primary/40 to-primary/70 blur-2xl -z-10 will-change-transform"
        />
        
        <motion.div 
          animate={{ 
            scaleY: [1, 1.2, 1], 
            opacity: [0.4, 0.6, 0.4] 
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-6 h-24 bg-white/30 blur-xl -z-10 will-change-transform"
        />
      </motion.div>
    </div>
  );
}