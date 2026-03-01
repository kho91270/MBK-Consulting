import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ShieldCheck } from 'lucide-react';

const Privacy = () => {
  const { t } = useLanguage();
  const p = t.privacy;
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${p.title} | MBK Procurement`} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#0A192F] mb-8 border-b pb-4">{p.title}</h1>
        <div className="flex items-center gap-4 p-6 bg-blue-50 border-l-4 border-blue-600 mb-10">
          <ShieldCheck className="text-blue-600" />
          <p className="text-sm italic">{p.intro}</p>
        </div>
        <div className="bg-gray-50 p-8 border border-gray-100">
          <h2 className="font-bold mb-4 uppercase text-xs tracking-widest">{p.dataTitle}</h2>
          <p className="text-sm font-light leading-relaxed">{p.dataDesc}</p>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
