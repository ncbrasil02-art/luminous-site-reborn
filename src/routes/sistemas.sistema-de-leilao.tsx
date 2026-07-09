import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck, Banknote, Bell, Building2, Clock, FileSignature, Gavel, Globe2, Lock, ShieldCheck, Users, Video,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/sistema-de-leilao";

const lpFaq = [
        { q: "O sistema atende leilões judiciais?", a: "Sim. Atendemos **leilões judiciais e extrajudiciais** com edital, publicações e integração para juntas oficiais." },
        { q: "Vocês oferecem transmissão ao vivo?", a: "Sim. Streaming em HD com **cronômetro sincronizado**, chat e histórico gravado do pregão." },
        { q: "Como funciona o cálculo de comissão?", a: "Configuramos por leilão: **comissão do leiloeiro, taxa administrativa e ITBI** são calculados automaticamente." },
        { q: "É possível personalizar a identidade visual?", a: "Sim. Todo o sistema é **white-label** — cores, logotipo, domínio próprio e edital personalizado." },
        { q: "Qual o prazo de implantação?", a: "A implantação típica leva de **30 a 60 dias**, incluindo treinamento e leilão-piloto." },
      ];

export const Route = createFileRoute("/sistemas/sistema-de-leilao")({
  head: () => buildLPMeta({
    title: "Sistema de Leilão Online | Plataforma Completa — NC Brasil",
    description: "Sistema profissional para leilões judiciais e extrajudiciais: cadastro de lotes, lances online e presenciais, transmissão ao vivo, split de comissões e conformidade legal.",
    keywords: "sistema de leilão, plataforma de leilão online, leilão judicial, leilão extrajudicial, software para leiloeiro, sistema de leilão eletrônico",
    canonical: URL,
    h1: "Sistema Profissional para Leilões Judiciais e Extrajudiciais",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Sistema de Leilão", url: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/sistemas", label: "Sistemas" },
        { to: "/sistemas/sistema-de-leilao", label: "Sistema de Leilão" },
      ]}
      eyebrow="Sistema de Leilão"
      h1={<>Plataforma Completa para <span className="text-gradient">Leilões Online</span></>}
      intro={<>Solução robusta para <strong className="text-foreground">leiloeiros oficiais</strong>, tribunais e empresas: gestão de lotes, lances simultâneos online e presenciais, transmissão ao vivo e total conformidade com o <strong className="text-foreground">Decreto 21.981/32</strong> e o <strong className="text-foreground">CPC</strong>.</>}
      stats={[
        { value: "500K+", label: "Lances processados" },
        { value: "99.9%", label: "Uptime garantido" },
        { value: "24/7", label: "Monitoramento" },
        { value: "100%", label: "Conformidade legal" },
      ]}
      benefits={[
        { icon: Gavel, title: "Multi-modalidade", desc: "Leilões **judiciais, extrajudiciais, rurais e de arte** em uma única plataforma unificada." },
        { icon: ShieldCheck, title: "Segurança Jurídica", desc: "Assinatura digital, **logs auditáveis** e certificação de todos os lances conforme legislação." },
        { icon: Video, title: "Transmissão ao Vivo", desc: "Streaming HD integrado com **cronômetro de lances** e chat moderado em tempo real." },
        { icon: Globe2, title: "Alcance Nacional", desc: "SEO técnico e integrações com **portais oficiais** para atrair arrematantes de todo o Brasil." },
      ]}
      features={[
        { icon: FileSignature, title: "Cadastro de Lotes Rico", desc: "Múltiplas fotos, vídeos, laudos, matrículas e edital anexos por lote." },
        { icon: Users, title: "Gestão de Arrematantes", desc: "Habilitação com KYC, upload de documentos e aprovação por lote." },
        { icon: Bell, title: "Lances Automáticos", desc: "Lance máximo pré-programado, notificações push, e-mail e SMS." },
        { icon: Banknote, title: "Comissões e Pagamentos", desc: "Cálculo automático de comissão, taxa e split para leiloeiro." },
        { icon: Clock, title: "Prorrogação Anti-Sniping", desc: "Extensão automática do prazo quando há lance nos últimos segundos." },
        { icon: Lock, title: "LGPD & Conformidade", desc: "Trilha de auditoria completa, backups e política de retenção." },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para <span className="text-gradient">digitalizar seus leilões</span>?</>}
    />
  ),
});
