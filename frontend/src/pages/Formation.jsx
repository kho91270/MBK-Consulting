import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap } from 'lucide-react';

const Formation = () => {
  const { t } = useLanguage();
  const content = t?.services?.formation;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold underline underline-offset-8 decoration-blue-600/20">
          Knowledge Transfer // 03
        </span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-12 tracking-tighter uppercase leading-none">
          {content?.title}
        </h1>
      </header>

      <section className="w-full h-[50vh] bg-gray-100 grayscale contrast-125 brightness-75 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000" 
          alt="MBK Academy" 
          className="w-full h-full object-cover"
        />
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <GraduationCap className="w-12 h-12 text-blue-600 mb-8 opacity-20" />
          <h2 className="text-3xl font-serif text-[#0A192F] leading-tight italic">
            "Le capital humain est le seul levier de performance qui ne se déprécie pas."
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="p-8 border border-gray-100 hover:bg-[#0A192F] hover:text-white transition-all duration-500 group flex justify-between items-center">
              <p className="text-lg font-light tracking-tight">{item}</p>
              <span className="text-[9px] font-mono text-gray-300 group-hover:text-blue-500">PRO_CERT_{idx+1}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Formation;
