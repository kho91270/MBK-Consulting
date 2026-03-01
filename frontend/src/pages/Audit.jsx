import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8 uppercase tracking-tight">
          {content?.title}
        </h1>
        <div className="h-1 w-20 bg-blue-600 mb-12"></div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-10 border border-gray-100">
            <ul className="space-y-6">
              {content?.items?.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
