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
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110"
            >
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-10 md:h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/200x80/0A1428/FFFFFF?text=" + encodeURIComponent(logo.name);
                    }}
                  />
                </a>
              ) : (
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/200x80/0A1428/FFFFFF?text=" + encodeURIComponent(logo.name);
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
