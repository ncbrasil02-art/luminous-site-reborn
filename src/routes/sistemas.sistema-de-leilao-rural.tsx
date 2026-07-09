import { createFileRoute } from "@tanstack/react-router";
import { Beef, Bell, Camera, ClipboardList, Egg, Fish, Globe2, MapPin, ShieldCheck, Tractor, Truck, Video } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/sistema-de-leilao-rural";

const lpFaq = [
        { q: "O sistema emite GTA?", a: "Sim, integramos com **SIGSIF e Defesa Agropecuária estadual** para emissão automática de GTA por lote arrematado." },
        { q: "Aceita leilão presencial e online simultâneo?", a: "Sim. Operamos **leilões híbridos** com pregoeiro no tatersal e lances online sincronizados." },
        { q: "Como funciona a genética registrada?", a: "Suportamos **ABCZ, ABCB, ABQM** e outras associações com validação automática do RG." },
        { q: "É possível vender propriedades rurais?", a: "Sim, módulo específico com **matrícula, CAR, georreferenciamento** e visita virtual 360°." },
        { q: "Vocês fazem toda a divulgação?", a: "Ajudamos com **estratégia de mídia paga** segmentada para produtores rurais e investidores." },
      ];

export const Route = createFileRoute("/sistemas/sistema-de-leilao-rural")({
  head: () => buildLPMeta({
    title: "Sistema de Leilão Rural Online | Gado, Cavalos e Propriedades",
    description: "Plataforma completa para leilões rurais: bovinos, equinos, propriedades e máquinas agrícolas. Transmissão ao vivo, GTA, pesagem integrada e pagamento facilitado.",
    keywords: "leilão rural, leilão de gado online, leilão de cavalos, leilão agropecuário, sistema para leiloeiro rural, plataforma de leilão pecuária",
    canonical: URL,
    h1: "Plataforma para Leilões Rurais e Agropecuários",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Leilão Rural", url: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/sistemas", label: "Sistemas" }, { to: "/sistemas/sistema-de-leilao-rural", label: "Leilão Rural" }]}
      eyebrow="Leilão Rural"
      h1={<>Plataforma para <span className="text-gradient">Leilões Rurais</span></>}
      intro={<>Sistema especializado para <strong className="text-foreground">leilões de bovinos, equinos, ovinos, propriedades e máquinas agrícolas</strong> — com transmissão HD, pesagem integrada e emissão de <strong className="text-foreground">GTA</strong>.</>}
      stats={[{ value: "200+", label: "Leilões rurais" }, { value: "1.2M", label: "Cabeças cadastradas" }, { value: "50+", label: "Fazendas parceiras" }, { value: "5⭐", label: "Avaliação" }]}
      benefits={[
        { icon: Tractor, title: "Multi-categoria Rural", desc: "**Bovinos, equinos, ovinos, caprinos, aves, imóveis rurais e maquinário** em módulos dedicados." },
        { icon: Camera, title: "Ficha Técnica Completa", desc: "Peso, idade, genealogia, **DEP, DEC, exames andrológicos** e fotos profissionais dos animais." },
        { icon: Truck, title: "Logística Integrada", desc: "**Frete, GTA, TAG e conta gráfica** integrados com transportadoras parceiras." },
        { icon: ShieldCheck, title: "Sanidade & Documentação", desc: "Controle de **vacinas, exames sanitários e regularização** por lote automaticamente." },
      ]}
      features={[
        { icon: Video, title: "Transmissão do Pregão", desc: "Câmeras multiângulo no tronco de pesagem e chat com o consignante." },
        { icon: MapPin, title: "Origem Rastreável", desc: "Fazenda de origem, coordenadas GPS e histórico de propriedade." },
        { icon: Bell, title: "Lances por WhatsApp", desc: "Integração para receber lances via WhatsApp Business API." },
        { icon: ClipboardList, title: "Nota do Produtor", desc: "Emissão automática da nota do produtor rural e boleto do frete." },
        { icon: Beef, title: "Módulo Elite", desc: "Genética premium com **RGD, RGN, TOP e P.O.** para animais registrados." },
        { icon: Globe2, title: "Divulgação Nacional", desc: "Anúncios integrados com Canal Rural, Compre Rural e redes sociais." },
      ]}
      faq={lpFaq}
    />
  ),
});
