import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Car, CarFront, Coins, Dice5, Gavel, Gift, ScanLine, ShoppingBag, Store, Ticket, Tractor, ChevronRight
} from "lucide-react";
import { trackRedirect, trackClick } from "@/lib/analytics";

import { Reveal, SectionHeading } from "@/components/Section";
import { buildLPMeta } from "@/components/LandingPage";

import { SITE_URL } from "@/lib/seo";

const URL = `${SITE_URL}/nossos-sistemas`;

export const Route = createFileRoute("/nossos-sistemas")({
  head: () => buildLPMeta({
    title: "Nossos Sistemas | Plataformas Web Sob Demanda — NC Brasil",
    description: "Catálogo de sistemas web prontos e sob demanda da NC Brasil: leilão, cassino, rifas, cupons, classificados de veículos, marketplace e muito mais.",
    keywords: "sistemas web, plataformas online, sistema de leilão, cassino online, rifas online, classificados de veículos, cupons, marketplace",
    canonical: URL,
    h1: "Nossos Sistemas Web",
    breadcrumbs: [
      { label: "Home", to: `${SITE_URL}/` },
      { label: "Sistemas", to: URL },
    ],
    ogImage: "/nossos-sistemas-og.jpg",
  }),
  component: SistemasHub,
});

const systems = [
  { to: "/sistema-de-leilao", icon: Gavel, title: "Sistema de Leilão", desc: "Plataforma profissional para leilões judiciais e extrajudiciais." },
  { to: "/sistema-de-leilao-rural", icon: Tractor, title: "Sistema de Leilão Rural", desc: "Leilões de gado, cavalos e propriedades com transmissão ao vivo." },
  { to: "/classificados-de-veiculos", icon: Car, title: "Classificados de Veículos", desc: "Portal completo de anúncios automotivos com busca avançada." },
  { to: "/sistema-de-cupom-descontos", icon: Ticket, title: "Sistema de Cupons de Desconto", desc: "Plataforma de cupons, ofertas e cashback para varejo." },
  { to: "/plataforma-chinesa-apostas-cassino", icon: Dice5, title: "Plataforma de Cassino Online", desc: "Cassino online completo com jogos, apostas e integrações." },
  { to: "/sistema-de-raspadinha", icon: ScanLine, title: "Sistema de Raspadinha Online", desc: "Raspadinhas digitais com prêmios instantâneos e antifraude." },
  { to: "/sistema-de-rifas", icon: Gift, title: "Sistema de Rifas Online", desc: "Rifas legais e sorteios automáticos com pagamentos integrados." },
  { to: "/sistema-de-ofertas-cupom-marketplace", icon: Store, title: "Marketplace de Ofertas", desc: "Marketplace multiloja com cupons, comissionamento e split." },
  { to: "/sistema-de-revenda-de-veiculos", icon: CarFront, title: "Sistema para Revenda de Veículos", desc: "ERP para lojas de revenda: estoque, financiamento, CRM e portal." },
  { to: "/sistema-de-leilao-de-centavos", icon: Coins, title: "Leilão de Centavos", desc: "Plataforma completa para leilões de centavos com créditos e lances." },
];

function SistemasHub() {
  const search = useRouterState({ select: (s) => s.location.search });

  useEffect(() => {
    if (search && (search as any).from_redirect === 'sistemas_migration') {
      trackRedirect('/sistemas/', '/nossos-sistemas');
    }
  }, [search]);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <SectionHeading
            eyebrow="Engenharia de Elite"
            title={<>Nossos <span className="text-gradient">Sistemas</span> Web</>}
            description={<><strong className="text-foreground">10 plataformas robustas</strong>, testadas em produção, prontas para escalar seu negócio ou serem 100% personalizadas.</>}
          />
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.04}>
                <Link 
                  to={s.to} 
                  onClick={() => trackClick(s.title, "Sistemas Hub Card")}
                  className="group block h-full rounded-2xl border border-border bg-card/40 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 text-xs font-bold uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Ver detalhes →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
