
import React from 'react';
import { TrendingUp, Lock, UserX, Sliders, BarChart3, QrCode } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="text-white" />,
    title: "Aumento de Faturamento",
    desc: "Transforme o processo de entrada em uma nova fonte de receita recorrente para manter e aprimorar o servidor."
  },
  {
    icon: <Lock className="text-white" />,
    title: "Exclusividade e Valor",
    desc: "Cidades pagas geram maior comprometimento dos jogadores e valorizam a experiência de RP."
  },
  {
    icon: <UserX className="text-white" />,
    title: "Filtro Anti-RP",
    desc: "A barreira de entrada paga reduz drasticamente trolls, hackers e jogadores que não levam o RP a sério."
  },
  {
    icon: <Sliders className="text-white" />,
    title: "Automação Total",
    desc: "Esqueça as planilhas e aprovações manuais. O sistema funciona 24/7 sem cansar sua staff."
  },
  {
    icon: <BarChart3 className="text-white" />,
    title: "Gestão Financeira",
    desc: "Dashboard completa com métricas de conversão, histórico de vendas e saldo em tempo real."
  },
  {
    icon: <QrCode className="text-white" />,
    title: "Pagamento Instantâneo",
    desc: "Integração nativa com PIX QR Code. O player paga e joga na hora, sem espera de compensação."
  }
];

const Benefits = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
            Tudo o que seu servidor precisa para crescer com qualidade.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {/* Fixed TypeScript error by casting to any to allow 'size' property injection */}
                {React.cloneElement(item.icon as any, { size: 24 })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-100">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
