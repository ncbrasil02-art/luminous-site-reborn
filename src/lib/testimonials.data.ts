import irina from "@/assets/testimonials/irina.jpg.asset.json";
import cinthia from "@/assets/testimonials/cinthia.jpg.asset.json";
import nico from "@/assets/testimonials/nico.jpg.asset.json";
import cale from "@/assets/testimonials/cale.jpg.asset.json";
import hugo from "@/assets/testimonials/hugo.jpg.asset.json";
import carla from "@/assets/testimonials/carla.jpg.asset.json";
import cecilia from "@/assets/testimonials/cecilia.jpg.asset.json";
import eder from "@/assets/testimonials/eder.jpg.asset.json";

export const testimonialsData = [
  {
    quote: "Migramos do papel para a plataforma da NC Brasil e triplicamos o número de arrematantes em 6 meses. O suporte durante o pregão é impecável.",
    author: "Dr. Carlos Andrade",
    role: "Leiloeiro Oficial — SP",
    image: (carla as any).url,
    rating: 5
  },
  {
    quote: "A conformidade com o CPC e a assinatura ICP-Brasil eliminaram nossas contestações judiciais. Recomendo para qualquer tribunal.",
    author: "Juíza Marina Ferreira",
    role: "Vara Cível — MG",
    image: (irina as any).url,
    rating: 5
  },
  {
    quote: "O split automático e a integração com nosso ERP economizaram 40 horas/mês do time financeiro. ROI em 3 meses.",
    author: "Rafael Costa",
    role: "CFO — Cooperativa Rural",
    image: (hugo as any).url,
    rating: 5
  },
  {
    quote: "A interface intuitiva e a velocidade do sistema de lances em tempo real mudaram o patamar da nossa casa de leilões.",
    author: "Cinthia Fernandez",
    role: "Diretora de Operações",
    image: (cinthia as any).url,
    rating: 5
  },
  {
    quote: "Tecnologia de ponta. Conseguimos expandir nossos leilões para todo o Brasil com segurança e total transparência nos processos.",
    author: "Nico Lorenzon",
    role: "Empresário do Agronegócio",
    image: (nico as any).url,
    rating: 5
  },
  {
    quote: "O app mobile é fantástico. Nossos arrematantes elogiam a facilidade de dar lances de qualquer lugar com apenas um toque.",
    author: "Valentina Ruggeri",
    role: "Leiloeira e Perita",
    image: (cale as any).url,
    rating: 5
  },
  {
    quote: "Consultoria estratégica que vai além do código. Eles entendem o mercado jurídico e as necessidades reais de um pregão.",
    author: "Dra. Cecilia Cavalcante",
    role: "Consultora Jurídica",
    image: (cecilia as any).url,
    rating: 5
  },
  {
    quote: "Sistema robusto e escalável. Processamos milhares de lances simultâneos sem qualquer lentidão ou erro de sincronia.",
    author: "Eder Grauu",
    role: "Gestor de Tecnologia",
    image: (eder as any).url,
    rating: 5
  }
];
