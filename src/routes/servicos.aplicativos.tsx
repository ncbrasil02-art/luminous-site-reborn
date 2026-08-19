import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Apple, Bell, Cloud, Fingerprint, MapPin, Palette, ShieldCheck, Sparkles, Wifi, Zap, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/aplicativos";

const lpFaq = [
        { q: "Nativo ou React Native?", a: "**Recomendamos por projeto**: React Native para MVP rápido; nativo para performance crítica ou uso intensivo de hardware." },
        { q: "Vocês publicam nas lojas?", a: "Sim, cuidamos de **contas de desenvolvedor, screenshots, ASO e revisões** da Apple/Google." },
        { q: "Fazem manutenção?", a: "Sim, contratos de **evolução mensal** com sprints de melhorias contínuas." },
        { q: "Qual o prazo médio?", a: "MVP em **90 dias**; app completo em 4 a 8 meses conforme escopo." },
        { q: "Integram com meu backend?", a: "Sim, ou **construímos o backend** completo com APIs, admin e infraestrutura." },
      ];

export const Route = createFileRoute("/servicos/aplicativos")({
  head: () => buildLPMeta({
    title: "Desenvolvimento de Aplicativos Mobile | iOS e Android Nativos",
    description: "Desenvolvimento de aplicativos mobile para iOS e Android. Apps nativos e cross-platform com React Native, Flutter e Swift/Kotlin.",
    keywords: "desenvolvimento de aplicativos, criação de apps, aplicativo ios, aplicativo android, app react native, app flutter",
    canonical: URL,
    h1: "Desenvolvimento de Aplicativos iOS e Android",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Serviços", to: "https://www.ncbrasil.com.br/servicos" },
      { label: "Aplicativos", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-servicos", label: "Serviços" }, { to: "/servicos/aplicativos", label: "Aplicativos" }]}
      subtitle="Mobile Apps"
      h1={<>Aplicativos <span className="text-gradient">iOS e Android</span> que encantam</>}
      intro={<>Do MVP ao app com milhões de downloads — construímos apps **nativos e cross-platform** com UX premium, performance nativa e publicação nas lojas.</>}
      stats={[{ value: "200+", label: "Apps publicados" }, { value: "10Mi+", label: "Downloads acumulados" }, { value: "4,8⭐", label: "Nota média nas lojas" }, { value: "iOS+Android", label: "Nativo ou cross" }]}
      benefits={[
        { icon: Smartphone, title: "iOS + Android", desc: "**React Native, Flutter, Swift ou Kotlin** — escolhemos o stack ideal para seu projeto." },
        { icon: Sparkles, title: "UX Premium", desc: "Design system próprio, **animações nativas** e conformidade com HIG e Material 3." },
        { icon: Bell, title: "Push Notifications", desc: "Segmentação avançada com **Firebase, OneSignal ou APNs nativo**." },
        { icon: Cloud, title: "Backend Escalável", desc: "APIs REST/GraphQL, real-time com WebSockets e **infra serverless**." },
      ]}
      features={[
        { icon: Fingerprint, title: "Login Biométrico", desc: "FaceID, TouchID, digital — autenticação segura e sem fricção." },
        { icon: MapPin, title: "Geolocalização", desc: "Google Maps, Mapbox, tracking em tempo real e geofencing." },
        { icon: Wifi, title: "Offline-First", desc: "App funciona sem internet e **sincroniza quando reconecta**." },
        { icon: Palette, title: "Design Exclusivo", desc: "Identidade visual autoral, ícone, splash e onboarding animado." },
        { icon: ShieldCheck, title: "Segurança", desc: "Certificate pinning, obfuscação, jailbreak/root detection." },
        { icon: Users, title: "Publicação nas Lojas", desc: "Cuidamos de tudo: **App Store Connect, Google Play Console** e revisões." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["Aplicativos","Mobile","Tecnologia"]}
    />
  ),
});
