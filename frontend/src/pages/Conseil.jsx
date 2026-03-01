import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Lightbulb, Target, ShieldCheck, BarChart } from 'lucide-react';

const Conseil = () => {
  // On extrait t (les traductions) du contexte
  const { t } = useLanguage();
  
  // SÉCURITÉ : On pointe exactement là où sont les données dans ton mockData.js
  const content = t?.services?.conseil;

  return (
    <div className=\"min-h-screen bg-white\">
      {/* SEO dynamique avec les données du fichier de traduction */}
      <SEO 
        title={`${t?.nav?.conseil || 'Conseil'} | MBK Procurement`} 
        description={content?.title}
      />

      {/* Hero Section Page */}
      <section className=\"bg-[#0A192F] pt-40 pb-20 text-white px-6\">
        <div className=\"max-w-7xl mx-auto\">
          <span className=\"text-blue-500 font-bold tracking-[0.3em] uppercase text-xs\">
            {t?.nav?.conseil}
          </span>
          <h1 className=\"text-4xl md:text-6xl font-serif font-bold mt-6 mb-8 uppercase leading-tight\">
            {content?.title}
          </h1>
          <div className=\"h-1 w-20 bg-blue-600\"></div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className=\"py-24 px-6\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"grid lg:grid-cols-2 gap-16 items-start\">
            <div>
              <h2 className=\"text-2xl font-serif font-bold text-[#0A192F] mb-6 uppercase tracking-tight\">
                Expertise Métier
              </h2>
              <p className=\"text-xl text-gray-600 font-light leading-relaxed mb-10 italic border-l-4 border-blue-600 pl-6\">
                {t?.hero?.description}
              </p>
            </div>

            {/* Liste des expertises tirée directement de ton mockData */}
            <div className=\"bg-gray-50 p-10 shadow-sm border border-gray-100\">
              <h3 className=\"font-bold text-[#0A192F] uppercase text-xs tracking-[0.2em] mb-8\">
                Domaines d'intervention
              </h3>
              <ul className=\"space-y-6\">
                {content?.items?.map((item, index) => (
                  <li key={index} className=\"flex items-start gap-4\">
                    <div className=\"mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0\" />
                    <span className=\"text-gray-700 font-light leading-snug\">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact Rapide */}
      <section className=\"py-20 bg-[#0A192F] text-center px-6\">
        <h3 className=\"text-white text-2xl
