import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const { t, language } = useLanguage();
  const content = t?.about;

  // Si le contenu n'est pas encore là, on ne rend rien pour éviter les flashs de points bleus
  if (!content) return null;

  return (
    <>
      <SEO
        title="Le Cabinet"
        description="MBK Procurement : identité stratégique et standards d'excellence."
        canonical="https://www.mbkprocurement.com/about"
        keywords="cabinet conseil achats Paris, expertise procurement"
      />
      
      <div className="min-h-screen bg-white font-sans text-[#0A192F] overflow-x-hidden">
        
        {/* HEADER : Réduction drastique du padding-top pour éviter l'espace blanc */}
        <header className="pt-24 sm:pt-32 md:pt-40 pb-8 sm:pb-16 px-6 sm:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-none">
            {/* Condition stricte : on n'affiche le point que si le titre existe */}
            {content.title && (
              <>
                {content.title}<span className="text-blue-600">.</span>
              </>
            )}
          </h1>
        </header>

        {/* SECTION PHOTO / PHILOSOPHIE */}
        <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="Structure architecturale"
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 text-center">
            {content.philosophy && (
              <p className="max-w-4xl text-xl sm:text-3xl md:text-5xl !font-serif italic text-white leading-tight">
                "{content.philosophy}"
              </p>
            )}
          </div>
        </section>

        {/* HISTOIRE & IDENTITÉ */}
        <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl !font-serif !font-bold italic tracking-tighter mb-10 sm:mb-12">
            {content.historyTitle}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6 sm:pl-8">
              {content.historyText}
            </p>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6 sm:pl-8">
              {content.historyText2}
            </p>
          </div>
        </section>

        {/* ADN & MÉTHODE */}
        <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 border-t border-gray-100">
          <div className="border-t-2 border-[#0A192F] pt-10">
            <h2 className="text-2xl sm:text-4xl !font-serif !font-bold mb-6 italic tracking-tighter">
              {content.adnTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.adnDescription}
            </p>
          </div>
          <div className="border-t-2 border-[#0A192F] pt-10">
            <h2 className="text-2xl sm:text-4xl !font-serif !font-bold mb-6 italic tracking-tighter">
              {content.methodTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.methodDescription}
            </p>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className="py-16 sm:py-24 bg-[#0A192F] px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold italic tracking-tighter text-white mb-12 sm:mb-16">
              {language === 'fr' ? 'En chiffres' : 'By the numbers'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-gray-800">
              {[
                { n: "15+", l: language === 'fr' ? "Années d'expérience" : "Years of exp." },
                { n: "50+", l: language === 'fr' ? "Missions" : "Missions" },
                { n: "8", l: language === 'fr' ? "Pays" : "Countries" },
                { n: "96%", l: language === 'fr' ? "Conformité" : "Compliance" }
              ].map((item, idx) => (
                <div key={idx} className="border-r border-b lg:border-b-0 border-gray-800 p-6 sm:p-10 last:border-r-0">
                  <div className="text-3xl sm:text-5xl font-serif italic text-white mb-2">{item.n}</div>
                  <p className="text-gray-500 text-xs sm:text-sm font-light uppercase tracking-widest">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGAGEMENTS : Fixé pour s'assurer que le contenu s'affiche */}
        <section className="bg-gray-50 py-16 sm:py-24 px-6 sm:px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-12 sm:mb-16">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12 sm:gap-16">
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4">{content.commitmentResultTitle}<span className="text-blue-600">.</span></h3>
                <p className="text-gray-500 font-light italic leading-relaxed">{content.commitmentResultText}</p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4">{content.commitmentTransferTitle}<span className="text-blue-600">.</span></h3>
                <p className="text-gray-500 font-light italic leading-relaxed">{content.commitmentTransferText}</p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4">{content.commitmentConfidentialityTitle}<span className="text-blue-600">.</span></h3>
                <p className="text-gray-500 font-light italic leading-relaxed">{content.commitmentConfidentialityText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 sm:py-32 bg-[#0A192F] px-6 sm:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 text-base sm:text-lg font-light italic mb-10 max-w-2xl mx-auto">
              {language === 'fr' 
                ? "L'excellence opérationnelle n'est pas une option, c'est le socle de notre engagement envers votre EBITDA."
                : "Operational excellence is the foundation of our commitment to your EBITDA."}
            </p>
            <span className="text-4xl sm:text-6xl !font-serif !font-bold italic text-white">MBK<span className="text-blue-600">.</span></span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              </Link>
              <button 
                onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement')}
                className="border-2 border-gray-700 text-white hover:border-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all"
              >
                {language === 'fr' ? 'Prendre rendez-vous' : 'Book a meeting'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
