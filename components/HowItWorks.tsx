
import React from 'react';
import { Bot, Settings, ShoppingCart, Zap, Wallet } from 'lucide-react';

const steps = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Adicione o Bot",
    desc: "Instale o Whitelist Pay gratuitamente no Discord da sua cidade com poucos cliques."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Configure",
    desc: "Faça algumas configurações básicas para se adaptar ao seu servidor."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Venda Automática",
    desc: "O player paga via PIX e o bot identifica o pagamento instantaneamente."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Liberação Imediata",
    desc: "O cargo é entregue e o ID liberado na database sem intervenção humana."
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Receba via PIX",
    desc: "Acompanhe o saldo na dashboard e solicite o saque direto para sua conta."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como o Whitelist Pay funciona</h2>
          <p className="text-zinc-400">Do setup ao saque em 5 passos simples.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/30 transition-colors shadow-lg">
                <div className="text-zinc-400 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
