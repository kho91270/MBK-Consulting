import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceLayout = ({ content, label, imageUrl }) => {
  const { t, language } = useLanguage();

  if (!content || !content.items) return null;

  return (
    <div className="min-h-screen bg-white !font-sans text-[#0A192F]">
      {/* HEADER */}
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <span className="h-px w-16 bg-blue-600"></span>
          <span className="text-sm md:text-base uppercase tracking-[0.5em] text-blue-600 font-bold">
            {label}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl !font-serif !font-bold tracking-tighter leading-[0.9] !italic mb-10">
          {content.title}<span className="text-blue-600">.</span>
        </h1>
        
        <p className="max-w-4xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed !italic border-l-4 border-blue-50 pl-10">
          {content.lead}
        </p>
      </header>

      {/* VISUEL */}
      <section className="relative w-full h-[65vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
        <img src={imageUrl} alt={content.title} className="w-full h-full object-cover opacity-60 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </section>

      {/* ITEMS DE SERVICE */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-24">
          {content.items.map((item, idx) => (
            <div key={idx} className="flex flex-col border-t-2 border-gray-100 pt-12 group hover:border-blue-600 transition-colors duration-700">
              
              {/* LA TYPO FORCÉE ICI */}
              <h3 className="text-3xl md:text-4xl !font-serif !font-bold leading-tight mb-8 !italic tracking-tight">
                {item}<span className="text-blue-600">.</span>
              </h3>
              
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed !italic border-l-2 border-blue-50 pl-6">
                <p>
                  {content.descriptions && content.descriptions[idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
