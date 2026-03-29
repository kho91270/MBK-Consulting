import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const About = () => {
  const { t, language } = useLanguage();
  const content = t?.about;
  if (!content) return null;

  return (
    <>
      <SEO
        title="Le Cabinet"
        description="MBK Procurement : identité stratégique et standards d'excellence. Cabinet né de la conviction que les achats sont le moteur secret de la rentabilité."
        canonical="https://www.mbkprocurement.com/about"
        keywords="cabinet conseil achats Paris, expertise procurement, consultant achats senior"
      />
      <div className="min-h-screen bg-white font-sans text-[#0A192F]">
        <header className="pt-48 pb-16 px-8 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-[0.85]">
            {content.title}<span className="text-blue-600">.</span>
          </h1>
        </header>

        <section className="relative w-full h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="Structure architecturale solide représentant les fondations et l'expertise stratégique du cabinet MBK Procurement."
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <p className="max-w-4xl text-center text-2xl md:text-5xl !font-serif italic text-white leading-tight">
              "{content.philosophy}"
            </p>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-12">
            <h2 className="text-4xl !font-serif !font-bold mb-8 italic tracking-tighter">
              {content.adnTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.adnDescription}
            </p>
          </div>
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-12">
            <h2 className="text-4xl !font-serif !font-bold mb-8 italic tracking-tighter">
              {content.methodTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.methodDescription}
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-md">
              <p className="text-gray-400 text-lg font-light italic leading-relaxed">
                {language === 'fr'
                  ? "L'excellence opérationnelle n'est pas une option, c'est le socle de notre engagement envers votre EBITDA."
                  : "Operational excellence is not an option; it is the foundation of our commitment to your EBITDA."}
              </p>
            </div>
            <div className="text-right">
              <span className="text-5xl !font-serif !font-bold italic tracking-tighter">MBK<span className="text-blue-600">.</span></span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
