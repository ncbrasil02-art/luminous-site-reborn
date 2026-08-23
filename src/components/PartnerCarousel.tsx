import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PartnerLogo {
  url: string;
  name: string;
  link?: string;
}

interface PartnerCarouselProps {
  logos: PartnerLogo[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  showBackground?: boolean;
}

export function PartnerCarousel({ 
  logos, 
  title, 
  subtitle,
  showBackground = true 
}: PartnerCarouselProps) {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-16 overflow-hidden border-b border-white/5 bg-[#0A1428]/50 backdrop-blur-sm relative isolate">
      {/* Cinematic Glow Effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {title && (
        <h2 className="text-center text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] text-blue-400/60 mb-12 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
          {title}
        </h2>
      )}
      
      <div className="relative flex max-w-[100vw] overflow-hidden marquee-mask-cinematic">
        <motion.div
          animate={{
            x: [0, -3500],
          }}
          transition={{
            duration: 90, // Further slowed down to 90s for maximum smoothness ("suavidade")
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-24 md:gap-40 items-center whitespace-nowrap px-8" // Aumentado gap para distanciamento premium
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex shrink-0 items-center justify-center transition-all duration-700 group"
            >
              <a 
                href={logo.link || "#"} 
                target={logo.link ? "_blank" : undefined} 
                rel={logo.link ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex flex-col items-center gap-2 relative",
                  !logo.link && "cursor-default"
                )}
              >
                {/* Subtle outer glow on hover */}
                <div className="absolute -inset-4 bg-primary/0 group-hover:bg-primary/5 rounded-full blur-xl transition-all duration-700" />
                
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-12 md:h-16 w-auto shrink-0 object-contain opacity-40 brightness-0 invert group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-700 scale-100 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.text-fallback')) {
                      const span = document.createElement('span');
                      span.className = 'text-fallback text-xs font-bold uppercase tracking-wider text-muted-foreground/80';
                      span.innerText = logo.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
