import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title={language === 'fr' ? 'Cas Clients' : 'Case Studies'}
        description="Découvrez comment MBK Procurement a accompagné des leaders européens : Kingfisher, Logista, SBFM."
        canonical="https://www.mbkprocurement.com/case-studies"
      />
      <div className="min-h-screen bg-white font-sans text-[#0A192F]">
        <header className="pt-20 sm:pt-28 lg:pt-48 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-8xl font-serif font-bold tracking-tighter italic leading-[0.9] mb-6 sm:mb-8">
            {language === 'fr' ? 'Cas Clients' : 'Case Studies'}<span className="text-blue-600">.</span>
          </h1>
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-500 font-light leading-relaxed italic">
            {language === 'fr'
              ? "Des missions concrètes, des résultats mesurables. Voici comment nous avons accompagné des leaders européens dans la transformation de leur fonction achats."
              : "Concrete missions, measurable results. Here's how we supported European leaders in transforming their procurement function."}
          </p>
        </header>

        <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[55vh] bg-[#0A192F] overflow-hidden grayscale contrast-125 border-y border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp"
            alt={language === 'fr' ? 'Références clients MBK Procurement' : 'MBK Procurement client references'}
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
          />
        </section>

        <section className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 sm:gap-12 md:gap-16">
            <div className="border-t-2 border-gray-100 pt-8 sm:pt-10">
              <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                {language === 'fr' ? "Appels d'offres & Contrats" : 'Tenders & Contracts'}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold tracking-tight mb-4">Kingfisher</h2>
              <p className="text-gray-500 font-light leading-relaxed italic text-sm sm:text-base max-w-3xl">
                {language === 'fr'
                  ? "Management d'appels d'offres européens, gestion contractuelle fournisseurs et pilotage de la performance des contrats Facility Management."
                  : "European tender management, supplier contract management and FM contract performance monitoring."}
              </p>
            </div>

            <div className="border-t-2 border-gray-100 pt-8 sm:pt-10">
              <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                {language === 'fr' ? 'Logistique & Transfert' : 'Logistics & Transfer'}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold tracking-tight mb-4">Logista</h2>
              <p className="text-gray-500 font-light leading-relaxed italic text-sm sm:text-base max-w-3xl">
                {language === 'fr'
                  ? "Pilotage end-to-end du déménagement d'un site logistique : restitution de l'ancien site, aménagement complet du nouveau jusqu'à son exploitation opérationnelle."
                  : "End-to-end management of a logistics site relocation: handover of the former site, full fit-out of the new facility through to operational launch."}
              </p>
            </div>

            <div className="border-t-2 border-gray-100 pt-8 sm:pt-10">
              <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                {language === 'fr' ? 'Sourcing & Développement' : 'Sourcing & Development'}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold tracking-tight mb-4">SBFM</h2>
              <p className="text-gray-500 font-light leading-relaxed italic text-sm sm:text-base max-w-3xl">
                {language === 'fr'
                  ? "Sourcing stratégique pour le développement d'un nouveau marché en Europe et identification de sous-traitants spécialisés en Facility Management."
                  : "Strategic sourcing for European market expansion and identification of specialized Facility Management subcontractors."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24 bg-[#0A192F] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-6">
              {language === 'fr' ? 'Un projet similaire ?' : 'A similar project?'}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg font-light italic mb-8 sm:mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "Contactez-nous pour discuter de vos enjeux achats."
                : "Contact us to discuss your procurement challenges."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-3 sm:gap-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 sm:px-10 sm:py-5 text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all shadow-xl">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <button
                onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                className="flex items-center justify-center gap-3 sm:gap-4 bg-transparent border-2 border-gray-700 text-white hover:border-white px-6 py-4 sm:px-10 sm:py-5 text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all"
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

export default CaseStudies;
