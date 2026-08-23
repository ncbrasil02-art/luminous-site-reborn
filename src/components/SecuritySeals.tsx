import { ShieldCheck, Lock, Shield, Server, FileCheck } from "lucide-react";
import { Reveal } from "./Section";

const seals = [
  {
    icon: ShieldCheck,
    title: "SSL Seguro",
    desc: "Criptografia de 256 bits para todas as transações.",
  },
  {
    icon: Lock,
    title: "LGPD Ready",
    desc: "Conformidade total com a proteção de dados.",
  },
  {
    icon: Shield,
    title: "Cibersegurança",
    desc: "Monitoramento contra ataques e intrusões 24/7.",
  },
  {
    icon: Server,
    title: "Infra Estratégica",
    desc: "Servidores de alta disponibilidade e backup diário.",
  },
  {
    icon: FileCheck,
    title: "Homologado",
    desc: "Sistemas testados e certificados para o mercado.",
  },
];

export function SecuritySeals() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-navy-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {seals.map((seal, i) => (
            <Reveal key={seal.title} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-none bg-primary/5 text-primary-glow ring-1 ring-primary/20 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:glow-sm group-hover:ring-primary/50">
                  <seal.icon className="h-7 w-7" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
                  {seal.title}
                </h4>
                <p className="text-[10px] text-muted-foreground leading-tight px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {seal.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
