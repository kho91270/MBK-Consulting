import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Mediation = () => {
  const { t } = useLanguage();
  const content = t?.services?.mediation;

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8 uppercase tracking-tighter">
          {content?.title}
        </h1>
        <div className="h-1 w-20 bg-blue-600 mb-12"></div>
        <div className="bg-gray-50 p-12 border-l-8 border-blue-600 shadow-sm">
          <ul className="grid md:grid-cols-2 gap-6">
            {content?.items?.map((item, index) => (
              <li key={index} className="text-gray-700 font-light flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mediation;
