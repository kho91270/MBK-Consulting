import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ClipboardCheck, BarChart3, ShieldAlert, Zap } from 'lucide-react';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A192F] pt-40 pb-20 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 uppercase tracking-tight">
            {content?.title}
          </h1>
          <p className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs">MBK Performance Diagnostic</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-[#0A192F]">Identification des gisements de productivité</h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {t?.hero?.description?.split('.')[0]}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {content?.items?.map((item, index) => (
              <div key={index} className="p-8 bg-gray-50 border-b-4 border-blue-600 hover:shadow-xl transition-all group">
                <ClipboardCheck className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-[#0A192F] font-bold text-sm leading-snug uppercase tracking-wide">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Audit;
