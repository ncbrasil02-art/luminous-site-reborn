import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Code2, 
  Globe2, 
  Layers, 
  Cpu, 
  MessageSquare, 
  CheckCircle2, 
  Database, 
  Zap, 
  ShieldCheck, 
  Layout, 
  Terminal,
  ChevronRight,
  HelpCircle,
  BarChart3,
  ShoppingBag
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { buildStubMeta } from "@/components/StubPage";
import { Card, CardContent } from "@/components/ui/card";

const URL = "https://www.ncbrasil.com.br/solucoes-web";

export const Route = createFileRoute("/solucoes-web/")({
  head: () => buildStubMeta({
    title: "Soluções Web | Sites, Lojas Virtuais, SEO e Hospedagem — NC Brasil",
    description: "Soluções web completas: criação de sites, landing pages de alta conversão, lojas virtuais, SEO no Google, marketing digital e hospedagem em servidores dedicados.",
    keywords: "soluções web, criação de sites, landing pages, loja virtual, seo google, marketing digital, hospedagem de sites",
    canonical: URL,
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Soluções Web", to: URL },
    ],
  }),
  component: SolucoesWebPage,
});

function SolucoesWebPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        
        <div className="container mx-auto px-4 text-center md:px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <Zap className="h-3.5 w-3.5" />
              Tecnologia de Alta Performance
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
              Plataformas Digitais que <br />
              <span className="text-gradient">Escalam o seu Negócio</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-xl">
              Desenvolvemos soluções web personalizadas, unindo <strong>engenharia de software robusta</strong> com 
              <strong>design focado em conversão</strong> para transformar sua visão em realidade digital.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/orcamento"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground glow-sm hover:scale-105 transition-all"
              >
                Solicitar orçamento gratuito
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/trabalhos-realizados"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-8 py-4 text-sm font-semibold backdrop-blur hover:bg-surface transition-colors"
              >
                Ver cases de sucesso
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="O que entregamos"
            title="Especialidades em Desenvolvimento Web"
            description="Desde sites institucionais a sistemas complexos de gestão, temos o stack tecnológico ideal para o seu desafio."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Layout,
                title: "Criação de LPs Alta Conversão",
                desc: "Landing Pages persuasivas focadas em captação de leads e vendas.",
                features: ["Mobile first", "SEO Técnico", "Alta velocidade"],
                to: "/solucoes-web/landing-pages"
              },
              {
                icon: Database,
                title: "Sistemas Web Personalizados",
                desc: "ERPs, CRMs e intranets sob medida para os processos da sua empresa.",
                features: ["Dashboards", "Automação", "Segurança"],
                to: "/servicos/sistemas-web"
              },
              {
                icon: Globe2,
                title: "E-commerce & Marketplaces",
                desc: "Lojas virtuais escaláveis com foco em experiência de compra e segurança.",
                features: ["Pagamentos", "Frete", "Painel Administrativo"],
                to: "/solucoes-web/loja-virtual"
              },
              {
                icon: Layers,
                title: "Hospedagem de Sites e Cloud",
                desc: "Infraestrutura robusta com servidores dedicados no Brasil.",
                features: ["Webhook", "REST/GraphQL", "Sync em tempo real"],
                to: "/solucoes-web/hospedagem"
              },
              {
                icon: BarChart3,
                title: "SEO Google & Ranqueamento",
                desc: "Autoridade e primeiras posições para palavras-chave estratégicas.",
                features: ["Gráficos dinâmicos", "Filtros avançados", "Exportação"],
                to: "/solucoes-web/seo-google"
              },
              {
                icon: ShieldCheck,
                title: "Marketing Digital & Social Ads",
                desc: "Gestão de tráfego pago e conteúdos virais para redes sociais.",
                features: ["Backups", "Updates", "Monitoramento"],
                to: "/solucoes-web/marketing-digital"
              }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <Link to={item.to} className="group block h-full">
                  <div className="h-full rounded-none border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm">
                    <div className="mb-6 inline-flex rounded-none bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {item.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <SectionHeading
              align="left"
              eyebrow="Casos de Uso"
              title={<>Onde nossas <span className="text-gradient">soluções</span> se aplicam</>}
              description="Cenários reais onde a tecnologia NC Brasil transforma negócios e otimiza operações."
              className="max-w-2xl mb-0"
            />
            <Link to="/trabalhos-realizados" className="group hidden md:flex items-center gap-2 text-primary font-semibold hover:underline">
              Ver portfólio completo
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                title: "Transformação Digital Corporativa",
                scenario: "Empresas que ainda dependem de planilhas e processos manuais.",
                solution: "Criamos sistemas integrados que centralizam informações, automatizam tarefas repetitivas e oferecem relatórios precisos para a diretoria.",
                icon: Terminal
              },
              {
                title: "Expansão de Vendas Online",
                scenario: "Negócios locais ou B2B que precisam vender em escala nacional.",
                solution: "Desenvolvemos e-commerces e portais de pedidos com checkout otimizado, integrados ao estoque e logística para uma operação fluida.",
                icon: ShoppingBag
              }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <Card className="border-border bg-card/50 overflow-hidden group hover:border-primary/30 transition-colors rounded-none">
                  <CardContent className="p-0 flex flex-col sm:flex-row h-full">
                    <div className="p-8 flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <h4 className="font-display text-lg font-bold">{item.title}</h4>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Cenário</p>
                          <p className="text-sm text-muted-foreground">{item.scenario}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Nossa Solução</p>
                          <p className="text-sm text-foreground/90">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US / MARKETING */}
      <section className="py-24 border-y border-border bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Por que escolher a <span className="text-gradient">NC Brasil</span> para o seu projeto?
              </h2>
              <p className="mt-6 text-muted-foreground md:text-lg">
                Não somos apenas desenvolvedores; somos parceiros estratégicos. Nosso foco é construir 
                ferramentas que paguem o próprio investimento através de eficiência e vendas.
              </p>
              
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Stack Moderno & Escalável",
                    desc: "Usamos tecnologias como React, Next.js, Node.js e Cloud Hosting para garantir que seu site suporte de 10 a 1 milhão de usuários."
                  },
                  {
                    title: "Foco Total em UX/UI",
                    desc: "Design centrado no usuário para reduzir a curva de aprendizado e aumentar a satisfação de quem utiliza a plataforma."
                  },
                  {
                    title: "Suporte Proativo",
                    desc: "Não te deixamos na mão após o lançamento. Oferecemos monitoramento constante e melhorias contínuas."
                  }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
                <div className="relative rounded-none border border-border bg-background p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pronto para começar?</p>
                      <p className="text-lg font-bold">Fale com um especialista</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "Entendemos que cada negócio tem uma necessidade única. Agende uma reunião 
                      de 15 minutos para discutirmos como a tecnologia pode resolver seus desafios atuais."
                    </p>
                    <Link
                      to="/contato"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-foreground text-background px-6 py-4 text-sm font-semibold hover:bg-foreground/90 transition-colors"
                    >
                      Agendar Consultoria Grátis
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Dúvidas Frequentes"
            description="Tudo o que você precisa saber sobre como trabalhamos."
          />

          <Reveal delay={0.2} className="mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "Quanto tempo demora para desenvolver um sistema web?",
                  a: "O tempo varia conforme a complexidade. Uma Landing Page pode ficar pronta em 10 dias, enquanto um sistema ERP complexo pode levar de 3 a 6 meses. Após o briefing inicial, entregamos um cronograma detalhado."
                },
                {
                  q: "As soluções são responsivas (funcionam em celular)?",
                  a: "Sim, absolutamente. Todos os nossos projetos são desenvolvidos seguindo a metodologia 'Mobile-First', garantindo uma experiência perfeita em smartphones, tablets e desktops."
                },
                {
                  q: "Vocês fazem integração com outros softwares que já utilizo?",
                  a: "Sim. Podemos integrar sua nova plataforma com CRMs (Salesforce, Hubspot), Gateways de Pagamento (Stripe, Pagar.me), ERPs e APIs de terceiros para garantir que os dados fluam entre seus sistemas."
                },
                {
                  q: "Como funciona a manutenção após o projeto ser entregue?",
                  a: "Oferecemos planos de suporte e manutenção mensal que incluem atualizações de segurança, backups, correções de bugs e pequenas melhorias evolutivas, garantindo que seu sistema nunca fique obsoleto."
                },
                {
                  q: "Eu serei o dono do código-fonte do sistema?",
                  a: "Sim. Ao final do projeto e quitação dos valores, a propriedade intelectual e o código-fonte pertencem ao cliente. Não prendemos nossos clientes com licenças de uso proprietárias."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-none border-border bg-card px-6">
                  <AccordionTrigger className="hover:no-underline text-left font-bold py-6">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      {faq.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 bg-primary/5" />
        <div className="container mx-auto px-4 text-center md:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Vamos construir o seu <br />
              <span className="text-gradient">próximo sucesso digital?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
              Deixe a tecnologia por nossa conta e foque no que você faz de melhor: gerir o seu negócio.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/orcamento"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-10 py-5 text-base font-bold text-primary-foreground glow-md hover:scale-105 transition-all"
              >
                Solicitar Proposta Comercial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-10 py-5 text-base font-bold hover:bg-background transition-colors"
              >
                Falar pelo WhatsApp
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

