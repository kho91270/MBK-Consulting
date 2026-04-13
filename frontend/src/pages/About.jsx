import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
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
      
      <div className="min-h-screen bg-white font-sans text-[#0A192F] overflow-x-hidden">
        
        {/* Header - Ajusté pour éviter l'espace blanc avec Breadcrumbs fixed */}
        <header className="pt-32 sm:pt-48 pb-10 sm:pb-16 px-6 sm:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-none">
            {content.title && (
              <>
                {content.title}<span className="text-blue-600">.</span>
              </>
            )}
          </h1>
        </header>

        {/* Section Hero / Philosophie */}
        <section className="relative w-full h-[50vh] sm:h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="Structure MBK Procurement"
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <p className="max-w-4xl text-xl sm:text-3xl md:text-5xl !font-serif italic text-white leading-tight">
              "{content.philosophy}"
            </p>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-16 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
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

        {/* Identité & Méthodologie */}
        <section className="py-16 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 border-t border-gray-100">
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-10">
            <h2 className="text-3xl !font-serif !font-bold mb-6 italic tracking-tighter">
              {content.adnTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.adnDescription}
            </p>
          </div>
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-10">
            <h2 className="text-3xl !font-serif !font-bold mb-6 italic tracking-tighter">
              {content.methodTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.methodDescription}
            </p>
          </div>
        </section>

        {/* Engagements */}
        <section className="bg-gray-50 py-16 sm:py-32 px-6 sm:px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-16">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4">
                  {content.commitmentResultTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentResultText}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4">
                  {content.commitmentTransferTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentTransferText}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4">
                  {content.commitmentConfidentialityTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentConfidentialityText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CTA STANDARDISÉE */}
        <section className="py-24 bg-[#0A192F] px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-6">
              {language === 'fr' ? 'Discutons de votre situation' : "Let's discuss your situation"}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light italic mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "Contactez-nous dès aujourd'hui pour discuter de vos projets"
                : "Contact us today to discuss your projects"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <button
                onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                className="flex items-center justify-center gap-4 bg-transparent border-2 border-gray-700 text-white hover:border-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all"
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
