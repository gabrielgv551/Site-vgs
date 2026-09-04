import { useState } from "react";
import profilePhoto from "@/imports/1770903478692.jpg";
import akiyamaLogo from "@/imports/images.jpg";
import ademiconLogo from "@/imports/ademicon-logo-png_seeklogo-485936.png";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20agendar%20um%20diagnóstico%20financeiro%20com%20a%20VGS%20Estratégia.";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1f44]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#c8a96e] flex items-center justify-center">
            <span className="font-serif text-[#0a1f44] text-sm font-bold leading-none">V</span>
          </div>
          <span className="font-serif text-white text-lg tracking-wide">VGS Estratégia</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Soluções", "Processo", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c8a96e] text-[#0a1f44] px-5 py-2 text-sm font-semibold hover:bg-[#e8d5a8] transition-colors duration-200"
          >
            Agendar Diagnóstico
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1f44] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {["Soluções", "Processo", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c8a96e] text-[#0a1f44] px-5 py-2.5 text-sm font-semibold text-center"
          >
            Agendar Diagnóstico
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="min-h-screen bg-[#0a1f44] flex items-center relative overflow-hidden pt-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Right accent block */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#0d2a5c] hidden lg:block" />
      <div className="absolute right-0 top-1/4 w-px h-1/2 bg-[#c8a96e]/40" />

      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#c8a96e]" />
            <span className="text-[#c8a96e] text-xs font-semibold uppercase tracking-[0.2em]">
              Controladoria as a Service
            </span>
          </div>

          <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-8">
            Previsibilidade de Caixa e Controle Financeiro para{" "}
            <em className="not-italic text-[#c8a96e]">Decisões Estratégicas</em>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-lg">
            Implantamos rotinas de gestão financeira que transformam dados brutos em inteligência estratégica para PMEs que querem crescer com segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#c8a96e] text-[#0a1f44] px-8 py-4 font-semibold hover:bg-[#e8d5a8] transition-colors duration-200 text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar pelo WhatsApp
            </a>
            <a
              href="#soluções"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/5 transition-colors duration-200 text-sm"
            >
              Conhecer as soluções
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          {[
            { label: "Fluxo de Caixa Projetado", value: "+12 meses", icon: "📈" },
            { label: "DRE Gerencial", value: "Mensal", icon: "📊" },
            { label: "Diagnóstico Financeiro", value: "Completo", icon: "🔎" },
          ].map((card) => (
            <div
              key={card.label}
              className="border border-white/10 bg-white/5 px-6 py-5 flex items-center justify-between hover-lift cursor-default"
            >
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{card.label}</p>
                <p className="text-white font-semibold text-lg">{card.value}</p>
              </div>
              <span className="text-3xl opacity-70">{card.icon}</span>
            </div>
          ))}
          <div className="border-l-2 border-[#c8a96e] pl-5 py-1 mt-2">
            <p className="text-white/40 text-xs leading-relaxed">
              "Paramos de ser surpreendidos pelo fim do mês e passamos a antecipar decisões."
            </p>
            <p className="text-[#c8a96e] text-xs mt-2 font-medium">— Cliente VGS, Setor de Serviços</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-white animate-pulse" />
      </div>
    </section>
  );
}

