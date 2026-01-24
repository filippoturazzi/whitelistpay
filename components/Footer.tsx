
import React from 'react';
import { ShieldCheck, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
             
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-20 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              A solução definitiva para monetização e automação de Whitelist em servidores de FiveM.
            </p>
            <div className="flex gap-4">
            
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Reembolso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Whitelist Pay. Todos os direitos reservados. Não afiliado à Rockstar Games.
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Todos os sistemas operacionais
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
