import { createFileRoute } from "@tanstack/react-router";
import {
  Beef, Bell, Camera, ClipboardList, Globe2, MapPin, ShieldCheck, Tractor, Truck, Video,
  Sprout, Radio, FileCheck, BarChart3, Users, Wallet, Cloud, Award, Zap, Lock, Database,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/sistema-de-leilao-rural";

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

export const Route = createFileRoute("/sistemas/sistema-de-leilao-rural")({
  head: () => buildLPMeta({
    title: "Sistema de Leilão Rural Online | Gado, Cavalos, Fazendas — NC Brasil",
    description: "Plataforma completa para leilões rurais e agropecuários: bovinos, equinos, propriedades, maquinário. Transmissão HD, GTA automática, pesagem integrada, Pix e conta gráfica.",
    keywords: "sistema leilão rural, leilão de gado online, leilão de cavalos, plataforma leilão agropecuário, software leiloeiro rural, sistema leilão pecuária, leilão bovinos online",
    canonical: URL,
    h1: "Plataforma para Leilões Rurais e Agropecuários",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Leilão Rural", url: URL },
    ],
    faq: lpFaq,
    ogImage: "/og/leilao-rural.jpg",
  },)
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/sistemas", label: "Sistemas" }, { to: "/sistemas/sistema-de-leilao-rural", label: "Leilão Rural" }]}
      eyebrow="Agronegócio · Pecuária · Genética"
      h1={<>Plataforma completa para <span className="text-gradient">Leilões Rurais e Agropecuários</span></>}
      intro={<>A NC Brasil desenvolve o <strong className="text-foreground">software mais avançado do agronegócio brasileiro</strong> para leiloeiros rurais, cabanhas e associações de raça. Opere leilões de <strong className="text-foreground">bovinos, equinos, ovinos, propriedades e maquinário</strong> com transmissão HD, emissão automática de GTA, pesagem integrada e pagamento via Pix — tudo em uma plataforma proprietária, sem mensalidade abusiva.</>}
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
        title: <>A resposta é uma <span className="text-gradient">plataforma proprietária</span> feita para o campo</>,
        desc: <>Desde 2007 a NC Brasil constrói sistemas de leilão para <strong className="text-foreground">martelos oficiais, cabanhas e associações</strong>. Nosso software rural nasceu no tatersal — foi projetado com pregoeiros, veterinários e produtores para eliminar retrabalho, garantir conformidade sanitária e maximizar a arrematação por lote.</>,
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
        { name: "SIGSIF/MAPA", category: "Sanidade" },
        { name: "IDARON RO", category: "Defesa" },
        { name: "ADAPAR PR", category: "Defesa" },
        { name: "IAGRO MS", category: "Defesa" },
        { name: "IMA MG", category: "Defesa" },
        { name: "ABCZ", category: "Associação" },
        { name: "ABQM", category: "Associação" },
        { name: "ABCB Brahman", category: "Associação" },
        { name: "Pix (BCB)", category: "Pagamento" },
        { name: "WhatsApp Business", category: "Comunicação" },
        { name: "Canal Rural", category: "Mídia" },
        { name: "Compre Rural", category: "Mídia" },
        { name: "Balanças Toledo/Coimma", category: "Hardware" },
        { name: "Correios/Braspress", category: "Logística" },
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
      testimonials={[
        { quote: "Migramos do sistema anterior e reduzimos em 70% o retrabalho de emissão de GTA. O leilão agora fecha com boleto pago no mesmo dia via Pix.", author: "Ricardo Andrade", role: "Leiloeiro Oficial · MT" },
        { quote: "A transmissão HD e o áudio do pregoeiro fizeram nosso leilão de touros bater recorde de faturamento em 2024.", author: "Fazenda Guardião", role: "Cabanha PO · GO" },
        { quote: "Finalmente um sistema que entende de campo. GTA, TAG, vacina — tudo automático. Recomendo para qualquer leiloeiro sério.", author: "Marcelo Vasconcellos", role: "Associação de Criadores · MG" },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para operar o leilão rural mais <span className="text-gradient">tecnológico do agronegócio</span>?</>}
      finalCtaDesc={<>Fale com nossa equipe especializada em agro. Enviamos <strong className="text-foreground">demonstração ao vivo com dados reais</strong>, proposta técnica e cronograma personalizado.</>}
    />
  ),
});
