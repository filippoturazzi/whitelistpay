
import React, { useState } from 'react';
import { Check, Info, Calculator, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [simulateValue, setSimulateValue] = useState<string>('25');

  // Calculation Logic
  const numericValue = parseFloat(simulateValue.replace(',', '.')) || 0;
  const fee = numericValue * 0.0899;
  const finalValue = numericValue - fee;

  const formatCurrency = (val: number) => 
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <section id="precos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">Modelo Justo</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Custo zero para sua cidade. <br />
              <span className="text-zinc-500">Nós só ganhamos quando você vende.</span>
            </h2>
            
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Diferente de outros bots que cobram mensalidades caras mesmo se o servidor estiver vazio, o Whitelist Pay é parceiro do seu crescimento.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="text-xl font-bold">0</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Sem mensalidade</h3>
                  <p className="text-sm text-zinc-500">Não cobramos aluguel do bot. Instale e use gratuitamente.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="text-xl font-bold">0</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Sem taxa de adesão</h3>
                  <p className="text-sm text-zinc-500">Setup inicial totalmente gratuito e imediato.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pricing Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <div className="relative glass-panel rounded-3xl p-8 md:p-10 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-zinc-400 font-medium mb-2">Plano Parceiro</p>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-5xl font-bold text-white">R$ 0</span>
                      <span className="text-xl text-zinc-500">/mês</span>
                    </div>
                    
                    {/* Fee Highlight Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Sparkles size={14} className="text-emerald-400" />
                      <span className="text-sm text-zinc-300">Taxa de apenas <span className="text-white font-bold">8.99%</span> por venda</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-white text-black text-xs font-bold uppercase rounded-full tracking-wider">
                    Popular
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full mb-8"></div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Whitelists ilimitadas",
                    "Aprovação automática 24/7",
                    "Dashboard financeira completa",
                    "Pagamentos via PIX",
                    "Proteção Anti-Fraude",
                    "Suporte prioritário no Discord"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-green-500/10 text-green-500">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Simulator Box */}
                <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-4 text-zinc-300">
                    <Calculator className="w-4 h-4" />
                    <span className="text-sm font-medium">Simulador de Receita</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1 block">
                        Valor da Whitelist
                      </label>
                      <div className="relative group focus-within:text-white text-zinc-300 transition-colors">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium">R$</span>
                        <input 
                          type="number"
                          value={simulateValue}
                          onChange={(e) => setSimulateValue(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-9 pr-3 text-sm font-medium outline-none focus:border-white/20 transition-all placeholder-zinc-600"
                          placeholder="0,00"
                        />
                      </div>
                    </div>

                    <div className="text-zinc-500 pt-5">
                      <ArrowRight size={16} />
                    </div>

                    <div className="flex-1">
                      <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1 block">
                        Você Recebe por Whitelist
                      </label>
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg py-2.5 px-3 text-sm font-bold text-emerald-400 text-center truncate">
                        {formatCurrency(finalValue)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-start gap-2 text-xs text-zinc-500">
                    <span className="mt-0.5 shrink-0"><Info size={12} /></span>
                    <p>Já descontada a taxa administrativa de <strong className="text-zinc-300 font-semibold">8.99%</strong>.</p>
                  </div>
                </div>

                <a
                  href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 bg-white text-black py-4 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center no-underline"
                >
                  Começar agora gratuitamente
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
