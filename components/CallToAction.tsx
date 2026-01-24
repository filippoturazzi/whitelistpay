
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-3xl opacity-50 blur-xl"></div>
        
        <div className="relative glass-panel rounded-3xl p-8 md:p-16 text-center border border-white/10 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Pronto para profissionalizar sua cidade?
          </h2>
          
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de servidores que já automatizaram suas whitelists e aumentaram o faturamento com o Whitelist Pay.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            
            <a
              href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              Adicionar o Whitelist Pay agora
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Instalação Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Sem mensalidade fixa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Suporte Dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
