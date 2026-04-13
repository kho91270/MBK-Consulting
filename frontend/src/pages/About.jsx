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
        
        {/* Header - Padding réduit pour mobile pour éviter l'espace blanc sous la navbar */}
        <header className="pt-10 sm:pt-28 lg:pt-40 pb-6 sm:pb-10 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-tight">
            {content.title}{content.title && <span className="text-blue-600">.</span>}
          </h1>
        </header>

        {/* Hero Section - Image de fond */}
        <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="Structure architecturale solide"
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
            <p className="max-w-4xl text-center text-xl sm:text-2xl md:text-5xl !font-serif italic text-white leading-tight">
              "{content.philosophy}"
            </p>
          </div>
        </section>

        {/* Identité Stratégique / Histoire */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl !font-serif !font-bold italic tracking-tighter mb-8 sm:mb-12">
            {content.historyTitle}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.historyText}
            </p>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.historyText2}
            </p>
          </div>
        </section>

        {/* ADN & Méthodologie */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 border-t border-gray-100">
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl !font-serif !font-bold mb-6 sm:mb-8 italic tracking-tighter">
              {content.adnTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.adnDescription}
            </p>
          </div>
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl !font-serif !font-bold mb-6 sm:mb-8 italic tracking-tighter">
              {content.methodTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-6">
              {content.methodDescription}
            </p>
          </div>
        </section>

        {/* Chiffres Clés */}
        <section className="py-16 md:py-24 bg-[#0A192F] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-12">
              {language === 'fr' ? 'En chiffres' : 'By the numbers'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-800">
              {[
                { val: '15+', label: language === 'fr' ? "Années d'expérience" : 'Years of experience' },
                { val: '50+', label: language === 'fr' ? 'Missions réalisées' : 'Completed missions' },
                { val: '8', label: language === 'fr' ? 'Pays couverts' : 'Countries covered' },
                { val: '96%', label: language === 'fr' ? 'Conformité atteinte' : 'Compliance achieved' }
              ].map((stat, i) => (
                <div key={i} className="border-r border-b border-gray-800 p-6 md:p-10 last:border-r-0">
                  <div className="text-3xl sm:text-5xl font-serif italic text-white mb-2">{stat.val}</div>
                  <p className="text-gray-500 text-xs sm:text-sm font-light uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secteurs d'intervention */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-12">
            {language === 'fr' ? "Secteurs d'intervention" : 'Sectors of expertise'}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { 
                title: 'Distribution & Retail', 
                fr: "Optimisation des achats indirects, gestion des appels d'offres multi-pays et pilotage de la performance fournisseurs.",
                en: "Indirect procurement optimization, multi-country tender management and supplier performance monitoring."
              },
              { 
                title: 'Logistique & Supply Chain', 
                fr: "Transfert de sites, sourcing de prestataires logistiques et aménagement d'entrepôts à l'échelle européenne.",
                en: "Site relocation, logistics provider sourcing and warehouse fit-out across Europe."
              },
              { 
                title: 'Facility Management', 
                fr: "Structuration et mise en concurrence des contrats FM, suivi de la performance opérationnelle.",
                en: "FM contract structuring and tendering, operational performance tracking."
              },
              { 
                title: 'Industrie & Production', 
                fr: "Sécurisation des chaînes d'approvisionnement critiques et audit de la maturité achats.",
                en: "Critical supply chain security and procurement maturity audits."
              }
            ].map((sector, i) => (
              <div key={i} className="border-t-2 border-gray-100 pt-8">
                <h3 className="text-xl sm:text-2xl font-serif italic font-bold mb-4">
                  {sector.title}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {language === 'fr' ? sector.fr : sector.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-[#0A192F] px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 text-lg font-light italic mb-12">
              {language === 'fr'
                ? "L'excellence opérationnelle n'est pas une option, c'est le socle de notre engagement envers votre EBITDA."
                : "Operational excellence is not an option; it is the foundation of our commitment to your EBITDA."}
            </p>
            <span className="text-5xl font-serif font-bold italic text-white">MBK<span className="text-blue-600">.</span></span>
            <div className="flex flex-col sm:row gap-4 justify-center mt-12">
              <Link to="/contact" className="inline-flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
