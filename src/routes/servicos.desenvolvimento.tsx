import { createFileRoute } from "@tanstack/react-router";
import { Code2, Cpu, GitBranch, Layers, Rocket, ShieldCheck, Terminal, Zap, Database, Cloud, Boxes, Workflow } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/desenvolvimento";

export const Route = createFileRoute("/servicos/desenvolvimento")({
  head: () => buildLPMeta({
    title: "Desenvolvimento de Software Sob Medida | Fábrica de Software",
    description: "Fábrica de software para desenvolvimento sob medida. Web, mobile, APIs e integrações com metodologia ágil e código de altíssima qualidade.",
    keywords: "desenvolvimento de software, fábrica de software, desenvolvimento sob medida, software personalizado, desenvolvimento ágil",
    canonical: URL,
    h1: "Desenvolvimento de Software Sob Medida",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Serviços", url: "https://www.ncbrasil.com.br/servicos" },
      { name: "Desenvolvimento", url: URL },
    ],
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-servicos", label: "Serviços" }, { to: "/servicos/desenvolvimento", label: "Desenvolvimento" }]}
      eyebrow="Fábrica de Software"
      h1={<>Desenvolvimento de <span className="text-gradient">software sob medida</span></>}
      intro={<>Squads dedicadas de **engenheiros sênior** para construir web, mobile e APIs com metodologia ágil, code review rigoroso e entregas semanais.</>}
      stats={[{ value: "1.200+", label: "Projetos entregues" }, { value: "20 anos", label: "De mercado" }, { value: "Squads", label: "Sênior dedicadas" }, { value: "Agile", label: "Scrum/Kanban" }]}
      benefits={[
        { icon: Code2, title: "Código de Qualidade", desc: "TypeScript, testes automatizados, **CI/CD e code review** em 100% dos commits." },
        { icon: Rocket, title: "Entregas Ágeis", desc: "**Sprints de 2 semanas** com demo, retrospectiva e roadmap sempre atualizado." },
        { icon: ShieldCheck, title: "Segurança OWASP", desc: "Práticas OWASP Top 10, secrets management e **pentest antes do go-live**." },
        { icon: Zap, title: "Performance A+", desc: "Arquitetura pensada para **escala** — cache, filas, workers e observabilidade." },
      ]}
      features={[
        { icon: Terminal, title: "Full-Stack Moderno", desc: "React, Next.js, TanStack, Node, TypeScript, Python, Go e Rust." },
        { icon: Database, title: "Bancos & Dados", desc: "PostgreSQL, MongoDB, Redis, Elasticsearch, **BigQuery e data lakes**." },
        { icon: Cloud, title: "Cloud Native", desc: "AWS, GCP, Azure, Cloudflare Workers, Docker, Kubernetes e Terraform." },
        { icon: Layers, title: "Microsserviços", desc: "Arquiteturas distribuídas com **event-driven, gRPC e message brokers**." },
        { icon: GitBranch, title: "DevOps Contínuo", desc: "GitHub Actions, GitLab CI, monitoramento com Datadog/Grafana." },
        { icon: Workflow, title: "Integrações", desc: "APIs REST/GraphQL, webhooks, ERPs, CRMs, **pagamentos e ML**." },
      ]}
      faq={[
        { q: "Como funcionam as squads?", a: "**PO, Tech Lead, Dev(s), QA e DevOps** dedicados exclusivamente ao seu projeto." },
        { q: "Vocês assinam NDA?", a: "Sim, **NDA e contrato de confidencialidade** padrão em todos os projetos." },
        { q: "Código fica comigo?", a: "Sim, **você tem propriedade total do código** e do repositório desde o dia 1." },
        { q: "Qual metodologia?", a: "**Scrum ou Kanban**, com Jira/Linear, dailys e demos semanais." },
        { q: "Qual o modelo comercial?", a: "**Escopo fechado ou body shop** por sprint — o que fizer sentido para o projeto." },
      ]}
    />
  ),
});
