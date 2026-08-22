import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TemplateConstruction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Blocos se montando
  const b1X = useTransform(scrollYProgress, [0, 0.4], [-200, 0]);
  const b1Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  const b2X = useTransform(scrollYProgress, [0.1, 0.5], [200, 0]);
  const b2Opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const b3Y = useTransform(scrollYProgress, [0.2, 0.6], [200, 0]);
  const b3Opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full py-20 flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-4xl h-[400px] border border-white/5 bg-navy-950/20 rounded-none backdrop-blur-sm p-8 flex flex-col gap-4">
        {/* Header block */}
        <motion.div 
          style={{ x: b1X, opacity: b1Opacity }}
          className="w-full h-12 bg-primary/20 border border-primary/30 rounded-none"
        />
        
        <div className="flex gap-4 h-full">
          {/* Sidebar block */}
          <motion.div 
            style={{ x: b1X, opacity: b1Opacity }}
            className="w-1/4 h-full bg-white/5 border border-white/10 rounded-none"
          />
          
          <div className="flex flex-col gap-4 w-3/4">
            {/* Main content blocks */}
            <motion.div 
              style={{ x: b2X, opacity: b2Opacity }}
              className="w-full h-1/2 bg-white/10 border border-white/20 rounded-none"
            />
            <div className="flex gap-4 h-1/2">
              <motion.div 
                style={{ y: b3Y, opacity: b3Opacity }}
                className="w-1/2 h-full bg-primary/10 border border-primary/20 rounded-none"
              />
              <motion.div 
                style={{ y: b3Y, opacity: b3Opacity }}
                className="w-1/2 h-full bg-white/5 border border-white/10 rounded-none"
              />
            </div>
          </div>
        </div>

        {/* Floating tech elements */}
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -right-8 top-1/4 w-16 h-16 bg-primary blur-2xl rounded-none"
        />
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -left-12 bottom-1/4 w-24 h-24 bg-secondary blur-3xl rounded-none"
        />
      </div>
    </div>
  );
}
