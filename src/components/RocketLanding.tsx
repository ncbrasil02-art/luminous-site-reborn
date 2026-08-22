import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import rocketAsset from "@/assets/3d/rocket-hero.png.asset.json";

export function RocketLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Acompanhar o scroll para saber quando ativar (30% = 0.3)
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.25) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollYProgress]);

  // Transformações baseadas no scroll
  // Do topo da tela (y: -200) até a posição do WhatsApp (y: 0 relativo ao container bottom-right)
  // Mas vamos usar coordenadas fixas/view-relative para o "pouso"
  
  // Progresso do "pouso" entre 25% e 45% do scroll
  const landingProgress = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  
  const y = useTransform(landingProgress, [0, 1], [-500, 0]);
  const x = useTransform(landingProgress, [0, 1], [-200, 0]);
  const scale = useTransform(landingProgress, [0, 1], [0.8, 0.25]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.95, 1], [0, 1, 1, 0]);
  const rotate = useTransform(landingProgress, [0, 1], [10, -45]); // Inclina para "pousar"

  const smoothY = useSpring(y, { stiffness: 60, damping: 25 });
  const smoothX = useSpring(x, { stiffness: 60, damping: 25 });

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <motion.div
        style={{
          y: smoothY,
          x: smoothX,
          scale,
          opacity,
          rotate,
          filter: "drop-shadow(0 0 20px rgba(49, 91, 255, 0.5))"
        }}
        className="relative w-48 h-48 flex items-center justify-center"
      >
        {/* Cauda de luz dinâmica em direção ao WhatsApp no pouso */}
        <motion.div
          style={{
            opacity: useTransform(landingProgress, [0.8, 1], [0, 0.8]),
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent blur-xl -z-10 origin-top rotate-45"
          animate={{
            scaleY: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Foguete Branded */}
        <motion.img
          src={rocketAsset.url}
          alt=""
          className="w-full h-full object-contain"
          animate={isVisible && scrollYProgress.get() > 0.45 ? {
            y: [0, -10, 0],
            rotate: [-45, -43, -45]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Efeito de propulsão sutil durante o voo/pouso */}
        <motion.div
          style={{ opacity: useTransform(landingProgress, [0, 0.8], [0.6, 0]) }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-8 h-24 bg-gradient-to-t from-transparent via-primary/40 to-primary/80 blur-xl -z-10"
        />
      </motion.div>
    </div>
  );
}
