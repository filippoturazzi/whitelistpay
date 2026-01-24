import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Novidade para FiveM</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Transforme sua Whitelist <br />
          em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Receita Automática</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Monetize sua cidade FiveM com um sistema de whitelist paga, automática e segura. 
          Aumente o faturamento e afaste players indesejados sem esforço manual.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Adicionar ao meu servidor
              <ArrowRight className="w-4 h-4" />
            </a>
          
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/como-funciona');
              window.dispatchEvent(new Event('pushstate'));
              window.scrollTo(0, 0);
            }}
            className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/15 transition-all"
          >
            <PlayCircle className="w-5 h-5 text-zinc-400" />
            Ver como funciona
          </button>
        </div>

        {/* Decorative Grid Floor */}
        <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[300px] opacity-20 pointer-events-none"
            style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, transparent, black)'
            }}
        />
      </div>
    </section>
  );
};

export default Hero;