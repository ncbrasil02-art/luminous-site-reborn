import { Facebook, Twitter, Linkedin, MessageSquare, Share2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { trackClick } from "@/lib/analytics";

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.ncbrasil.com.br';
  const absoluteUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  
  const encodedUrl = encodeURIComponent(absoluteUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-[#1877F2]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:text-[#25D366]",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mr-1">Compartilhar:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick(link.name, "Social Share", { url: link.href })}
          className={cn(
            "group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/50 transition-all hover:scale-110",
            link.color
          )}
          aria-label={`Compartilhar no ${link.name}`}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className={cn(
          "group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/50 transition-all hover:scale-110 hover:text-primary",
          copied && "text-primary border-primary/50"
        )}
        aria-label="Copiar link"
      >
        {copied ? <Share2 className="h-4 w-4 animate-bounce" /> : <Share2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
