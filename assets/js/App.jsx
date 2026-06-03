import React, { useState, useEffect } from 'react';
import {
  PlayCircle, Lock, Target, TrendingUp, Cpu, Cloud,
  CheckCircle2, XCircle, ChevronRight, AlertCircle, Quote
} from 'lucide-react';

const CHECKOUT_LINK = "https://pay.hotmart.com/I106116667J?checkoutMode=10";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-base text-gray-200 font-sans">
      <div className="scanline"></div>

      {/* 1. NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="font-syne font-bold text-xl tracking-tight text-white">
            ROTA DE LUCRO
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#problema" className="hover:text-amber transition-colors">O Problema</a>
            <a href="#solucao" className="hover:text-amber transition-colors">Solução</a>
            <a href="#comofunciona" className="hover:text-amber transition-colors">Como Funciona</a>
          </div>

          <a
            href="#cta-final"
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-colors text-sm"
          >
            Garantir Acesso
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10">

        {/* VSL Container */}
        <div className="w-full max-w-4xl aspect-video bg-surface border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden mb-16 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-base to-transparent opacity-80"></div>
          <PlayCircle className="w-20 h-20 text-amber/80 group-hover:text-amber group-hover:scale-110 transition-all duration-300 z-10" />
          <p className="mt-4 text-gray-400 font-medium z-10">[Vídeo de Vendas: Aperte o Play]</p>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none"></div>
        </div>

        <div className="font-mono text-amber text-sm font-semibold tracking-wider uppercase mb-6 animate-pulse-subtle flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber"></span>
          Dashboard para Motoristas Profissionais
        </div>

        <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl text-white">
          Você trabalha horas. <br className="hidden md:block" />
          <span className="text-gray-400">Mas sabe quanto <span className="text-amber">lucrou de verdade?</span></span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
          O Rota de Lucro transforma cada corrida em inteligência financeira — para que você pare de apenas dirigir e comece a gerir seu próprio negócio.
        </p>

        <a
          id="botao-compra-cakto"
          href={CHECKOUT_LINK}
          className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-5 bg-amber text-base font-bold text-lg rounded-xl transition-all hover:scale-[1.02] animate-pulse-amber shadow-[0_0_30px_rgba(232,160,32,0.3)]"
        >
          Quero Controlar Meu Lucro
          <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-mono text-gray-500">
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green" /> Pagamento único</div>
          <span className="hidden sm:inline text-gray-700">•</span>
          <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-gray-400" /> Segurança empresarial</div>
          <span className="hidden sm:inline text-gray-700">•</span>
          <div className="flex items-center gap-1.5 text-gray-400">Acesso imediato por e-mail</div>
        </div>
      </section>

      {/* 3. TICKER */}
      <div className="w-full overflow-hidden bg-surface border-y border-white/5 py-4 relative z-10 flex">
        <div className="animate-ticker flex items-center font-mono text-sm tracking-widest uppercase gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-gray-400">META DIÁRIA <span className="text-green">→ DEFINIDA E ACOMPANHADA</span></span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">RECEITAS VS DESPESAS <span className="text-amber">→ AUTOMATICAMENTE</span></span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">KM DO VEÍCULO <span className="text-green">→ MONITORADOS</span></span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">DADOS NA NUVEM <span className="text-amber">→ COM SEGURANÇA EMPRESARIAL</span></span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">CUSTOS OCULTOS <span className="text-red">→ REVELADOS</span></span>
              <span className="text-gray-600">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. PROBLEMAS */}
      <section id="problema" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            A maioria dos motoristas trabalha no escuro.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Você sabe quanto entrou no dia. <span className="text-red font-medium">Mas sabe quanto sobrou?</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="glass-card p-8 flex flex-col h-full">
            <h3 className="font-syne text-2xl font-bold text-white mb-4">Faturamento ≠ Lucro</h3>
            <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
              Fazer R$ 400 não significa lucrar R$ 400. Combustível, desgaste, pedágio... sabe quanto sobra?
            </p>
            <div className="bg-base/50 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
              <Quote className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <p className="font-mono text-sm text-gray-500 italic">"Trabalhei 11 horas e não sei se fiz dinheiro."</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 flex flex-col h-full">
            <h3 className="font-syne text-2xl font-bold text-white mb-4">Nenhum Controle de Metas</h3>
            <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
              Sem meta clara, você roda por ansiedade e para quando está cansado, não quando atingiu o objetivo.
            </p>
            <div className="bg-base/50 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
              <Quote className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <p className="font-mono text-sm text-gray-500 italic">"Fico rodando 'por precaução' sem saber se já bati a meta."</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 flex flex-col h-full">
            <h3 className="font-syne text-2xl font-bold text-white mb-4">Custos Invisíveis</h3>
            <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
              Troca de óleo e pneus são gastos certos ignorados no cálculo diário, até chegar a conta grande.
            </p>
            <div className="bg-base/50 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
              <Quote className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <p className="font-mono text-sm text-gray-500 italic">"A revisão comeu tudo que ganhei na semana."</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-8 flex flex-col h-full">
            <h3 className="font-syne text-2xl font-bold text-white mb-4">Planilha não é Gestão</h3>
            <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
              Anotar no papel não escala. Você precisa de um sistema que trabalhe enquanto você dirige.
            </p>
            <div className="bg-base/50 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
              <Quote className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <p className="font-mono text-sm text-gray-500 italic">"Não dá pra anotar enquanto dirijo."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BIG QUESTION */}
      <section className="py-32 px-4 relative z-10 bg-surface border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-8">A pergunta que todo motorista deveria conseguir responder:</p>
          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
            "Hoje, eu <span className="text-amber">realmente lucrei?</span>"
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Se você não sabe a resposta em segundos, é hora de mudar de abordagem.
          </p>
        </div>
      </section>

      {/* 6. SOLUÇÃO */}
      <section id="solucao" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Cada funcionalidade existe para uma única coisa: <span className="text-green">aumentar seu lucro real.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 border border-amber/20">
              <Target className="w-7 h-7 text-amber" />
            </div>
            <div>
              <h3 className="font-syne text-xl font-bold text-white mb-2">Gestão de Metas Diárias</h3>
              <p className="text-gray-400">Controle de progresso em tempo real. Saiba exatamente quando pode ir para casa com o dever cumprido.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center shrink-0 border border-green/20">
              <TrendingUp className="w-7 h-7 text-green" />
            </div>
            <div>
              <h3 className="font-syne text-xl font-bold text-white mb-2">Controle Financeiro</h3>
              <p className="text-gray-400">Saldo real instantâneo. Abateu o combustível? A tela te mostra na hora qual o verdadeiro valor do seu dia.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 border border-amber/20">
              <Cpu className="w-7 h-7 text-amber" />
            </div>
            <div>
              <h3 className="font-syne text-xl font-bold text-white mb-2">Inteligência do Veículo</h3>
              <p className="text-gray-400">O app calcula o desgaste e custo real por KM rodado, rateando pneu, óleo e pastilhas sem você fazer contas.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <Cloud className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-syne text-xl font-bold text-white mb-2">Segurança Empresarial</h3>
              <p className="text-gray-400">Seus dados ficam sincronizados na nuvem, acessíveis em qualquer dispositivo sem risco de perder o histórico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section id="comofunciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white">Da compra ao lucro calculado.</h2>
          </div>

          <div className="space-y-6">
            {[
              { num: "1", title: "Pagamento Único", desc: "Você faz um pagamento único. Sem pegadinhas, sem mensalidades." },
              { num: "2", title: "Acesso Imediato", desc: "Receba seu login por e-mail na mesma hora em que o pagamento for aprovado." },
              { num: "3", title: "Ligar os Motores", desc: "Cadastre seu veículo e insira o KM atual para começar o rastreamento." },
              { num: "4", title: "Decisões Baseadas em Dados", desc: "Alimente o app diariamente e tenha o painel de lucro trabalhando a seu favor." }
            ].map((step, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-base border border-white/10 flex items-center justify-center font-mono font-bold text-xl text-amber shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-syne text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LIMITES HONESTOS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="glass-card p-8 md:p-12 border-red/20">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-red" />
            <h2 className="font-syne text-2xl font-bold text-white">O que o Rota de Lucro <span className="text-red">NÃO</span> é.</h2>
          </div>

          <ul className="space-y-4 font-mono text-sm sm:text-base text-white">
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red/60 shrink-0 mt-0.5" />
              <span className="text-white">Não é app de transporte ou centralizador de corridas.</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red/60 shrink-0 mt-0.5" />
              <span className="text-white">Não promete enriquecimento fácil ou fórmulas mágicas.</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red/60 shrink-0 mt-0.5" />
              <span className="text-white">Não é mensalidade, você faz um pagamento único e o app é seu.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section id="cta-final" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center border-t border-white/5 bg-gradient-to-b from-base to-surface">
        <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Pare de adivinhar. <br className="hidden sm:block" />
          <span className="text-amber">Comece a gerir.</span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Por menos do que uma marmita na rua, transforme seu carro em uma empresa <span className="text-white font-medium">lucrativa e previsível.</span>
        </p>

        <a
          id="botao-compra-cakto"
          href={CHECKOUT_LINK}
          className="group relative flex items-center justify-center w-full sm:w-auto gap-3 px-8 sm:px-12 py-6 bg-amber text-base font-bold text-xl sm:text-2xl rounded-xl transition-all hover:scale-[1.02] animate-pulse-amber shadow-[0_0_40px_rgba(232,160,32,0.3)]"
        >
          Liberar Meu Acesso Agora
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
        <div className="w-full sm:hidden mt-4 text-amber font-mono text-sm">Pagamento Único</div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-mono text-gray-500">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green" /> Pagamento Único</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green" /> Liberação Automática por E-mail</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green" /> Dados na Nuvem</div>
        </div>
      </section>

    </div>
  );
}

export default App;
