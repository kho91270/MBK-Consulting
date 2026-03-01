import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap } from 'lucide-react';

const Formation = () => {
  const { t } = useLanguage();
  const content = t?.services?.formation;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-48 pb-32 px-8 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <GraduationCap className="w-12 h-12 text-blue-500 mx-auto mb-8 opacity-50" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter uppercase mb-8">
            {content?.title}
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-5xl mx-auto">
        <div className="space-y-4">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="bg-white p-8 border-l-4 border-blue-600 shadow-sm flex justify-between items-center group hover:bg-white/50 transition-colors">
              <p className="text-[#0A192F] font-serif text-xl italic">{item}</p>
              <span className="text-[10px] font-mono text-gray-300">MOD_0{idx+1}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Formation;
