import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  const content = t?.about;

  if (!content) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Institutionnel */}
      <header className="pt-48 pb-16 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.6em] text-blue-600 font-bold mb-6 block">
          {language === 'fr' ? 'LE CABINET' : 'THE FIRM'} // 06
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0A192F] tracking-tighter uppercase leading-[0.85]">
          {content.title}
        </h1>
      </header>

      {/* SECTION VISION : Image immersive et texte de positionnement */}
      <section className="relative w-full h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Corporate Architecture MBK" 
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p className="max-w-4xl text-center text-2xl md:text-4xl font-serif italic text-white leading-tight">
            "{content.philosophy}"
          </p>
        </div>
      </section>

      {/* SECTION ADN & MÉTHODOLOGIE : Grid standardisée */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          
          {/* ADN // 01 */}
          <div className="flex flex-col border-t border-gray-100 pt-12">
            <span className="text-[10px] text-blue-600 font-bold tracking-[0.4em] mb-8 block uppercase">
              {language === 'fr' ? 'IDENTITÉ' : 'IDENTITY'} // 01
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0A192F] mb-6 uppercase tracking-tighter">
              {content.adnTitle}
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed italic">
              {content.adnDescription}
            </p>
          </div>

          {/* MÉTHODE // 02 */}
          <div className="flex flex-col border-t border-gray-100 pt-12">
            <span className="text-[10px] text-blue-600 font-bold tracking-[0.4em] mb-8 block uppercase">
              {language === 'fr' ? 'STANDARDS' : 'STANDARDS'} // 02
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0A192F] mb-6 uppercase tracking-tighter">
              {content.methodTitle}
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed italic">
              {content.methodDescription}
            </p>
          </div>

        </div>

        {/* SECTION FOOTNOTE : Expertise technique */}
        <div className="mt-32 p-16 bg-gray-50 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="max-w-md">
              <h4 className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Focus</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                {language === 'fr' 
                  ? "Nous intervenons sur les enjeux complexes de Supply Chain et de Sourcing International avec une approche axée sur le ROI."
                  : "We operate on complex Supply Chain and International Sourcing issues with a ROI-driven approach."}
              </p>
           </div>
           <div className="h-px w-24 bg-blue-600 hidden md:block"></div>
           <div className="text-right">
              <span className="text-4xl font-serif font-bold text-[#0A192F] block italic tracking-tighter">MBK.</span>
              <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400">EMEA Excellence</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
