import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Formation = () => {
  const { t } = useLanguage();
  const content = t?.services?.formation;

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8 uppercase">
          {content?.title}
        </h1>
        <div className="bg-[#0A192F] p-12 text-white max-w-4xl mx-auto">
          <ul className="text-left space-y-4 inline-block">
            {content?.items?.map((item, index) => (
              <li key={index} className="font-light italic text-lg opacity-90">• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Formation;
