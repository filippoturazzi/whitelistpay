
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowLeft, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
}

const Navbar = ({ currentPath = '/' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('pushstate'));
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isPremios = currentPath === '/premios';
  const isHowItWorks = currentPath === '/como-funciona';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 group cursor-pointer"
        >
      <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {!isPremios && !isHowItWorks ? (
            <>
              <a href="#funcionalidades" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Funcionalidades</a>
              <a href="#precos" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Preços</a>
              <button 
                onClick={() => navigate('/premios')} 
                className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
              >
                Premiações
                <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          ) : (
            <button 
              onClick={() => navigate('/')} 
              className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Home
            </button>
          )}
          
            <a
              href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95 flex items-center justify-center"
            >
              Adicionar Bot
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-300 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in">
          {!isPremios && !isHowItWorks ? (
            <>
              <a href="#funcionalidades" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Funcionalidades</a>
              <a href="#precos" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Preços</a>
              <button onClick={() => navigate('/premios')} className="text-yellow-500 font-black uppercase text-xs tracking-widest text-left">Premiações</button>
            </>
          ) : (
            <button onClick={() => navigate('/')} className="text-zinc-400 font-bold uppercase text-xs tracking-widest text-left flex items-center gap-2">
              <ArrowLeft size={16} /> Home
            </button>
          )}
          <a
            href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center"
          >
            Adicionar Bot
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;