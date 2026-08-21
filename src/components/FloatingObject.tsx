import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingObjectProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export function FloatingObject({ className, delay = 0, duration = 6 }: FloatingObjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={cn("absolute z-0", className)}
    >
      <div className="h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
    </motion.div>
  );
}
