import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const { t, language } = useLanguage();
  const content = t?.about;

  // PROTECTION CRITIQUE : Empêche le rendu du "point bleu" seul avant chargement
  if (!content) return null;

  return (
    <>
      <SEO
        title="Le Cabinet"
        description="MBK Procurement : identité stratégique et standards d'excellence."
        canonical="https://www.mbkprocurement.com/about"
      />
      
      {/* overflow-x-hidden pour bloquer les décalages horizontaux sur mobile */}
      <div className="min-h-screen bg-white font-sans text-[#0A192F] overflow-x-hidden">
        
        {/* HEADER : On ajuste le padding top. 
            Le Breadcrumbs est à top-20 (80px). 
            On ajoute juste ce qu'il faut pour que le titre h1 soit élégant en dessous.
        */}
        <header className="pt-32 sm:pt-40 md:pt-48 pb-12 px-6 sm:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-tight">
            {content.title && (
              <>
                {content.title}<span className="text-blue-600">.</span>
              </>
            )}
          </h1>
        </header>

        {/* SECTION IMAGE : On s'assure qu'elle n'est pas poussée par des marges fantômes */}
        <section className="relative w-full h-[50vh] sm:h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="MBK Architecture"
            loading="lazy"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 text-center">
            {content.philosophy && (
              <p className="max-w-4xl text-xl sm:text-3xl md:text-5xl !font-serif italic text-white leading-tight">
                "{content.philosophy}"
              </p>
            )}
          </div>
        </section>

        {/* HISTOIRE & ADN */}
        <section className="py-20 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl !font-serif !font-bold italic tracking-tighter mb-12">
            {content.historyTitle}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6 sm:pl-10">
              {content.historyText}
            </p>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6 sm:pl-10">
              {content.historyText2}
            </p>
          </div>
        </section>

        {/* ENGAGEMENTS : Structure simplifiée pour forcer l'affichage */}
        <section className="bg-gray-50 py-20 sm:py-32 px-6 sm:px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-16">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { t: content.commitmentResultTitle, x: content.commitmentResultText },
                { t: content.commitmentTransferTitle, x: content.commitmentTransferText },
                { t: content.commitmentConfidentialityTitle, x: content.commitmentConfidentialityText }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <h3 className="text-xl font-serif font-bold italic mb-4">
                    {item.t}<span className="text-blue-600">.</span>
                  </h3>
                  <p className="text-gray-500 font-light italic leading-relaxed">
                    {item.x}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-[#0A192F] px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 text-lg font-light italic mb-10">
              {language === 'fr' 
                ? "L'excellence opérationnelle n'est pas une option." 
                : "Operational excellence is not an option."}
            </p>
            <span className="text-5xl font-serif font-bold italic text-white">MBK<span className="text-blue-600">.</span></span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
