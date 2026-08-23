import av1 from "@/assets/avatars/avatar-1.webp.asset.json";
import av2 from "@/assets/avatars/avatar-2.webp.asset.json";
import av3 from "@/assets/avatars/avatar-3.webp.asset.json";
import av4 from "@/assets/avatars/avatar-4.webp.asset.json";
import av5 from "@/assets/avatars/avatar-5.webp.asset.json";
import av6 from "@/assets/avatars/avatar-6.webp.asset.json";
import av7 from "@/assets/avatars/avatar-7.webp.asset.json";
import av8 from "@/assets/avatars/avatar-8.webp.asset.json";
import av9 from "@/assets/avatars/avatar-9.webp.asset.json";

export interface SocialProofConfig {
  mainText: string;
  phrases: string[];
  avatars?: string[];
}

const defaultAvatars = [
  av1.url, av2.url, av3.url, av4.url, av5.url, av6.url, av7.url, av8.url, av9.url,
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop",
];

export const socialProofData: Record<string, SocialProofConfig> = {
  default: {
    mainText: "Aprovado por mais de 1.500 empresas",
    phrases: [
      "pessoas que assinaram com a NC Brasil estão prosperando em suas plataformas",
      "Líder em sistemas de alta performance no Brasil",
      "Tecnologia premium para leilões, rifas e iGaming",
      "Escalabilidade garantida para grandes volumes de acessos",
    ],
    avatars: defaultAvatars
  },
  "sistema-de-leilao": {
    mainText: "Líder em Leilões Online no Brasil",
    phrases: [
      "Sistemas homologados e seguros para leiloeiros",
      "Mais de 500 plataformas de leilão ativas",
      "Suporte técnico especializado 7 dias por semana",
      "Integração total com meios de pagamento",
    ],
    avatars: defaultAvatars
  },
  "sistema-de-rifas": {
    mainText: "O sistema de rifas mais vendido do país",
    phrases: [
      "Rifas com hora premiada e títulos de capitalização",
      "Milhares de sorteios realizados com sucesso",
      "Painel administrativo intuitivo e completo",
      "Alta conversão para campanhas de marketing",
    ],
    avatars: defaultAvatars
  },
  "noticias": {
    mainText: "A maior revista de tecnologia para sistemas do Brasil",
    phrases: [
      "Atualizações diárias sobre o mercado de leilões e iGaming",
      "Mais de 260 artigos técnicos e estratégicos",
      "Tendências de Inteligência Artificial e Automação",
      "Insights exclusivos para escalar seu negócio digital",
    ],
    avatars: defaultAvatars
  },
  "solucoes-web/marketing-digital": {
    mainText: "Expertise em Marketing de Performance",
    phrases: [
      "Estratégias de growth hacking para SaaS e E-commerce",
      "Gestão profissional de tráfego pago (Google/Meta Ads)",
      "Aumento real na taxa de conversão de leads",
      "Relatórios detalhados de ROI e performance mensal",
    ],
    avatars: defaultAvatars
  },
  "solucoes-web/desenvolvimento-de-sites": {
    mainText: "Sites Modernos e Focados em Conversão",
    phrases: [
      "Design minimalista com performance de carregamento",
      "Sites 100% responsivos e otimizados para Mobile",
      "Arquitetura da informação planejada para o usuário",
      "Integração com CRMs e ferramentas de automação",
    ],
    avatars: defaultAvatars
  }
};


