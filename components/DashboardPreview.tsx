
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { ArrowUpRight, DollarSign, Users, CreditCard, Download } from 'lucide-react';

// Mock data for the chart
const data = [
  { name: 'Seg', value: 1200 },
  { name: 'Ter', value: 1800 },
  { name: 'Qua', value: 1400 },
  { name: 'Qui', value: 2400 },
  { name: 'Sex', value: 3200 },
  { name: 'Sab', value: 4800 },
  { name: 'Dom', value: 3800 },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Controle total na sua mão</h2>
            <p className="text-zinc-400 max-w-md">
              Acompanhe vendas, gerencie o saldo e solicite saques via PIX através de uma dashboard intuitiva e profissional.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Disponível para saque</p>
              <p className="text-2xl font-mono font-bold text-emerald-400">R$ 4.250,00</p>
            </div>
            <button className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-500/20 transition-colors">
              <Download size={18} />
              <span className="text-sm font-semibold">Sacar</span>
            </button>
          </div>
        </div>

        {/* Mock Interface Container */}
        <div className="glass-panel rounded-2xl border border-white/10 p-1 shadow-2xl bg-[#050505]/80 backdrop-blur-xl">
          {/* Fake Browser Header */}
          <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="ml-4 px-3 py-1 rounded-md bg-white/5 text-[10px] text-zinc-500 w-64 border border-white/5 flex items-center justify-center">
              dashboard.whitelistpay.gg
            </div>
          </div>

          <div className="p-4 md:p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0f0f0f] border border-white/5 p-5 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-emerald-400 flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded">
                    +12.5% <ArrowUpRight size={12} />
                  </span>
                </div>
                <p className="text-zinc-500 text-sm">Vendas Hoje</p>
                <p className="text-2xl font-semibold mt-1">R$ 850,00</p>
              </div>

              <div className="bg-[#0f0f0f] border border-white/5 p-5 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-zinc-400 flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                    +4 players
                  </span>
                </div>
                <p className="text-zinc-500 text-sm">Whitelists Aprovadas</p>
                <p className="text-2xl font-semibold mt-1">142</p>
              </div>

              <div className="bg-[#0f0f0f] border border-white/5 p-5 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-zinc-500 text-sm">Ticket Médio</p>
                <p className="text-2xl font-semibold mt-1">R$ 29,90</p>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-xl h-[300px] w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-semibold text-zinc-300">Receita Semanal</h3>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-xs text-zinc-500">Vendas Confirmadas</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#555', fontSize: 12}} 
                    dy={10}
                  />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff'}}
                    itemStyle={{color: '#fff'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ffffff" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
