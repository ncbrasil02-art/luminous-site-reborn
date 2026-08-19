import { createFileRoute } from "@tanstack/react-router";
import {
  Banknote, BarChart3, Bell, Building2, Clock, Coins, CreditCard,
  FileCheck, Gift, Globe, Layers, Lock, MessageCircle, Palette,
  Rocket, ScanLine, ShieldCheck, ShoppingBag, Smartphone, Sparkles,
  Ticket, Trophy, Users, Wallet, Zap,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistema-de-rifas";

export const lpFaq = [
  { q: "É seguro e legal criar rifa online no Brasil?", a: "Sim. Existem **três caminhos legais** que orientamos você a adotar: **título de capitalização** (via seguradora parceira), **promoção comercial autorizada pela SECAP/Ministério da Fazenda** ou **rifa filantrópica de associação/ONG sem fins lucrativos**. O sistema já vem preparado com **termos, regulamento gerado automaticamente e prestação de contas transparente**." },
  { q: "Como funciona o sorteio pela Loteria Federal?", a: "Definimos a extração da Loteria Federal (concurso, data) e o sistema **converte as 5 dezenas premiadas em uma cota vencedora** conforme regra escolhida (dezena por dezena, cota unificada, milhar invertida etc.). O resultado é **público, auditável e imutável** com hash blockchain." },
  { q: "Preciso pagar taxa por cota vendida ou comissão sobre a arrecadação?", a: "**Não. Diferente do Rifei, Rifana e Rifafy que cobram taxa por cota ou % sobre vendas**, na NC Brasil o sistema é **seu, com licença perpétua ou mensalidade fixa**. Você fica com **100% da arrecadação** e paga apenas a taxa do gateway de pagamento (Pix ~R$0,10)." },
  { q: "Quantas cotas posso vender por rifa?", a: "De **100 a 10 milhões de cotas** por campanha, com valor livre de R$0,10 a R$1.000. Suporta rifas com **cotas premiadas instantâneas**, ranking de maiores compradores e cotas bônus." },
  { q: "Aceita Pix instantâneo? E cartão de crédito parcelado?", a: "Sim. **Pix com liberação em <10 segundos** via webhook (Mercado Pago, Efí, PagBank, Pagar.me, Iugu, Asaas). Cartão de crédito **parcelado em até 12x** e boleto opcional. **Split automático** entre organizador, afiliados e plataforma." },
  { q: "Existe app para o participante?", a: "Sim, **PWA + aplicativo nativo iOS/Android** com sua marca (white label). O participante recebe **notificação push do sorteio, resultado, cotas premiadas e novas campanhas**." },
  { q: "Como evitam fraudes e cotas duplicadas?", a: "Cada cota gera **hash único e imutável** registrado em log público. O sistema tem **antifraude com device fingerprint, blacklist de CPF, limite por CPF/dispositivo, KYC opcional** e verificação de titularidade Pix." },
  { q: "Consigo criar rifas beneficentes para minha ONG?", a: "Sim. Temos modelo específico para **associações, igrejas e ONGs** com relatório de prestação de contas, comprovante de doação e **isenção fiscal quando cabível**. Já entregamos plataformas para campanhas beneficentes de mais de R$500 mil." },
  { q: "Qual o prazo de entrega e como funciona a implantação?", a: "**7 a 15 dias úteis** para versão white label pronta com sua marca, domínio e gateway. Customizações profundas (novos módulos, integrações específicas) levam de **30 a 60 dias**." },
  { q: "Vocês fazem hospedagem e suporte?", a: "Sim, entregamos **hospedagem cloud escalável (AWS/Cloudflare), CDN global, backup diário, SSL, monitoramento 24/7 e suporte técnico** por WhatsApp e ticket." },
  { q: "É possível ter afiliados vendendo minhas rifas?", a: "Sim, **módulo de afiliados nativo** com link único, cupom personalizado, painel de vendas, **comissão configurável e saque automático via Pix**." },
  { q: "Posso vender cotas em combos ou com desconto progressivo?", a: "Sim. Configure combos **'leve 10 pague 8'**, desconto progressivo, cotas bônus por indicação, cashback e **cupom promocional** por cliente ou por rifa." },
];

export const Route = createFileRoute("/sistema-de-rifas")({
  head: () => buildLPMeta({
    title: "Sistema de Rifas Online | Criar Rifa Legalizada com Pix — NC Brasil",
    description: "Plataforma completa para criar rifa online legalizada: sorteio pela Loteria Federal, Pix instantâneo, cotas ilimitadas, sem taxa por cota, app do participante e painel do organizador. 15 anos de experiência.",
    keywords: "sistema de rifas online, criar rifa online, plataforma de rifas, sistema para rifas, site de rifas, como criar uma rifa online, rifa online com pix, rifa loteria federal, script de rifas, sistema de sorteios",
    canonical: URL,
    h1: "Sistema de Rifas Online",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Sistemas", to: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { label: "Sistema de Rifas", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/sistema-de-rifas", label: "Sistema de Rifas" },
      ]}
      subtitle="Rifas Online · Legalizadas · Pix Instantâneo"
      h1={<>Sistema para <span className="text-gradient">Criar Rifa Online</span> — Legalizado, Escalável e Sem Taxa por Cota</>}
      intro={<>Plataforma <strong className="text-foreground">turnkey</strong> para você <strong className="text-foreground">criar rifa online legalizada</strong> com sorteio pela <strong className="text-foreground">Loteria Federal</strong>, cotas de R$0,10 a R$1.000, <strong className="text-foreground">Pix em segundos</strong>, aplicativo iOS/Android e painel completo. <strong className="text-foreground">15 anos de mercado</strong>, mais de <strong className="text-foreground">50 milhões de cotas vendidas</strong> e clientes que faturam <strong className="text-foreground">R$500k por rifa</strong>. Diferente de Rifei, Rifana e Rifafy: <strong className="text-foreground">licença própria, sem % sobre vendas — você fica com 100% da arrecadação</strong>.</>}
      stats={[
        { value: "50Mi+", label: "Cotas vendidas" },
        { value: "3.000+", label: "Rifas realizadas" },
        { value: "R$500k", label: "Ticket médio por rifa" },
        { value: "0%", label: "Taxa sobre vendas" },
      ]}
      clients={["Ativ Rifas", "Rifa da Sorte BR", "Sorte Premiada", "Rifa Solidária", "Meu Prêmio", "GO Rifas", "Rifa VIP", "Sorteios Brasil"]}
      problem={{
        title: <>Plataformas de rifa cobram <span className="text-destructive">até 8% sobre cada cota vendida</span></>,
        items: [
          "**Rifei, Rifana e Rifafy cobram % sobre TUDO que você arrecada** — em uma rifa de R$100 mil, você paga R$8 mil só de taxa da plataforma.",
          "Você **não é dono do seu domínio, dos seus clientes nem do banco de dados** — se a plataforma sai do ar, você perde o negócio inteiro.",
          "**Limitações de personalização**: layout engessado, sem app próprio, sem controle de identidade visual.",
          "**Insegurança jurídica**: sistemas genéricos não orientam sobre o modelo legal correto (título de capitalização, SECAP ou filantropia).",
          "**Falta de app nativo iOS/Android** com sua marca — o participante nunca lembra de você.",
          "**Suporte terceirizado, sem SLA, respostas em dias** — em pleno sorteio, você fica na mão.",
        ],
      }}
      solution={{
        title: <>Sua rifa, <span className="text-gradient">seu domínio, sua marca, 100% do lucro</span></>,
        desc: <>Entregamos a <strong className="text-foreground">plataforma completa em seu nome</strong>: código-fonte licenciado, hospedagem própria, app iOS/Android com sua marca na loja, gateway Pix direto na sua conta e <strong className="text-foreground">zero comissão sobre vendas</strong>. Nossa equipe orienta o modelo legal ideal, integra o gateway certo e <strong className="text-foreground">acompanha sua operação por 12 meses</strong>. Você concentra em vender — nós cuidamos da tecnologia.</>,
        highlights: [
          "**Licença perpétua ou mensalidade fixa** — sem % sobre vendas",
          "**App iOS + Android** publicado com sua marca",
          "**Sorteio pela Loteria Federal** com hash blockchain",
          "**Pix instantâneo** liberado em <10 segundos",
          "**Orientação legal completa** — modelo SECAP, capitalização ou filantropia",
          "**Suporte técnico 24/7** por WhatsApp e ticket",
          "**Cotas ilimitadas** — de 100 a 10 milhões por campanha",
          "**Módulo de afiliados** com comissão automática",
        ],
      }}
      benefits={[
        { icon: Trophy, title: "Sorteio Loteria Federal", desc: "Extração oficial pela **Loteria Federal ou por cota premiada instantânea** — hash público e auditável para cada bilhete." },
        { icon: Banknote, title: "Pix em Segundos", desc: "Reserva, **pagamento e liberação da cota em <10s** via webhook do PSP. Sem intermediário, dinheiro cai direto na sua conta." },
        { icon: FileCheck, title: "Conformidade Legal", desc: "Modelos prontos de **título de capitalização, SECAP ou associação sem fins lucrativos** — orientamos qual usar." },
        { icon: ShieldCheck, title: "Cotas Auditáveis", desc: "Cada bilhete gera **hash imutável em blockchain** — o comprador confere sua cota antes do sorteio." },
      ]}
      features={[
        { icon: ShoppingBag, title: "Cotas Ilimitadas", desc: "De **100 a 10 milhões de cotas** por rifa, valor livre de R$0,10 a R$1.000, com cotas premiadas aleatórias." },
        { icon: Wallet, title: "Múltiplos Meios de Pagamento", desc: "**Pix, cartão em até 12x, boleto** e crédito de cotas anteriores. Split automático entre organizador e afiliados." },
        { icon: Gift, title: "Combos & Desconto Progressivo", desc: "**Leve 10 pague 8, leve 50 pague 30** — sistema de combos dinâmicos com cotas bônus grátis." },
        { icon: Users, title: "Ranking de Compradores", desc: "**Top compradores** com prêmio extra automático e ranking em tempo real na página da rifa." },
        { icon: Smartphone, title: "App do Participante", desc: "**iOS + Android nativo** com sua marca, notificação push do sorteio, minhas cotas e histórico." },
        { icon: BarChart3, title: "Dashboard do Organizador", desc: "**Vendas em tempo real, conciliação bancária, curva de arrecadação** e saque automático." },
        { icon: MessageCircle, title: "WhatsApp Integrado", desc: "**Click-to-WhatsApp** em cada rifa, envio automático do comprovante e lembrete do sorteio." },
        { icon: Palette, title: "Identidade Visual Própria", desc: "Cores, logo, domínio, tipografia — **100% white label**, sua marca do início ao fim." },
        { icon: Globe, title: "Domínio Próprio + SSL", desc: "Seu domínio `.com.br` com **certificado SSL grátis, CDN global e cache** para carregamento instantâneo." },
      ]}
      modules={[
        {
          icon: Ticket,
          title: "Módulo Rifas",
          items: [
            "Criação ilimitada de campanhas",
            "Cotas premiadas instantâneas",
            "Sorteio Loteria Federal automatizado",
            "Regulamento gerado automaticamente",
            "Galeria de fotos e vídeos do prêmio",
          ],
        },
        {
          icon: Users,
          title: "Módulo Afiliados",
          items: [
            "Link único por afiliado",
            "Cupom personalizado com desconto",
            "Comissão configurável por rifa",
            "Painel de vendas do afiliado",
            "Saque automático via Pix",
          ],
        },
        {
          icon: Wallet,
          title: "Módulo Pagamentos",
          items: [
            "Pix instantâneo com webhook",
            "Cartão parcelado em até 12x",
            "Boleto bancário",
            "Split entre organizador e afiliados",
            "Conciliação bancária automática",
          ],
        },
        {
          icon: BarChart3,
          title: "Módulo Analytics",
          items: [
            "Vendas em tempo real",
            "Curva de arrecadação por rifa",
            "Top compradores e afiliados",
            "Origem de tráfego (UTM)",
            "Exportação CSV/Excel",
          ],
        },
        {
          icon: Bell,
          title: "Módulo Marketing",
          items: [
            "Notificação push nativa",
            "E-mail transacional",
            "WhatsApp Business API",
            "SMS de lembrete do sorteio",
            "Campanhas segmentadas",
          ],
        },
        {
          icon: ShieldCheck,
          title: "Módulo Antifraude",
          items: [
            "Device fingerprint",
            "Limite de cotas por CPF",
            "Blacklist e validação de titularidade Pix",
            "KYC opcional (biometria facial)",
            "Log de ações imutável",
          ],
        },
      ]}
      useCases={[
        { icon: Building2, title: "Empreendedor de Rifas", desc: "Organizador profissional que **vende rifas de carro, moto, eletrônicos e Pix** — busca escala e margem." },
        { icon: Sparkles, title: "Influenciador Digital", desc: "Criador com audiência que quer **monetizar via rifas** com sua marca e app próprio nas lojas." },
        { icon: Trophy, title: "Concessionária & Revenda", desc: "Rifas de **veículos novos e seminovos** com integração de estoque e financiamento pós-sorteio." },
        { icon: Users, title: "ONGs e Associações", desc: "Rifas **filantrópicas com prestação de contas transparente** e comprovante de doação." },
        { icon: ShoppingBag, title: "E-commerce & Varejo", desc: "Rifas como **estratégia de aquisição** — desova de estoque com margem maior que Black Friday." },
        { icon: Rocket, title: "Startups & Marketplaces", desc: "Plataformas SaaS que querem entrar no **mercado de rifas white label** com marca própria." },
      ]}
      integrations={[
        { label: "Mercado Pago", category: "Pix / Cartão" },
        { label: "Pagar.me", category: "Pix / Split" },
        { label: "Efí (Gerencianet)", category: "Pix" },
        { label: "PagBank", category: "Pix / Cartão" },
        { label: "Iugu", category: "Boleto / Split" },
        { label: "Asaas", category: "Cobrança" },
        { label: "WhatsApp Business", category: "Comunicação" },
        { label: "Google Analytics 4", category: "Analytics" },
        { label: "Meta Pixel", category: "Ads" },
        { label: "TikTok Pixel", category: "Ads" },
        { label: "Google Tag Manager", category: "Tags" },
        { label: "Loteria Federal API", category: "Sorteio" },
        { label: "Serpro/CPF", category: "KYC" },
        { label: "Melhor Envio", category: "Logística" },
        { label: "Correios", category: "Logística" },
        { label: "Zendesk", category: "Suporte" },
      ]}
      security={[
        { icon: Lock, title: "LGPD Compliant", desc: "**Consentimento granular, portabilidade de dados, DPO parceiro** e política de privacidade auditada." },
        { icon: ShieldCheck, title: "PCI-DSS", desc: "**Cartão nunca trafega pelo servidor** — tokenização direta no PSP e infraestrutura auditada." },
        { icon: ScanLine, title: "KYC + Antifraude", desc: "**Biometria facial, validação CPF/Serpro e device fingerprint** com engine antifraude proprietário." },
        { icon: FileCheck, title: "Hash Blockchain", desc: "Cada cota registra **hash SHA-256 timestamped** — impossível alterar depois de vendida." },
      ]}
      timeline={[
        { step: "Semana 1", title: "Kickoff & Design", desc: "Reunião de descoberta, definição de escopo, **coleta de identidade visual, orientação legal** e wireframes aprovados." },
        { step: "Semana 2", title: "Setup Técnico", desc: "Provisionamento da infra, **domínio + SSL, gateway integrado, branding aplicado** e ambiente de homologação." },
        { step: "Semana 3", title: "Homologação & Testes", desc: "Testes de carga, **teste do fluxo Pix, sorteio simulado, treinamento do time** e ajustes finais." },
        { step: "Semana 4", title: "Go-Live", desc: "**Publicação em produção, submissão do app nas lojas iOS/Android, primeira rifa ativa** e monitoramento assistido 24/7." },
        { step: "Mês 2 em diante", title: "Suporte & Evolução", desc: "Sprint de melhorias mensais, **relatório de performance, novos módulos** e suporte técnico contínuo." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "Rifei / Rifana / Rifafy",
        rows: [
          { feature: "Taxa sobre vendas", us: "0%", them: "3% a 8%" },
          { feature: "Domínio próprio", us: true, them: false },
          { feature: "App iOS/Android com sua marca", us: true, them: false },
          { feature: "Código-fonte licenciado", us: true, them: false },
          { feature: "Pix cai direto na sua conta", us: true, them: "Retenção 1-3 dias" },
          { feature: "Cotas ilimitadas (até 10 milhões)", us: true, them: "Limite por plano" },
          { feature: "Sorteio Loteria Federal + hash blockchain", us: true, them: "Parcial" },
          { feature: "Módulo de afiliados nativo", us: true, them: false },
          { feature: "Orientação legal (SECAP/capitalização)", us: true, them: false },
          { feature: "Suporte técnico 24/7 dedicado", us: true, them: "E-mail/ticket" },
          { feature: "Customização profunda", us: true, them: false },
          { feature: "Multi-tenant (múltiplas marcas)", us: true, them: false },
        ],
      }}
      testimonials={[
        { quote: "Migramos do Rifei para a plataforma NC e economizamos R$40 mil em taxas no primeiro trimestre. Além disso, agora somos donos do banco de dados dos nossos clientes.", author: "Rodrigo Almeida", role: "Ativ Rifas · SP" },
        { quote: "O sorteio pela Loteria Federal com hash blockchain deu credibilidade absurda. Nossa taxa de conversão triplicou.", author: "Luana Ferreira", role: "Sorte Premiada · MG" },
        { quote: "Em 6 meses vendemos mais de 2 milhões de cotas. O app nativo iOS/Android publicado com nossa marca foi um divisor.", author: "Marcelo Torres", role: "GO Rifas · GO" },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para criar sua <span className="text-gradient">plataforma de rifas</span>?</>}
      finalCtaDesc={<>Receba um <strong className="text-foreground">plano personalizado em 24h</strong> com escopo, prazo, valor e o modelo legal ideal para sua operação. <strong className="text-foreground">Consultoria inicial gratuita</strong>.</>}
      relatedNewsTags={["Rifas","Sorteios","Sistemas"]}
    />
  ),
});
