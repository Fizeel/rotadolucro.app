import React from 'react';
import { 
  Calculator, 
  Target, 
  Wrench, 
  History, 
  PlayCircle,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 font-sans selection:bg-neon-cyan/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* VSL Placeholder */}
        <div className="w-full max-w-3xl aspect-video bg-black/60 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden mb-12 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <PlayCircle className="w-20 h-20 text-neon-cyan/80 group-hover:text-neon-cyan group-hover:scale-110 transition-all duration-300 z-10" />
          <p className="mt-4 text-gray-400 font-medium z-10">[VSL - Formato Minidocumentário Investigativo]</p>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-4xl">
          Você roda 12 horas por dia, mas no fim do mês, <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">não sabe para onde</span> o seu dinheiro foi?
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
          Pare de trabalhar no escuro. Assuma o controle do seu lucro real, bata suas metas diárias e preveja a manutenção do seu carro antes que ela quebre o seu bolso. O aplicativo definitivo para quem leva os aplicativos de corrida a sério.
        </p>

        {/* CTA */}
        <button className="relative group w-full sm:w-auto px-8 py-5 bg-neon-green text-black font-bold text-lg sm:text-xl rounded-xl transition-all hover:scale-105 animate-pulse-green shadow-[0_0_30px_rgba(0,255,102,0.3)]">
          Quero Assumir o Controle do Meu Lucro
          <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </section>

      {/* 2. PAIN SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-orange/10 text-neon-orange border border-neon-orange/20 text-sm font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse"></span>
                <span>A Realidade Oculta</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Os aplicativos de corrida mostram o seu faturamento. <br/>
                <span className="text-neon-orange drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]">Eles escondem o seu prejuízo.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Você acorda cedo, liga o motor e começa a rodar. A plataforma diz que você fez <span className="text-white font-semibold">R$ 300,00</span> no dia. Você comemora. Mas aí vem a realidade: a gasolina, o desgaste do pneu, a troca de óleo surpresa...
              </p>
            </div>

            <div className="flex-1 w-full max-w-sm lg:max-w-none">
              {/* Mockup Placeholder */}
              <div className="aspect-[9/16] max-w-[300px] mx-auto bg-black border-[8px] border-gray-900 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20"></div>
                <div className="flex-1 bg-dark p-6 flex flex-col justify-center items-center text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none"></div>
                  <p className="text-sm text-gray-500 font-medium mb-2">Faturamento Anunciado</p>
                  <p className="text-3xl font-bold text-gray-300 mb-8 line-through decoration-red-500/50">R$ 300,00</p>
                  
                  <div className="w-full space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Combustível</span>
                      <span className="text-red-400">- R$ 110,00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Manutenção (Provisão)</span>
                      <span className="text-red-400">- R$ 45,00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Alimentação</span>
                      <span className="text-red-400">- R$ 30,00</span>
                    </div>
                    <div className="h-px bg-white/10 w-full my-4"></div>
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Lucro Real</span>
                      <span className="text-neon-cyan">R$ 115,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Conheça o seu novo <br className="hidden sm:block"/>
              <span className="text-neon-yellow drop-shadow-[0_0_15px_rgba(251,255,0,0.3)]">Copiloto Financeiro.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 transition-colors">
                <Calculator className="w-7 h-7 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Dashboard de Lucro Real</h3>
              <p className="text-gray-400 leading-relaxed">
                Esqueça a ilusão do faturamento. Calcule o que sobra no bolso com precisão cirúrgica no final de cada dia.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-neon-green/10 flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors">
                <Target className="w-7 h-7 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Metas e Conquistas Diárias</h3>
              <p className="text-gray-400 leading-relaxed">
                Defina quanto quer ganhar e acompanhe o círculo de progresso. Transforme sua rotina em um jogo lucrativo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-neon-orange/10 flex items-center justify-center mb-6 group-hover:bg-neon-orange/20 transition-colors">
                <Wrench className="w-7 h-7 text-neon-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">A Garagem Inteligente</h3>
              <p className="text-gray-400 leading-relaxed">
                Cadastre a quilometragem e o app calcula a vida útil de Óleo, Pneus e Pastilhas. Nunca mais seja pego de surpresa.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <History className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Histórico Blindado</h3>
              <p className="text-gray-400 leading-relaxed">
                Edite, apague e tenha controle retroativo mês a mês. Seus dados organizados como uma verdadeira empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER & OFFER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-neon-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Quanto custa <span className="text-red-500">não saber</span> o seu lucro?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed">
            Uma troca de pastilha esquecida pode arranhar seu disco. Por menos do que uma marmita na rua, transforme seu carro em uma empresa <span className="text-white font-semibold">altamente lucrativa.</span>
          </p>

          <button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-6 bg-neon-orange text-black font-bold text-lg sm:text-xl rounded-xl transition-all hover:scale-105 animate-pulse-orange shadow-[0_0_30px_rgba(255,107,0,0.3)]">
            Liberar Meu Acesso Agora 
            <span className="text-sm bg-black/20 px-2 py-1 rounded-md ml-2">Acesso Imediato</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-neon-green" /> 7 dias de garantia</div>
            <div className="w-1 h-1 rounded-full bg-gray-700"></div>
            <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-neon-green" /> Cancelamento fácil</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
