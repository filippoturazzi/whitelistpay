import React from 'react';
import { ArrowLeft, Bot, PlayCircle } from 'lucide-react';

const HowItWorksPage = () => {
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-zinc-300">
            <PlayCircle size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tutorial Completo</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            Veja como funciona
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
              Whitelist Pay
            </span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Assista ao vídeo e descubra como automatizar sua whitelist e transformar seu servidor FiveM em uma fonte de receita.
          </p>
        </div>

        {/* Video Container */}
        <div className="mb-12">
          <div className="relative glass-panel rounded-[2.5rem] p-4 md:p-8 border border-white/10 overflow-hidden">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/50">
              {/* Placeholder para vídeo - substitua pela URL do seu vídeo */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ned-6iGhlBw?si=dFqytbwiTP3zdDJp"
                title="Tutorial Whitelist Pay"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              // Aqui você pode adicionar a lógica para adicionar o bot
              // Por exemplo, abrir um link do Discord ou modal
              window.open('https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID', '_blank');
            }}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Bot className="w-5 h-5" />
            Adicionar Bot ao Servidor
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/15 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Início
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-panel rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-center">Funcionalidades Demonstradas</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Automação Completa</p>
                  <p className="text-xs text-zinc-400">Sistema totalmente automatizado para processar pagamentos e whitelist</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Dashboard Intuitivo</p>
                  <p className="text-xs text-zinc-400">Interface fácil de usar para gerenciar tudo em um só lugar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Segurança Avançada</p>
                  <p className="text-xs text-zinc-400">Proteção contra fraudes e validação automática de pagamentos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Relatórios Detalhados</p>
                  <p className="text-xs text-zinc-400">Acompanhe receitas, conversões e métricas importantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

