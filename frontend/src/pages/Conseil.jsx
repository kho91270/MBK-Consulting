import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  // On récupère t du contexte
  const { t } = useLanguage();
  
  // SÉCURITÉ : On pointe vers t.services.conseil (structure de ton mockData.js)
  // On utilise ?. pour éviter les erreurs si la donnée est absente
  const content = t?.services?.conseil;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Titre de la page */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8 uppercase">
          {content?.title || "Ingénierie Sourcing"}
        </h1>
        
        {/* Ligne bleue décorative */}
        <div className="h-1 w-20 bg-blue-600 mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Colonne gauche : Description */}
          <div>
            <p className="text-xl text-gray-600 font-light leading-relaxed italic border-l-4 border-blue-600 pl-6 mb-8">
              {t?.hero?.description}
            </p>
          </div>

          {/* Colonne droite : Liste des points (items) */}
          <div className="bg-gray-50 p-10 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#0A192F] uppercase text-xs tracking-widest mb-8">
              Expertises
            </h3>
            <ul className="space-y-6">
              {content?.items?.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conseil;
