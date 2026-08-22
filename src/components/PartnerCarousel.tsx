import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PartnerLogo {
  url: string;
  name: string;
  link?: string;
}

interface PartnerCarouselProps {
  logos: PartnerLogo[];
  title?: string;
}

export function PartnerCarousel({ logos, title = "Órgãos Homologados e Parceiros" }: PartnerCarouselProps) {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-12 overflow-hidden border-b border-border bg-gradient-to-b from-surface/5 to-surface/20">
      {title && (
        <h2 className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
          {title}
        </h2>
      )}
      
      <div className="relative flex max-w-[100vw] overflow-hidden marquee-mask">
        <motion.div
          animate={{
            x: [0, -2500], // Increased further to handle very wide viewports
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center whitespace-nowrap px-8"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex shrink-0 items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110"
            >
              <a 
                href={logo.link || "#"} 
                target={logo.link ? "_blank" : undefined} 
                rel={logo.link ? "noopener noreferrer" : undefined}
                className={cn("flex flex-col items-center gap-2", !logo.link && "cursor-default")}
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto shrink-0 object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    // Show text fallback if image fails
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
