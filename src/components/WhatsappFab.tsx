import { trackLead } from "@/lib/analytics";

const WHATSAPP_URL =
  "https://wa.me/5521996509905?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20NC%20Brasil%20e%20gostaria%20de%20um%20or%C3%A7amento.";

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackLead("whatsapp_fab", { channel: "whatsapp" })}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground glow-md transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-primary opacity-60 blur-xl animate-glow-pulse" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.08A10 10 0 1 0 19.05 4.91Zm-7.04 15.29a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.22.64.64-2.16-.2-.32a8.34 8.34 0 1 1 6.32 3.18Zm4.57-6.23c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06a6.83 6.83 0 0 1-2-1.24 7.5 7.5 0 0 1-1.39-1.72c-.15-.25 0-.39.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17 0-.31-.04-.44-.06-.13-.57-1.37-.79-1.88-.21-.5-.42-.43-.57-.44h-.49a.94.94 0 0 0-.69.32 2.85 2.85 0 0 0-.9 2.13c0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.76 4.39 3.86 2.58 1.1 2.58.73 3.05.69.47-.04 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29Z" />
      </svg>
    </a>
  );
}
