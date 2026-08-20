import { SITE_URL } from "@/lib/seo";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  ChevronRight,
  Shield,
  Zap,
  Star,
  Globe,
  Users,
} from "lucide-react";
import { Reveal } from "./Section";
import { buildMeta } from "@/lib/seo";

export function buildStubMeta({
  title,
  description,
  keywords,
  canonical,
  faq,
  breadcrumbs,
  ogImage,
}: {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  faq?: { q: string; a: string }[];
  breadcrumbs?: { label: string; to: string }[];
  ogImage?: string;
}) {
  return buildMeta({
    title,
    description,
    keywords,
    canonical,
    faq,
    breadcrumbs,
    ogImage,
  });
}

interface StubPageProps {
  title: React.ReactNode;
  eyebrow: string;
  description: React.ReactNode;
  icon?: any;
  breadcrumbs?: { label: string; to: string }[];
  highlights?: { label: string; to: string }[];
}

export function StubPage({ title, eyebrow, description, icon: Icon = Rocket, breadcrumbs, highlights }: StubPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-12">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <Link 
                  to={crumb.to} 
                  className={`hover:text-primary transition-colors ${idx === breadcrumbs.length - 1 ? 'text-primary' : ''}`}
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">{eyebrow}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/orcamento"
                  className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contato"
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center space-x-2"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {highlights ? (
              <div className="grid grid-cols-1 gap-4">
                {highlights.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-primary transition-colors">{item.label}</h3>
                      <p className="text-sm text-gray-400">Ver detalhes do portfólio</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { icon: Shield, title: "Segurança", desc: "Protocolos avançados" },
                      { icon: Zap, title: "Velocidade", desc: "Performance extrema" },
                      { icon: Globe, title: "Escalável", desc: "Cresça sem limites" },
                      { icon: Users, title: "Suporte", desc: "24/7 Dedicado" },
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                        <item.icon className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0F1A] bg-gray-700" />
                        ))}
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-white">+500 Clientes</div>
                        <div className="text-gray-400 text-xs">Confiando em nossa tecnologia</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}