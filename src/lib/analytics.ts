// Lightweight analytics helper.
// Supports both GA4 (Measurement ID) and Legacy Universal Analytics (UA ID).
// Loads Google Analytics only when IDs are defined at build time.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = (import.meta.env.VITE_GA_ID as string | undefined) || "G-9Q6H0QETRF";
const UA_ID = (import.meta.env.VITE_UA_ID as string | undefined) || "UA-26575989-46";

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  // Load GA4
  if (GA_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
    
    // Also track legacy UA if present
    if (UA_ID && UA_ID !== GA_ID) {
      window.gtag("config", UA_ID, { send_page_view: false });
    }
  }
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;
  const params = {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  };
  
  window.gtag?.("event", "page_view", params);
}

export function trackNotFound(path: string) {
  trackEvent("404_not_found", {
    path,
    referrer: typeof document !== "undefined" ? document.referrer : undefined,
  });
}

export function trackRedirect(from: string, to: string) {
  trackEvent("url_redirection", {
    from,
    to,
    type: "301_permanent",
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  window.dataLayer?.push({ event: name, ...params });
}

export type LeadSource =
  | "form_orcamento"
  | "form_contato"
  | "whatsapp_fab"
  | "cta_hero"
  | "cta_footer";

export function trackLead(source: LeadSource, extra: Record<string, unknown> = {}) {
  trackEvent("generate_lead", { source, currency: "BRL", value: 1, ...extra });
}
