// Lightweight analytics helper.
// Loads Google Analytics 4 only when VITE_GA_ID is defined at build time.
// Exposes trackEvent() and trackLead() with a safe no-op fallback so the app
// works with or without a measurement ID.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined" || !GA_ID) return;
  initialized = true;

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
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  // Mirror to dataLayer so GTM/Meta Pixel/etc. can consume too.
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
