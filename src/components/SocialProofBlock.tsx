import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
];

const phrases = [
  "pessoas que assinaram com a NC Brasil estão prosperando em suas plataformas",
  "Aprovado por mais de 85.000 profissionais de tecnologia",
  "Líder em sistemas de alta performance no Brasil",
  "Tecnologia premium para leilões, rifas e iGaming",
  "Escalabilidade garantida para grandes volumes de acessos",
];

interface SocialProofBlockProps {
  className?: string;
}

export function SocialProofBlock({ className }: SocialProofBlockProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [avatarOffset, setAvatarOffset] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);

    const avatarInterval = setInterval(() => {
      setAvatarOffset((prev) => (prev + 1) % (avatars.length - 4));
    }, 3000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(avatarInterval);
    };
  }, []);

  const visibleAvatars = avatars.slice(avatarOffset, avatarOffset + 5);

  return (
    <div className={cn("flex flex-col md:flex-row items-center justify-center gap-4", className)}>
      <div className="flex -space-x-3 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleAvatars.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-[#0A1428] ring-2 ring-white/10"
            >
              <img src={url} alt="User avatar" className="h-full w-full rounded-full object-cover" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm font-bold text-white">Aprovado por mais de 85.000 pessoas</span>
        </div>
        
        <div className="h-6 overflow-hidden relative w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-sm text-muted-foreground whitespace-nowrap"
            >
              {phrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
