import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BarChart3, CheckCircle2, Search } from 'lucide-react';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A192F] pt-48 pb-32 text-white px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-bold mb-8 block">Diagnostic Services // 02</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-12 tracking-tighter uppercase leading-[0.9]">
            {content?.title}
          </h1>
          <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed border-l border-white/10 pl-8">
            Évaluation rigoureuse des processus, de la conformité et de l'efficience opérationnelle pour identifier les leviers de valeur inexploités.
          </p>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="group border-b border-gray-100 pb-12 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Search className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] font-mono text-gray-300">STRATEGIC_SCAN_{idx + 1}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A192F] mb-4 italic">Analysis Pillar</h3>
              <p className="text-gray-600 font-light leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Audit;
