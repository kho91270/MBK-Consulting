import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ShieldCheck, Lock, EyeOff, UserCheck } from 'lucide-react';

const Privacy = () => {
  const { t, language } = useLanguage();
  const p = t.privacy;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      {/* Configuration SEO pour la confidentialité */}
      <SEO 
        title={`${p.title} | MBK Procurement`} 
        description={p.intro}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* En-tête de page */}
        <header className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#0A192F] mb-6 border-b border-gray-100 pb-6">
            {p.title}
          </h1>
          <div className="flex items-center gap-4 p-6 bg-blue-50 border-l-4 border-blue-600">
            <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <p className="text-gray-700 italic font-light leading-relaxed">
              {p.intro}
            </p>
          </div>
        </header>

        {/* Corps de la politique */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Section 1 : Collecte */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-blue-600" />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A192F]">
                {p.dataTitle}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-sm">
              {p.dataDesc}
            </p>
          </section>

          {/* Section 2 : Vos Droits */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A192F]">
                {p.rightsTitle}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-sm">
              {p.rightsDesc}
            </p>
          </section>

          {/* Section 3 : Cookies & Traçage (Ajout Qualité Grand Cabinet) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <EyeOff className="w-5 h-5 text-blue-600" />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A192F]">
                {language === 'fr' ? "Cookies" : "Cookies Policy"}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-sm">
              {language === 'fr' 
                ? "Ce site utilise uniquement des cookies techniques nécessaires à la navigation et à la gestion de la langue. Aucune donnée de traçage publicitaire n'est collectée."
                : "This site only uses technical cookies necessary for navigation and language management. No advertising tracking data is collected."}
            </p>
          </section>

          {/* Section 4 : Conservation */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A192F]">
                {language === 'fr' ? "Conservation" : "Data Retention"}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-sm">
              {language === 'fr' 
                ? "Les données collectées via le formulaire de contact sont conservées pour une durée maximale de 3 ans après le dernier contact commercial."
                : "Data collected via the contact form is kept for a maximum of 3 years after the last commercial contact."}
            </p>
          </section>

        </div>

        {/* Footer de la page Privacy */}
        <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 font-light tracking-widest uppercase">
            {language === 'fr' 
              ? "Dernière mise à jour : Mars 2026" 
              : "Last updated: March 2026"}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
