import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Formation = () => {
  const { t } = useLanguage();
  const content = t?.services?.formation;

  return (
    <div className="min-h-screen bg-white pt-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-6 uppercase tracking-tighter">
            {content?.title}
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {content?.items?.map((item, index) => (
            <div key={index} className="relative p-10 border border-gray-100 flex flex-col items-center text-center group hover:bg-[#0A192F] transition-colors duration-500">
              <Award className="w-6 h-6 text-blue-600 mb-6 group-hover:text-white" />
              <p className="text-gray-700 font-light group-hover:text-white transition-colors italic">"{item}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formation;
