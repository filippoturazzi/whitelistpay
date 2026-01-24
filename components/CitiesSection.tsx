import React from 'react';
import { Building2, MapPin } from 'lucide-react';

// Array de cidades - você pode substituir pelos nomes reais e logos
// Para adicionar logos, substitua null pelo caminho da imagem: { name: 'Nome da Cidade', logo: '/path/to/logo.png' }
const cities = [
  { name: 'Cidade Alpha', logo: null },
  { name: 'Cidade Beta', logo: null },
  { name: 'Cidade Gamma', logo: null },
  { name: 'Cidade Delta', logo: null },
  { name: 'Cidade Epsilon', logo: null },
  { name: 'Cidade Zeta', logo: null },
  { name: 'Cidade Eta', logo: null },
  { name: 'Cidade Theta', logo: null },
  { name: 'Cidade Iota', logo: null },
  { name: 'Cidade Kappa', logo: null },
];

// Duplicar o array para criar um loop infinito suave
const duplicatedCities = [...cities, ...cities];

const CitiesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-zinc-300">
            <MapPin size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Parceiros Confiáveis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cidades que já usaram nosso sistema
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Servidores de FiveM que aumentaram o faturamento com o Whitelist Pay
          </p>
        </div>

        {/* Animated Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Animation */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-cities">
              {duplicatedCities.map((city, index) => (
                <div
                  key={`${city.name}-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 w-[200px] h-[140px] flex flex-col items-center justify-center group">
                    {city.logo ? (
                      <img
                        src={city.logo}
                        alt={city.name}
                        className="max-w-full max-h-16 object-contain mb-3 opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors">
                        <Building2 className="w-8 h-8 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                      </div>
                    )}
                    <p className="text-sm font-semibold text-white text-center group-hover:text-zinc-100 transition-colors">
                      {city.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;

