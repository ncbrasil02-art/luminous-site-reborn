import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import rocketAsset from "@/assets/3d/rocket-hero.png.asset.json";

export function RocketTakeoff() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [300, -800]);
  const rotate = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.2, 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <motion.div
        style={{ 
          y: smoothY, 
          rotate: smoothRotate, 
          scale, 
          opacity,
          filter: "drop-shadow(0 0 20px rgba(49, 91, 255, 0.4))"
        }}
        className="absolute top-[40%] right-[5%] md:right-[15%] w-32 h-32 md:w-64 md:h-64"
      >
        <img 
          src={rocketAsset.url} 
          alt="Foguete 3D" 
          className="w-full h-full object-contain"
          loading="lazy"
        />
        {/* Flame effect */}
        <motion.div 
          animate={{ 
            scaleY: [1, 1.5, 1], 
            scaleX: [1, 0.9, 1.1, 1],
            opacity: [0.6, 0.9, 0.6] 
          }}
          transition={{ duration: 0.15, repeat: Infinity }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-48 bg-gradient-to-t from-transparent via-primary/80 to-primary blur-2xl -z-10"
        />
        <motion.div 
          animate={{ 
            scaleY: [1, 2, 1], 
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-32 bg-white/40 blur-xl -z-10"
        />
      </motion.div>
    </div>
  );
}
