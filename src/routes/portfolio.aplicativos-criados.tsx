import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Apple, Award, Bell, Cloud, Fingerprint, MapPin, Sparkles, Star, Users, Wifi, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/portfolio/aplicativos-criados";

const lpFaq = [
        { q: "Posso ver os apps criados?", a: "Sim, acesse **Portfólio Aplicativos** para cases com links diretos nas lojas." },
        { q: "Publicam nas lojas?", a: "Sim, cuidamos de **App Store Connect, Google Play Console, screenshots e ASO**." },
        { q: "Nativo ou cross-platform?", a: "Recomendamos por projeto: **nativo para performance crítica, cross para MVP rápido**." },
        { q: "Fazem manutenção?", a: "Sim, contratos de evolução mensal com sprints de melhorias e novas features." },
      ];

export const Route = createFileRoute("/portfolio/aplicativos-criados")({
  head: () => buildLPMeta({
    title: "Portfólio de Aplicativos | Apps iOS e Android Criados pela NC Brasil",
    description: "Portfólio de aplicativos criados pela NC Brasil. Apps iOS e Android com milhões de downloads e nota 4.8+ nas lojas.",
    keywords: "portfolio aplicativos, apps criados, portfolio apps ios, portfolio apps android, cases de aplicativos",
    canonical: URL,
    h1: "Portfólio de Aplicativos iOS e Android",
    breadcrumbs: [
      { name: "Home", to: "https://www.ncbrasil.com.br/" },
      { name: "Portfólio", to: "https://www.ncbrasil.com.br/trabalhos-realizados" },
      { name: "Aplicativos Criados", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", name: "Home" }, { to: "/trabalhos-realizados", name: "Portfólio" }, { to: "/portfolio/aplicativos-criados", name: "Aplicativos" }]}
      eyebrow="Portfólio Mobile"
      h1={<>Apps com <span className="text-gradient">milhões de downloads</span> e nota 4.8+</>}
      intro={<>**Mais de 200 aplicativos publicados** nas lojas iOS e Android — do MVP à escala com milhões de usuários ativos.</>}
      stats={[{ value: "200+", name: "Apps publicados" }, { value: "10Mi+", name: "Downloads" }, { value: "4,8⭐", name: "Nota média" }, { value: "iOS+Android", name: "Nativo & Cross" }]}
      benefits={[
        { icon: Award, title: "Apps Premiados", desc: "Aplicativos destacados em **App Store Featured e Google Play Editor's Choice**." },
        { icon: Sparkles, title: "UX Premium", desc: "Design system próprio com **animações nativas e conformidade HIG + Material 3**." },
        { icon: Star, title: "Alta Retenção", desc: "Onboarding e engajamento que resultam em **retenção D30 acima de 40%**." },
        { icon: Users, title: "Escala Comprovada", desc: "Apps atendendo **milhões de usuários simultâneos** com backend serverless." },
      ]}
      features={[
        { icon: Smartphone, title: "Apps Nativos", desc: "Swift para iOS e Kotlin para Android — **performance máxima**." },
        { icon: Apple, title: "React Native & Flutter", desc: "Cross-platform quando **time-to-market importa mais que hardware profundo**." },
        { icon: Bell, title: "Push & Deep Links", desc: "Firebase, OneSignal e universal links para **engajamento e retenção**." },
        { icon: Fingerprint, title: "Biometria", desc: "FaceID, TouchID e digital — autenticação segura sem fricção." },
        { icon: MapPin, title: "Geolocalização", desc: "Google Maps, Mapbox, tracking em tempo real e **geofencing**." },
        { icon: Wifi, title: "Offline-First", desc: "Funciona sem internet e **sincroniza quando reconecta**." },
      ]}
      faq={lpFaq}
    />
  ),
});
