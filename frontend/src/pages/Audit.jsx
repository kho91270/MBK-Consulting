import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0A192F] mb-8 tracking-tighter uppercase">
          {content?.title}
        </h1>
        <div className="h-px w-32 bg-blue-600"></div>
      </header>

      <main className="pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="flex flex-col border-t border-gray-100 pt-8 group">
              <span className="text-[10px] text-gray-400 font-bold tracking-[0.3em] mb-6 transition-colors group-hover:text-blue-600">
                POINT DE CONTRÔLE 0{idx + 1}
              </span>
              <p className="text-2xl font-serif text-[#0A192F] font-bold leading-tight mb-4 italic">
                {item.split('&')[0]}
              </p>
              <p className="text-gray-500 font-light text-sm leading-relaxed max-w-md">
                Analyse structurelle des flux et optimisation des processus transactionnels pour une efficience maximale.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Audit;
