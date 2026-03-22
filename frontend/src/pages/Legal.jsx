import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Legal = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Mentions Légales",
      sections: [
        { h: "Éditeur du site", p: "MBK Procurement, Cabinet de Conseil en Achats Stratégiques. Siège social : Luxembourg. Immatriculation : [Votre N° SIRET/Registre]." },
        { h: "Direction de la publication", p: "Le site est édité et dirigé par la Direction de MBK Procurement." },
        { h: "Hébergement", p: "Ce site est hébergé par GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr St, San Francisco, CA 94107, USA)." }
      ]
    },
    en: {
      title: "Legal Notice",
      sections: [
        { h: "Site Editor", p: "MBK Procurement, Strategic Sourcing Consultancy. Head Office: Luxembourg. Registration: [Your Registration Number]." },
        { h: "Publication Director", p: "The site is edited and managed by MBK Procurement Management." },
        { h: "Hosting", p: "This site is hosted by GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr St, San Francisco, CA 94107, USA)." }
      ]
    }
  };

  const active = content[language];

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F] pt-48 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl !font-serif !font-bold !italic tracking-tighter mb-20">
          {active.title}<span className="text-blue-600">.</span>
        </h1>
        <div className="space-y-16">
          {active.sections.map((s, i) => (
            <div key={i} className="border-t border-gray-100 pt-8">
              <h2 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-4">{s.h}</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed italic">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legal;
