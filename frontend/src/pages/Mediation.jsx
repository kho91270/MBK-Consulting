import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Scale, Users, MessageSquare } from 'lucide-react';

const Mediation = () => {
  // Sécurité : extraction de t et language
  const { t, language } = useLanguage();
  const m = t.mediation;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t.nav.mediation} | MBK Procurement`} />
      
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
            {t.nav.mediation}
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed italic">
            {m.intro}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 bg-gray-50 border border-gray-100">
            <Scale className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-lg font-bold text-[#0A192F] mb-4 uppercase tracking-widest">
              {language === 'fr' ? "Équilibre" : "Balance"}
            </h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {language === 'fr' 
                ? "Résolution impartiale des litiges fournisseurs." 
                : "Impartial resolution of supplier disputes."}
            </p>
          </div>
          {/* Tu peux ajouter d'autres blocs ici */}
        </div>
      </div>
    </div>
  );
};

export default Mediation;
