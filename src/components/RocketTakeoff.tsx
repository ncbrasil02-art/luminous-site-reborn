import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import rocketAsset from "@/assets/3d/rocket.png.asset.json";

export function RocketTakeoff() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 0.2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-24 bg-gradient-to-t from-orange-500 via-primary to-transparent blur-xl"
        />
      </motion.div>
    </div>
  );
}
