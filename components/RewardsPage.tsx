
import React from 'react';
import { Trophy, Gift, Star, Shield, Award, Crown, CheckCircle2, Package, ArrowDown, MapPin, Sparkles } from 'lucide-react';

const ranks = [
  {
    id: 1,
    name: "Bronze",
    requirement: "R$ 7.500",
    color: "from-orange-700 to-orange-500",
    bg: "bg-orange-500/5",
    border: "border-orange-500/20",
    icon: <Shield className="w-8 h-8 text-orange-400" />,
    physicalPrize: "Kit de Adesivos Premium + Chaveiro Metálico Whitelist Pay",
    benefits: [
      "Selo Bronze no perfil financeiro",
      "Prioridade Nível 1 no suporte",
      "Cargo exclusivo no Discord oficial"
    ],
    status: "Fase Inicial"
  },
  {
    id: 2,
    name: "Ouro",
    requirement: "R$ 20.000",
    color: "from-yellow-600 to-yellow-400",
    bg: "bg-yellow-500/5",
    border: "border-yellow-500/20",
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    physicalPrize: "Camiseta Exclusiva 'Founder' + Mousepad Speed XL",
    benefits: [
      "Selo Ouro no perfil financeiro",
      "Acesso VIP a suporte via voz",
      "Beta tester de novas funções",
      "Destaque na landing page"
    ],
    status: "Crescimento",
    popular: true
  },
  {
    id: 3,
    name: "Diamante",
    requirement: "R$ 40.000",
    color: "from-cyan-500 to-blue-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-500/20",
    icon: <Crown className="w-8 h-8 text-cyan-400" />,
    physicalPrize: "Troféu de Acrílico Personalizado + Moletom Bordado Limited",
    benefits: [
      "Selo Diamante no perfil financeiro",
      "Gerente de conta dedicado 24h",
      "Menor taxa administrativa do mercado",
      "Acesso ao grupo de elite da plataforma"
    ],
    status: "Nível Lenda"
  }
];

const RewardsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      {/* Header com Animação sutil */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8 text-yellow-500 animate-pulse">
          <Trophy size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Programa de Reconhecimento WL Pay</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
          Escale seu faturamento. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">Garanta seus prêmios.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Nossa trilha de progresso recompensa os servidores que mais faturam. 
          Alcance os níveis de saque acumulado e receba benefícios digitais e prêmios físicos em sua casa.
        </p>
      </div>

      {/* Trilha de Progresso Vertical */}
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Linha Vertical Central (Desktop) */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-yellow-500 to-cyan-500 opacity-10 rounded-full" />

        <div className="space-y-24">
          {ranks.map((rank, index) => (
            <div key={rank.id} className="relative flex flex-col md:flex-row items-start gap-8 md:gap-0 group">
              
              {/* Indicador de Nível Flutuante */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 z-20">
                <div className={`w-16 h-16 rounded-2xl bg-[#0a0a0a] border-2 ${rank.border.replace('/20', '/40')} flex items-center justify-center font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                   <span className={`bg-gradient-to-br ${rank.color} bg-clip-text text-transparent`}>{rank.id}</span>
                </div>
              </div>

              {/* Lado Esquerdo: Info do Rank (Alternando para Desktop) */}
              <div className={`w-full md:w-1/2 flex flex-col pt-20 md:pt-0 ${index % 2 === 0 ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:order-last'}`}>
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-500 text-[10px] font-black uppercase tracking-widest`}>
                    Meta {rank.id} • {rank.status}
                  </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                  Rank {rank.name}
                </h2>
                <p className="text-zinc-400 mb-6 font-medium">Saque total de <span className="text-white text-xl font-mono">{rank.requirement}</span></p>
                
                {rank.popular && (
                  <div className="inline-flex items-center gap-2 text-yellow-500 text-xs font-bold mb-6">
                    <Sparkles size={14} />
                    Nível mais alcançado pelos parceiros
                  </div>
                )}
              </div>

              {/* Lado Direito: Card de Benefícios */}
              <div className={`w-full md:w-1/2 pb-12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className={`relative glass-panel rounded-[2.5rem] p-8 md:p-10 border ${rank.border} overflow-hidden transition-all duration-500 group-hover:bg-white/[0.05]`}>
                  {/* Icon Watermark */}
                  <div className="absolute -top-4 -right-4 opacity-[0.03] scale-150 rotate-12">
                    {rank.icon}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-white/5 rounded-xl">
                        {rank.icon}
                      </div>
                      <h3 className="font-black text-white text-xl uppercase tracking-tighter">Benefícios {rank.name}</h3>
                    </div>

                    <div className="space-y-8">
                      {/* Caixa de Prêmio Físico */}
                      <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4">
                        <div className="shrink-0 p-2 bg-emerald-500/10 rounded-lg h-fit">
                          <Package size={18} className="text-emerald-500" />
                        </div>
                        <div>
                          <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Prêmio Físico</p>
                          <p className="text-sm text-zinc-200 font-medium italic">"{rank.physicalPrize}"</p>
                        </div>
                      </div>

                      {/* Lista de Vantagens Digitais */}
                      <ul className="grid grid-cols-1 gap-4">
                        {rank.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                            <span className="text-zinc-400 text-sm leading-tight">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Footer da Página de Premios */}
      <div className="max-w-4xl mx-auto px-6 mt-32">
        <div className="relative glass-panel rounded-[3rem] p-12 text-center border border-emerald-500/20 bg-emerald-500/[0.02]">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#050505] border border-emerald-500/20 rounded-full flex items-center justify-center">
            <MapPin className="text-emerald-500" size={32} />
          </div>
          <h3 className="text-3xl font-black mb-6 mt-4">Qual será o seu primeiro Rank?</h3>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
            Assim que atingir a meta, o botão de resgate aparecerá automaticamente no seu dashboard. 
            Sem burocracia, sem espera. Nós crescemos com você.
          </p>
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new Event('pushstate'));
            }}
            className="bg-white text-black px-12 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-transform"
          >
            Começar minha Automação
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;