import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BarChart3, Search, ShieldCheck, FileText } from 'lucide-react';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A192F] pt-48 pb-32 text-white px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-bold mb-8 block">Diagnostic & Performance</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-12 tracking-tighter uppercase leading-[0.9]">
            {content?.title || "Diagnostic & Audit 360°"}
          </h1>
          <p className="max-w-3xl text-xl text-gray-400 font-light leading-relaxed border-l border-white/10 pl-8 italic">
            "L'audit MBK n'est pas un simple constat, c'est une cartographie précise de vos gisements de productivité et de vos risques critiques."
          </p>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="group p-10 border border-gray-100 hover:border-blue-600 transition-all bg-gray-50/50">
              <div className="flex items-start gap-6">
                <span className="text-blue-600 font-mono text-xs">0{idx + 1}</span>
                <div>
                  <h3 className="text-[#0A192F] font-bold text-sm uppercase tracking-widest mb-4">Axe d'intervention</h3>
                  <p className="text-gray-600 font-light text-lg leading-snug">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Audit;
