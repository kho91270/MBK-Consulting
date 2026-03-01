import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award } from 'lucide-react';

const Formation = () => {
  const { t } = useLanguage();
  const content = t?.services?.formation;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-24 px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">Knowledge Transfer // 03</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-8 tracking-tighter uppercase">
            {content?.title}
          </h1>
        </div>
      </section>

      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-[#0A192F]">Professionnalisation des filières Achats.</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed italic">
                "Le capital humain est le seul actif capable de transformer une stratégie en résultats tangibles."
              </p>
            </div>
            <div className="bg-white p-12 shadow-2xl space-y-8">
              {content?.items?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <p className="text-[#0A192F] font-bold text-sm uppercase tracking-widest leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formation;
