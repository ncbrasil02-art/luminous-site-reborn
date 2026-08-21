import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import {
  Beef, Bell, Camera, ClipboardList, Globe2, MapPin, ShieldCheck, Tractor, Truck, Video,
  Sprout, Radio, FileCheck, BarChart3, Users, Wallet, Cloud, Award, Zap, Lock, Database,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { testimonialsData } from "@/lib/testimonials.data";
import leilaoRuralAdmin from "@/assets/leilao-rural-admin.asset.json";
import leilaoRuralLotes from "@/assets/leilao-rural-lotes.asset.json";
import leilaoRuralEventos from "@/assets/leilao-rural-eventos.asset.json";
import leilaoRuralVitrine from "@/assets/leilao-rural-vitrine.asset.json";
import leilaoRuralCadastro from "@/assets/leilao-rural-cadastro.asset.json";
import leilaoRuralGenealogia from "@/assets/leilao-rural-genealogia.asset.json";
import leilaoRuralPregao from "@/assets/leilao-rural-pregao.asset.json";
import leilaoRuralHome from "@/assets/leilao-rural-home.asset.json";


const URL = "https://www.ncbrasil.com.br/sistema-de-leilao-rural";

const lpFaq = [
  { q: "O sistema emite GTA (Guia de Trânsito Animal) automaticamente?", a: "Sim. Integramos com **SIGSIF/MAPA e as Defesas Agropecuárias estaduais (IDARON, ADAPAR, IAGRO, IMA, IDAF, ADAF)** para emissão automática da GTA por lote arrematado, com validação de TAG, vacinas e brucelose/tuberculose." },
  { q: "Suporta leilão presencial, online e híbrido?", a: "Sim. **Modo tatersal (presencial com pregoeiro), 100% online e híbrido sincronizado** — os lances online entram no mesmo pregão do martelo, com áudio ao vivo e delay <500ms." },
  { q: "É homologado por associações de raça?", a: "Suportamos **ABCZ (Zebu), ABCB Brahman, ABQM (Quarto de Milha), ABCCMM (Mangalarga), ABCPO Nelore, ABCGIL** e outras — com validação automática do RG/RGD do animal." },
  { q: "Como funciona a pesagem integrada?", a: "Balança rodoviária ou de tronco conectada via **API/serial**, com peso oficial gravado no lote e cálculo automático de arroba (@)." },
  { q: "Vende propriedades rurais e maquinário também?", a: "Sim. Módulos específicos com **matrícula do CRI, CAR, georreferenciamento SIGEF, laudo INCRA** e visita virtual 360° em drones para fazendas." },
  { q: "Aceita boi gordo, bezerro, matriz e reprodutor no mesmo sistema?", a: "Sim. **Categorias configuráveis** (cria, recria, engorda, matriz PO, reprodutor, touro provado) com ficha genética e DEP." },
  { q: "Como funciona o pagamento e a conta gráfica?", a: "**Pix, boleto, cartão, cheque com garantia e conta gráfica do consignante** — split automático de comissão do leiloeiro, ITBI e retenções." },
  { q: "Faz transmissão ao vivo em HD?", a: "Sim, com **múltiplas câmeras no tronco de pesagem, chat com o consignante e replay** — CDN otimizada para áreas rurais com internet fraca." },
  { q: "Existe app para o comprador?", a: "**iOS e Android nativos** com push de lances, favoritos, catálogo offline e biometria para dar lance com 1 toque." },
  { q: "Quanto custa?", a: "Modelo de **licença perpétua sem mensalidade recorrente** ou plano SaaS com taxa por lote — orçamento personalizado conforme volume e módulos." },
];

export const Route = createFileRoute("/sistema-de-leilao-rural")({
  head: () => buildLPMeta({
    title: "Leilão Rural | Sistema para Gado, Cavalos e Agropecuária",
    description: "NcBrasil: Plataforma completa de leilão rural com transmissão HD, GTA automática e pesagem integrada. A melhor tecnologia para o agronegócio.",
    keywords: "sistema leilão rural, leilão de gado online, leilão de cavalos, plataforma leilão agropecuário, software leiloeiro rural, sistema leilão pecuária, leilão bovinos online, sistema para leilões rurais, plataforma de leilão cavalos, sistema de leilão ao vivo de boi, sistema de leilões para animais, sistema rural de leilões, melhor plataforma de leilão rural, sistema para fazendas e criatórios, plataforma de gerenciamento de leilões com transmissão ao vivo dos animais",
    canonical: URL,
    h1: "NcBrasil - Sistema de Leilão Rural",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Sistemas", to: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { label: "Leilão Rural", to: URL },
    ],
    faq: lpFaq,
    ogImage: "/og/leilao-rural.jpg",
  }),
  component: () => (
    <>
      <Helmet>
        <title>Sistema de Leilão Rural Online | Gado, Cavalos, Fazendas — NC Brasil</title>
        <meta name="description" content="Plataforma completa para leilões rurais e agropecuários: bovinos, equinos, propriedades, maquinário. Transmissão HD, GTA automática, pesagem integrada, Pix e conta gráfica." />
        <meta name="keywords" content="sistema leilão rural, leilão de gado online, leilão de cavalos, plataforma leilão agropecuário, software leiloeiro rural, sistema leilão pecuária, leilão bovinos online, sistema para leilões rurais, plataforma de leilão cavalos, sistema de leilão ao vivo de boi, sistema de leilões para animais, sistema rural de leilões, melhor plataforma de leilão rural, sistema para fazendas e criatórios, plataforma de gerenciamento de leilões com transmissão ao vivo dos animais" />
      </Helmet>
      <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/sistema-de-leilao-rural", label: "Leilão Rural" }]}
      eyebrow="Agronegócio · Pecuária · Genética"
      h1={<>Sistema para <span className="text-gradient">Leilões Rurais</span> e Plataforma de <span className="text-gradient">Leilão Cavalos</span></>}
      intro={<>A NC Brasil desenvolve o <strong>sistema para leilões rurais</strong> mais avançado do agronegócio brasileiro para leiloeiros, cabanhas e associações de raça. Opere com uma <strong>plataforma de leilão cavalos</strong>, bovinos, ovinos e maquinário com transmissão HD, emissão automática de GTA, pesagem integrada e o melhor <strong>sistema de leilão ao vivo de boi</strong>.</>}
      stats={[
        { value: "200+", label: "Leilões rurais realizados" },
        { value: "1.2M", label: "Cabeças cadastradas" },
        { value: "27", label: "Estados atendidos" },
        { value: "R$0", label: "Aluguel mensal" },
      ]}
      clientsTitle={<>Cabanhas, associações e leiloeiros que <span className="text-gradient">confiam na NC Brasil</span></>}
      clients={["Cabanha Elite", "Fazenda Guardião", "Nelore Premium", "Haras Vale Real", "ABCZ Certificada", "Compre Rural", "Canal do Boi", "Associação Brahman"]}
      problem={{
        title: <>Por que os <span className="text-destructive">sistemas terceirizados</span> travam o seu leilão rural?</>,
        items: [
          "**Aluguel mensal alto** de plataformas SaaS estrangeiras que não entendem GTA, TAG ou conta gráfica do produtor.",
          "**Transmissão de baixa qualidade** que trava no meio do pregão — perda de lances e credibilidade com o comprador.",
          "**Falta de integração com Defesa Agropecuária** e SIGSIF, obrigando o leiloeiro a emitir GTA manualmente lote a lote.",
          "**Zero suporte a genética registrada** (ABCZ, ABQM, ABCB) — o animal PO precisa ser cadastrado manualmente.",
          "**Pagamento lento** por TED/DOC, sem Pix instantâneo nem cheque com garantia.",
          "**Comprador rural sem app** — depende de navegador travado em fazenda com internet 3G instável.",
        ],
      }}
      solution={{
        title: <>A resposta é um <span className="text-gradient">sistema de leilões para animais</span> feito para o campo</>,
        desc: <>Desde 2007 a NC Brasil constrói o <strong>sistema rural de leilões</strong> para martelos oficiais, cabanhas e associações. Nosso software foi projetado com pregoeiros e produtores para ser a <strong>melhor plataforma de leilão rural</strong>, eliminando retrabalho e maximizando a arrematação por lote.</>,
        highlights: [
          "**Licença perpétua** ou SaaS com taxa por lote — você escolhe",
          "**GTA automática** integrada às Defesas Agropecuárias",
          "**Transmissão HD** com CDN otimizada para zona rural",
          "**Pix instantâneo** + conta gráfica do consignante",
          "**App nativo** iOS/Android para o comprador",
          "**White label** com sua marca, domínio e cores",
        ],
      }}
      benefits={[
        { icon: Tractor, title: "Multi-categoria Rural", desc: "**Bovinos, equinos, ovinos, caprinos, aves, imóveis rurais e maquinário agrícola** em módulos dedicados com ficha específica por espécie." },
        { icon: Camera, title: "Ficha Genética Completa", desc: "Peso, idade, genealogia, **DEP, DEC, exames andrológicos, ultrassonografia de carcaça** e fotos profissionais 360°." },
        { icon: Truck, title: "Logística Integrada", desc: "**Frete, GTA, TAG e conta gráfica** integrados com transportadoras parceiras e emissão de nota do produtor rural." },
        { icon: ShieldCheck, title: "Sanidade & Conformidade", desc: "Controle automático de **vacinas de febre aftosa, brucelose, tuberculose e regularização** por lote — bloqueia venda de animal irregular." },
      ]}
      features={[
        { icon: Video, title: "Transmissão do Pregão HD", desc: "Câmeras multiângulo no tronco de pesagem, chat com o consignante e replay dos lotes." },
        { icon: MapPin, title: "Origem Rastreável", desc: "Fazenda de origem, coordenadas GPS, CAR e histórico completo de propriedade do animal." },
        { icon: Bell, title: "Lances via WhatsApp", desc: "Integração com **WhatsApp Business API** para receber lances de compradores em áreas sem app instalado." },
        { icon: ClipboardList, title: "Nota do Produtor", desc: "Emissão automática de nota do produtor rural, boleto do frete e recibo do arrematante." },
        { icon: Beef, title: "Módulo Elite/PO", desc: "Genética premium com **RGD, RGN, TOP e P.O.** para animais registrados nas associações." },
        { icon: Globe2, title: "Divulgação Nacional", desc: "Anúncios integrados com **Canal Rural, Compre Rural, AgroWeb** e redes sociais." },
        { icon: Radio, title: "Áudio do Pregoeiro", desc: "Streaming de áudio profissional do martelo com **delay <500ms** para online e presencial." },
        { icon: Sprout, title: "Módulo Sêmen e Embrião", desc: "Venda de material genético congelado com **controle de partida, botijão e rastreabilidade Coovet**." },
        { icon: Award, title: "Ranking de Cabanhas", desc: "Ranking público de **cabanhas, touros provados e reprodutores** com melhor DEP." },
      ]}
      modules={[
        { icon: Beef, title: "Bovinocultura", items: ["Nelore, Brahman, Angus, Senepol", "Boi gordo, cria, recria, engorda", "Matrizes PO e reprodutores provados", "Pesagem oficial integrada", "DEP, GMD, EPMURAS"] },
        { icon: Sprout, title: "Equinocultura", items: ["Quarto de Milha, Mangalarga, Crioulo", "Passaporte ABQM/ABCCMM", "Genealogia 4 gerações", "Provas de laço e vaquejada", "Vídeos de andamento"] },
        { icon: Tractor, title: "Propriedades & Máquinas", items: ["Fazendas com matrícula e CAR", "Tratores, colheitadeiras, implementos", "Georreferenciamento SIGEF", "Visita 360° via drone", "Laudo INCRA"] },
        { icon: FileCheck, title: "Sanidade & Documentação", items: ["GTA automática (todos os estados)", "TAG e SISBOV", "Vacinas e exames", "Guia de trânsito de sêmen", "Nota do produtor rural"] },
      ]}
      useCases={[
        { icon: Beef, title: "Leiloeiro Oficial Rural", desc: "Martelo homologado que precisa cumprir Decreto 21.981/32 com transparência total e conta gráfica auditável." },
        { icon: Award, title: "Cabanha de Elite", desc: "Criador PO que faz leilão anual da própria genética com transmissão HD e catálogo digital." },
        { icon: Users, title: "Associação de Raça", desc: "ABCZ, ABQM, ABCB organizando leilões oficiais com validação de RG dos animais e ranking de expositores." },
        { icon: Truck, title: "Frigorífico e Confinamento", desc: "Compra programada de boi gordo com contratos futuros e integração com balança do abatedouro." },
      ]}
      integrations={[
        { label: "SIGSIF/MAPA", category: "Sanidade" },
        { label: "IDARON RO", category: "Defesa" },
        { label: "ADAPAR PR", category: "Defesa" },
        { label: "IAGRO MS", category: "Defesa" },
        { label: "IMA MG", category: "Defesa" },
        { label: "ABCZ", category: "Associação" },
        { label: "ABQM", category: "Associação" },
        { label: "ABCB Brahman", category: "Associação" },
        { label: "Pix (BCB)", category: "Pagamento" },
        { label: "WhatsApp Business", category: "Comunicação" },
        { label: "Canal Rural", category: "Mídia" },
        { label: "Compre Rural", category: "Mídia" },
        { label: "Balanças Toledo/Coimma", category: "Hardware" },
        { label: "Correios/Braspress", category: "Logística" },
      ]}
      security={[
        { icon: Lock, title: "LGPD Compliance", desc: "Consentimento, portabilidade e anonimização de dados de produtores e compradores." },
        { icon: ShieldCheck, title: "Antifraude", desc: "**Device fingerprint, KYC do arrematante e limite de crédito** por comprador." },
        { icon: Cloud, title: "Infra AWS/GCP", desc: "**99.9% uptime** com backups a cada 6h e CDN global." },
        { icon: Database, title: "Auditoria Total", desc: "Log imutável de todo lance, alteração e pagamento — pronto para fiscalização do MAPA." },
      ]}
      timeline={[
        { step: "01", title: "Diagnóstico do Leiloeiro", desc: "Mapeamos volume, categorias de animais, regiões e integrações necessárias." },
        { step: "02", title: "Configuração & White Label", desc: "Sua marca, domínio, cores e templates de catálogo aplicados em até 15 dias." },
        { step: "03", title: "Homologação Sanitária", desc: "Conectamos com sua Defesa Agropecuária estadual e testamos emissão de GTA." },
        { step: "04", title: "Piloto com Leilão Real", desc: "Primeiro leilão acompanhado pela nossa equipe técnica com suporte war-room." },
        { step: "05", title: "Operação & Escala", desc: "Suporte 24/7, upgrades trimestrais e treinamento contínuo da equipe." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "Concorrentes",
        rows: [
          { feature: "Licença perpétua sem mensalidade", us: true, them: false },
          { feature: "GTA automática (todos os estados)", us: true, them: "Parcial" },
          { feature: "Transmissão HD multi-câmera", us: true, them: true },
          { feature: "Pix instantâneo + conta gráfica", us: true, them: false },
          { feature: "App nativo iOS/Android white label", us: true, them: false },
          { feature: "Validação genética ABCZ/ABQM", us: true, them: false },
          { feature: "Suporte 24/7 em dia de pregão", us: true, them: "Comercial" },
          { feature: "Código-fonte entregável", us: "Opcional", them: false },
        ],
      }}
      testimonials={testimonialsData.slice(5, 8)}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para operar com o melhor <span className="text-gradient">sistema para fazendas e criatórios</span>?</>}
      finalCtaDesc={<>Fale com nossa equipe e conheça a nossa <strong>plataforma de gerenciamento de leilões com transmissão ao vivo dos animais</strong>. Enviamos demonstração ao vivo com dados reais, proposta técnica e cronograma personalizado.</>}
      relatedNewsTags={["Leilão", "Leilão Rural", "Agronegócio", "Sistemas"]}
      showParallaxshowcase={true}
      showcase={[
        { 
          title: "Painel Administrativo Rural", 
          desc: "Gestão completa de animais, lotes e compradores com interface intuitiva.", 
          image: leilaoRuralAdmin.url 
        },
        { 
          title: "Vitrine do Animal Premium", 
          desc: "Apresentação de alta linhagem com fotos, vídeos e ficha técnica detalhada.", 
          image: leilaoRuralVitrine.url 
        },
        { 
          title: "Pregão ao Vivo HD", 
          desc: "Transmissão em tempo real com delay zero e integração de lances online.", 
          image: leilaoRuralPregao.url 
        },
        { 
          title: "Genealogia e Genética", 
          desc: "Árvore genealógica completa e rastreabilidade de linhagem para animais PO.", 
          image: leilaoRuralGenealogia.url 
        },
        { 
          title: "Agenda de Eventos", 
          desc: "Calendário de leilões agendados e transmissão de eventos ao vivo.", 
          image: leilaoRuralEventos.url 
        },
        { 
          title: "Gestão de Lotes", 
          desc: "Controle absoluto de status, preços e histórico de lances por lote.", 
          image: leilaoRuralLotes.url 
        }
      ]}
      finalParallaxCta={{
        text: "Sistema de Leilão Rural Profissional e Personalizado",
        image: leilaoRuralHome.url
      }}
      logo="/logo.jpg"
      heroImage="/logo.jpg"
    />
    </>
  ),
});
