import React, { useState } from 'react';
import { TrendingUp, Users, Wallet, CalendarRange, ArrowRight } from 'lucide-react';

const RevenueProjection = () => {
  const [salesQuantity, setSalesQuantity] = useState<number>(150);
  const [ticketPrice, setTicketPrice] = useState<number>(25);

  const feePercentage = 0.0899;
  
  // Calculations
  const grossMonthly = salesQuantity * ticketPrice;
  const netMonthly = grossMonthly - (grossMonthly * feePercentage);
  const netYearly = netMonthly * 12;

  const formatCurrency = (val: number) => 
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Controls Side */}
          <div className="lg:w-1/2 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <TrendingUp size={14} className="text-emerald-400" />
              <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Potencial de Faturamento</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Quanto seu servidor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">está deixando de ganhar?</span>
            </h2>
            
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Muitas cidades possuem centenas de entradas mensais. Cobrar um valor simbólico pela Whitelist não apenas filtra jogadores ruins, mas cria uma receita recorrente poderosa.
            </p>

            <div className="space-y-8">
              {/* Slider 1: Quantity */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-zinc-200 font-medium">
                    <Users size={18} className="text-zinc-500" />
                    Novos jogadores por mês
                  </div>
                  <span className="text-2xl font-bold text-white">{salesQuantity}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={salesQuantity}
                  onChange={(e) => setSalesQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
                />
                <div className="flex justify-between text-xs text-zinc-500 mt-2">
                  <span>10 players</span>
                  <span>1.000 players</span>
                </div>
              </div>

              {/* Slider 2: Price */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-zinc-200 font-medium">
                    <Wallet size={18} className="text-zinc-500" />
                    Valor da Whitelist
                  </div>
                  <span className="text-2xl font-bold text-white">R$ {ticketPrice},00</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
                />
                <div className="flex justify-between text-xs text-zinc-500 mt-2">
                  <span>R$ 5,00</span>
                  <span>R$ 100,00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result Side */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
               {/* Glow Effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-2xl rounded-3xl" />
              
              <div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl">
                
                <h3 className="text-zinc-400 font-medium mb-8 flex items-center gap-2">
                  <Wallet className="text-emerald-500" size={20} />
                  Sua estimativa de lucro líquido
                </h3>

                <div className="space-y-8">
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-2">Faturamento Mensal</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        {formatCurrency(netMonthly)}
                      </span>
                    </div>
                    <p className="text-emerald-400/80 text-sm mt-2 flex items-center gap-1">
                      Já descontando a taxa
                    </p>
                  </div>

                  <div className="h-px bg-white/10 w-full" />

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarRange size={16} className="text-zinc-500" />
                      <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Projeção Anual</p>
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-zinc-300">
                      {formatCurrency(netYearly)}
                    </p>
                    <p className="text-zinc-500 text-sm mt-2">
                      Isso ajudaria manter seu servidor por um bom tempo.
                    </p>
                  </div>
                </div>

                <div className="mt-10 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-3">
                  <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-400 mt-0.5">
                    <TrendingUp size={16} />
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Com <span className="text-white font-bold">{salesQuantity} vendas</span> mensais a <span className="text-white font-bold">R$ {ticketPrice}</span>, 
                    você transforma sua entrada em uma máquina de receita previsível, sem depender apenas de Vips ou doações.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RevenueProjection;