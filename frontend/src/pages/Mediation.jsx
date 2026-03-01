import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scale, Users2, Briefcase } from 'lucide-react';

const Mediation = () => {
  const { t } = useLanguage();
  const content = t?.services?.mediation;

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 z-0" />
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-10 uppercase tracking-widest">
              {content?.title}
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                {content?.items?.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border-l-2 border-blue-600 bg-gray-50">
                    <Scale className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-[#0A192F] uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {content?.items?.slice(3).map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border-l-2 border-gray-300">
                    <Users2 className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-light text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediation;
