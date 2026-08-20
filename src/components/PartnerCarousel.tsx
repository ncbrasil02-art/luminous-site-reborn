import { motion } from "framer-motion";

interface PartnerLogo {
  url: string;
  name: string;
  link?: string;
}

interface PartnerCarouselProps {
  logos: PartnerLogo[];
  title?: string;
}

export function PartnerCarousel({ logos, title }: PartnerCarouselProps) {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-12 overflow-hidden border-b border-border bg-surface/10">
      {title && (
        <h2 className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
          {title}
        </h2>
      )}
      
      <div className="relative flex max-w-[100vw] overflow-hidden marquee-mask">
        <motion.div
          animate={{
            x: [0, -1500], // Increased to ensure continuity on larger screens
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
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110"
            >
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </a>
              ) : (
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
