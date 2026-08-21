import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Apple, Bell, Cloud, Fingerprint, MapPin, Palette, ShieldCheck, Sparkles, Wifi, Zap, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/aplicativos";

const lpFaq = [
        { q: "Desenvolvem para Android e iOS?", a: "Sim, criamos aplicativos nativos e híbridos que rodam perfeitamente em **ambas as plataformas**." },
        { q: "O aplicativo é integrado ao meu site?", a: "Sim, desenvolvemos o backend para que seu **site e aplicativo compartilhem os mesmos dados** em tempo real." },
        { q: "Qual tecnologia vocês utilizam?", a: "Utilizamos as mais modernas do mercado como **React Native, Flutter e Node.js** para garantir performance." },
        { q: "Vocês cuidam da publicação nas lojas?", a: "Sim, fazemos todo o processo de envio e aprovação na **Apple Store e Google Play**." },
        { q: "Fazem aplicativos sob medida?", a: "Sim, cada projeto é **único e planejado** de acordo com a necessidade específica do seu negócio." },
      ];

export const Route = createFileRoute("/servicos/aplicativos")({
  head: () => buildLPMeta({
    title: "Criação de Aplicativos Web e Mobile Profissionais | iOS e Android",
    description: "Desenvolvimento de aplicativos mobile para iOS e Android. Apps nativos e cross-platform com React Native, Flutter e Swift/Kotlin.",
    keywords: "desenvolvimento de aplicativos, criação de apps, aplicativo ios, aplicativo android, app react native, app flutter",
    canonical: URL,
    serviceType: "aplicativos",
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
      eyebrow="Mobile Apps"
      benefitsTitle={<>Por que criar seu <span className="text-gradient">aplicativo iOS e Android</span></>}
      featuresTitle={<>Recursos do <span className="text-gradient">desenvolvimento de aplicativos</span></>}
      faqTitle={<>Dúvidas sobre <span className="text-gradient">criação de aplicativos</span></>}
      h1={<>Criação de <span className="text-gradient">Aplicativos Web Completos</span> e Modernos</>}
      intro={<>Criamos **aplicativos web completos** com as mais modernas tecnologias do mercado. Do MVP à escala global, entregamos performance nativa e experiência de usuário premium.</>}
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
      heroImage="/img-sistema-de-leilao/rural-transmissao.png"
      relatedNewsTags={["Aplicativos","Mobile","Tecnologia"]}
    />
  ),
});