function Pains() {
  const pains = [
    {
      number: "01",
      title: "Falta de Conciliação Diária",
      description:
        "Sem controle em tempo real, entradas e saídas ficam desalinhadas. Você não sabe ao certo quanto tem disponível — e decisões erradas são tomadas no escuro.",
    },
    {
      number: "02",
      title: "Descasamento de Prazos",
      description:
        "Receitas entram com atraso enquanto despesas vencem pontualmente. O resultado é estrangulamento de caixa que poderia ter sido evitado com projeção adequada.",
    },
    {
      number: "03",
      title: "Surpresas no Fim do Mês",
      description:
        "O DRE chega tarde e sem contexto gerencial. Quando os números aparecem, já é difícil — ou impossível — corrigir o rumo. A empresa fica sempre no modo reativo.",
    },
  ];

  return (
    <section className="bg-[#f7f8fa] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-6 h-px bg-[#c8a96e]" />
          <span className="text-[#c8a96e] text-xs font-semibold uppercase tracking-[0.2em]">Diagnóstico</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <h2 className="font-serif text-[#0a1f44] text-3xl md:text-4xl leading-tight">
            Reconhece algum desses cenários na sua empresa?
          </h2>
          <p className="text-[#6b7a8d] leading-relaxed self-end">
            A maioria das PMEs opera sem visibilidade financeira real. As dores abaixo são mais comuns do que parecem — e todas têm solução estruturada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#dde3ee]">
          {pains.map((pain) => (
            <div
              key={pain.number}
              className="bg-white p-8 group hover:bg-[#0a1f44] transition-colors duration-300 cursor-default"
            >
              <span className="font-serif text-[#dde3ee] text-5xl group-hover:text-[#c8a96e]/30 transition-colors duration-300 block mb-8">
                {pain.number}
              </span>
              <h3 className="font-semibold text-[#0a1f44] group-hover:text-white text-lg mb-4 transition-colors duration-300 leading-snug">
                {pain.title}
              </h3>
              <p className="text-[#6b7a8d] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const solutions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fluxo de Caixa Projetado",
      subtitle: "Visibilidade de 12 meses",
      description:
        "Implantamos rotinas semanais e mensais de projeção de caixa com base em dados reais. Você passa a saber com antecedência quando o caixa aperta — e quando há espaço para investir.",
      tags: ["Projeção semanal", "Cenários pessimista/realista/otimista", "Alertas de ruptura"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "DRE Gerencial",
      subtitle: "Resultado real, não contábil",
      description:
        "Construímos um DRE voltado para a tomada de decisão, não para o fisco. Com margens por produto, centro de custo e período, você entende onde a empresa ganha e onde perde dinheiro.",
      tags: ["Margem de contribuição", "Custos fixos x variáveis", "Análise por produto/serviço"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Diagnóstico Financeiro",
      subtitle: "Ponto de partida estratégico",
      description:
        "Mapeamos o estado atual das finanças da empresa: capital de giro, estrutura de custos, ciclo financeiro e principais riscos. O diagnóstico orienta um plano de ação com prioridades claras.",
      tags: ["Ciclo financeiro", "Capital de giro", "Mapa de riscos"],
    },
  ];

  return (
    <section id="soluções" className="bg-[#0a1f44] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-6 h-px bg-[#c8a96e]" />
          <span className="text-[#c8a96e] text-xs font-semibold uppercase tracking-[0.2em]">Soluções</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <h2 className="font-serif text-white text-3xl md:text-4xl leading-tight">
            O que a VGS Estratégia entrega para a sua empresa
          </h2>
          <p className="text-white/50 leading-relaxed self-end">
            Nossa atuação vai além da consultoria pontual. Implantamos processos financeiros que funcionam no dia a dia — e que crescem junto com o negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="border border-white/10 p-8 group hover:border-[#c8a96e]/50 transition-all duration-300 hover-lift"
            >
              <div className="text-[#c8a96e] mb-6">{sol.icon}</div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{sol.subtitle}</p>
              <h3 className="text-white font-semibold text-xl mb-4 leading-snug">{sol.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{sol.description}</p>
              <div className="flex flex-wrap gap-2">
                {sol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#c8a96e]/70 text-xs border border-[#c8a96e]/20 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      num: "1",
      title: "Diagnóstico",
      duration: "Semana 1–2",
      description:
        "Levantamento completo da situação financeira atual: fluxo de caixa, estrutura de custos, ciclo operacional, sistemas utilizados e principais gargalos.",
      items: ["Entrevista com gestores", "Análise de extratos e lançamentos", "Mapeamento de processos existentes"],
    },
    {
      num: "2",
      title: "Implantação de Rotinas",
      duration: "Semana 3–6",
      description:
        "Estruturamos os processos e ferramentas de controle financeiro adaptados à realidade da empresa. Treinamos a equipe e garantimos a operação independente.",
      items: ["Planilhas e dashboards personalizados", "Rotinas de conciliação bancária", "Relatórios gerenciais mensais"],
    },
    {
      num: "3",
      title: "Acompanhamento Contínuo",
      duration: "Mensalmente",
      description:
        "Monitoramos os indicadores, revisamos projeções e participamos das reuniões de gestão. Você tem um controller sênior disponível sem o custo de um CLT.",
      items: ["Reunião mensal de resultados", "Revisão do fluxo projetado", "Suporte estratégico contínuo"],
    },
  ];

  return (
    <section id="processo" className="bg-[#f7f8fa] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-6 h-px bg-[#c8a96e]" />
          <span className="text-[#c8a96e] text-xs font-semibold uppercase tracking-[0.2em]">Processo</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <h2 className="font-serif text-[#0a1f44] text-3xl md:text-4xl leading-tight">
            Como funciona a parceria com a VGS Estratégia
          </h2>
          <p className="text-[#6b7a8d] leading-relaxed self-end">
            Um método estruturado em três fases, com entregas claras e prazo definido para você ganhar controle real do financeiro da empresa.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[2.75rem] top-12 bottom-12 w-px bg-[#dde3ee] hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="grid md:grid-cols-[5.5rem_1fr] gap-0 md:gap-8 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-11 h-11 bg-[#0a1f44] flex items-center justify-center relative z-10">
                    <span className="font-serif text-[#c8a96e] text-lg leading-none">{step.num}</span>
                  </div>
                </div>

                <div className="bg-white border border-[#dde3ee] p-8 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="md:hidden flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#0a1f44] flex items-center justify-center">
                          <span className="font-serif text-[#c8a96e] text-sm leading-none">{step.num}</span>
                        </div>
                      </div>
                      <h3 className="text-[#0a1f44] font-semibold text-xl leading-snug">{step.title}</h3>
                    </div>
                    <span className="text-[#c8a96e] text-xs font-semibold border border-[#c8a96e]/30 px-3 py-1.5 whitespace-nowrap self-start">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#6b7a8d] text-sm leading-relaxed mb-6">{step.description}</p>
                  <ul className="flex flex-col gap-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#0a1f44]/70">
                        <div className="w-1.5 h-1.5 bg-[#c8a96e] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const metrics = [
    { value: "3×", label: "Mais visibilidade sobre o caixa nos primeiros 30 dias" },
    { value: "48h", label: "Para ter o primeiro diagnóstico financeiro em mãos" },
    { value: "PMEs", label: "Exclusivamente — entendemos o seu contexto" },
    { value: "100%", label: "Das rotinas documentadas e transferíveis" },
  ];

  return (
    <section className="bg-[#0d2a5c] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {metrics.map((m) => (
            <div key={m.label} className="bg-[#0d2a5c] px-8 py-10 text-center">
              <p className="font-serif text-[#c8a96e] text-4xl md:text-5xl mb-3">{m.value}</p>
              <p className="text-white/50 text-sm leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const experiences = [
    {
      company: "Akiyama",
      role: "Controladoria & FP&A",
      period: "Experiência anterior",
      description:
        "Consolidação de demonstrações financeiras (DRE, DFC e Balanço), implementação de Orçamento Base Zero (OBZ) e automação de indicadores gerenciais em Power BI.",
      logo: akiyamaLogo,
    },
    {
      company: "Ademicon",
      role: "FP&A & Relações com Investidores",
      period: "Experiência anterior",
      description:
        "Elaboração de relatórios de taxa futura, análise preditiva de curvas de cancelamento e suporte a dossiês executivos para Relações com Investidores (RI).",
      logo: ademiconLogo,
    },
    {
      company: "Have Consultoria",
      role: "Consultor Financeiro",
      period: "Experiência anterior",
      description:
        "Diagnóstico e implantação de processos financeiros para PMEs, com foco em previsibilidade de caixa e DRE gerencial.",
      logo: null,
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-6 h-px bg-[#c8a96e]" />
          <span className="text-[#c8a96e] text-xs font-semibold uppercase tracking-[0.2em]">Quem está por trás</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left — photo + bio */}
          <div>
            <div className="relative mb-8">
              <div className="absolute -inset-3 border border-[#c8a96e]/20" />
              <img
                src={profilePhoto}
                alt="Fundador VGS Estratégia"
                className="w-full aspect-square object-cover object-top relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a1f44]/60 to-transparent z-20" />
            </div>

            <h3 className="font-serif text-[#0a1f44] text-2xl mb-1">Gabriel Viana</h3>
            <p className="text-[#c8a96e] text-sm font-medium mb-4">VGS Estratégia</p>
            <p className="text-[#6b7a8d] text-sm leading-relaxed">
              Especialista em controladoria e gestão financeira para PMEs, com trajetória construída em empresas de diferentes portes e setores. Combina rigor técnico com visão estratégica para transformar finanças em ferramenta de crescimento.
            </p>
          </div>

          {/* Right — experience */}
          <div>
            <h2 className="font-serif text-[#0a1f44] text-3xl md:text-4xl leading-tight mb-10">
              Experiência construída nas melhores empresas
            </h2>

            <div className="flex flex-col divide-y divide-[#dde3ee]">
              {experiences.map((exp, i) => (
                <div key={exp.company} className="py-8 group">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-10 bg-white border border-[#dde3ee] flex items-center justify-center flex-shrink-0 overflow-hidden px-1">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                        ) : (
                          <span className="font-serif text-[#0a1f44] text-base leading-none">{exp.company[0]}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-[#0a1f44] font-semibold text-lg leading-none mb-1">{exp.company}</h4>
                        <p className="text-[#6b7a8d] text-sm">{exp.role}</p>
                      </div>
                    </div>
                    <span className="text-[#c8a96e]/70 text-xs border border-[#c8a96e]/20 px-2.5 py-1 whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#6b7a8d] text-sm leading-relaxed pl-14">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="bg-[#f7f8fa] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-[#c8a96e]" />
              <span className="text-[#c8a96e] text-xs font-semibold uppercase tracking-[0.2em]">Próximo passo</span>
            </div>
            <h2 className="font-serif text-[#0a1f44] text-3xl md:text-4xl leading-tight mb-6">
              Agende uma reunião de diagnóstico gratuita de{" "}
              <em className="not-italic text-[#1e5fad]">20 minutos</em>
            </h2>
            <p className="text-[#6b7a8d] leading-relaxed mb-8 max-w-md">
              Uma conversa objetiva para entender onde sua empresa está financeiramente e identificar os principais pontos de atenção — sem compromisso, sem enrolação.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Sem compromisso de contratação",
                "Focado no seu contexto específico",
                "Resposta em até 2 horas úteis",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#0a1f44]/70 text-sm">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#c8a96e] flex-shrink-0">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0a1f44] text-white px-8 py-4 font-semibold hover:bg-[#0d2a5c] transition-colors duration-200 text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#c8a96e]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar meu diagnóstico gratuito
            </a>
          </div>

          {/* Right card */}
          <div className="bg-[#0a1f44] p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-8">O que acontece na reunião</p>
              {[
                { time: "0–5 min", text: "Apresentação e contexto do seu negócio" },
                { time: "5–15 min", text: "Diagnóstico dos principais desafios financeiros" },
                { time: "15–20 min", text: "Proposta de abordagem e próximos passos" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 mb-7 last:mb-0">
                  <div className="flex-shrink-0">
                    <span className="font-serif text-[#c8a96e] text-sm">{item.time}</span>
                  </div>
                  <div className="border-t border-white/10 pt-1 flex-1">
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/30 text-xs leading-relaxed">
                  Reunião 100% online via Google Meet ou Microsoft Teams. Sem apresentações genéricas — a conversa é sobre a sua empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050f1f] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#c8a96e] flex items-center justify-center">
              <span className="font-serif text-[#0a1f44] text-sm font-bold leading-none">V</span>
            </div>
            <span className="font-serif text-white text-base tracking-wide">VGS Estratégia</span>
          </div>
          <p className="text-white/30 text-xs text-center">
            Controladoria as a Service · Gestão Financeira para PMEs
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c8a96e] text-xs font-medium hover:text-[#e8d5a8] transition-colors"
          >
            Fale pelo WhatsApp →
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-full">
      <Nav />
      <Hero />
      <Pains />
      <Solutions />
      <About />
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
