import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { socialProofData } from "@/lib/social-proof.data";
import { useRouterState } from "@tanstack/react-router";

interface SocialProofBlockProps {
  className?: string;
}

export function SocialProofBlock({ className }: SocialProofBlockProps) {
  const router = useRouterState();
  const pathParts = router.location.pathname.split("/").filter(Boolean);
  
  // Try to match the most specific path first, then fall back to the last segment
  const specificPath = pathParts.join("/");
  const lastSegment = pathParts.pop() || "default";
  
  const config = socialProofData[specificPath] || socialProofData[lastSegment] || socialProofData.default;


  
  const avatars = config.avatars || socialProofData.default.avatars || [];
  const phrases = config.phrases;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [avatarOffset, setAvatarOffset] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);

    const avatarInterval = setInterval(() => {
      setAvatarOffset((prev) => (prev + 1) % (Math.max(1, avatars.length - 4)));
    }, 3000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(avatarInterval);
    };
  }, [phrases.length, avatars.length]);

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
              <img 
                src={url} 
                alt="User avatar" 
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
                decoding="async"
                width={48}
                height={48}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm font-bold text-white">{config.mainText}</span>
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
