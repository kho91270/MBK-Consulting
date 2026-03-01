import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  // IMPORTANT : On va chercher dans t.pages car c'est comme ça que ton mockData est fait
  const content = t?.pages?.conseil;

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
          {content?.title}
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed italic border-l-4 border-blue-600 pl-6">
          {content?.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {content?.benefits?.map((benefit, idx) => (
            <div key={idx} className="bg-gray-50 p-8 border border-gray-100">
              <h4 className="font-bold text-blue-600 uppercase text-[10px] tracking-[0.2em] mb-4">
                {benefit.title}
              </h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conseil;
