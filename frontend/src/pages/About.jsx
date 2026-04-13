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
      <div className="min-h-screen bg-white font-sans text-[#0A192F]">
        <header className="pt-28 lg:pt-48 pb-10 lg:pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-[0.85]">
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

        {/* Notre histoire */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl !font-serif !font-bold italic tracking-tighter mb-12">
            {content.historyTitle}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.historyText}
            </p>
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.historyText2}
            </p>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 border-t border-gray-100">
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

        {/* Chiffres Clés */}
        <section className="py-24 bg-[#0A192F] px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-16">
              {language === 'fr' ? 'En chiffres' : 'By the numbers'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-0 border-t border-gray-800">
              <div className="border-r border-gray-800 p-10">
                <div className="text-5xl font-serif italic text-white mb-3">15+</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? "Années d'expérience" : 'Years of experience'}
                </p>
              </div>
              <div className="border-r border-gray-800 p-10">
                <div className="text-5xl font-serif italic text-white mb-3">50+</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Missions réalisées' : 'Completed missions'}
                </p>
              </div>
              <div className="border-r border-gray-800 p-10">
                <div className="text-5xl font-serif italic text-white mb-3">8</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Pays couverts' : 'Countries covered'}
                </p>
              </div>
              <div className="p-10">
                <div className="text-5xl font-serif italic text-white mb-3">96%</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Conformité atteinte' : 'Compliance achieved'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secteurs d'intervention */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-16">
            {language === 'fr' ? "Secteurs d'intervention" : 'Sectors of expertise'}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                {language === 'fr' ? 'Distribution & Retail' : 'Distribution & Retail'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Optimisation des achats indirects, gestion des appels d'offres multi-pays et pilotage de la performance fournisseurs pour les enseignes de distribution européennes."
                  : "Indirect procurement optimization, multi-country tender management and supplier performance monitoring for European retail chains."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                {language === 'fr' ? 'Logistique & Supply Chain' : 'Logistics & Supply Chain'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Transfert de sites, sourcing de prestataires logistiques, aménagement d'entrepôts et optimisation des flux de distribution à l'échelle européenne."
                  : "Site relocation, logistics provider sourcing, warehouse fit-out and distribution flow optimization across Europe."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                Facility Management<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Structuration et mise en concurrence des contrats FM, suivi de la performance opérationnelle et identification de sous-traitants spécialisés sur les marchés européens."
                  : "FM contract structuring and tendering, operational performance tracking and identification of specialized subcontractors across European markets."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                {language === 'fr' ? 'Industrie & Production' : 'Industry & Manufacturing'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Sécurisation des chaînes d'approvisionnement critiques, négociation de contrats-cadres et audit de la maturité achats des organisations industrielles."
                  : "Critical supply chain security, framework agreement negotiation and procurement maturity audits for industrial organizations."}
              </p>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-16">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-16">
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4 tracking-tight">
                  {content.commitmentResultTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentResultText}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4 tracking-tight">
                  {content.commitmentTransferTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentTransferText}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4 tracking-tight">
                  {content.commitmentConfidentialityTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentConfidentialityText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation + CTA */}
        <section className="py-24 bg-[#0A192F] px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-lg font-light italic leading-relaxed mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "L'excellence opérationnelle n'est pas une option, c'est le socle de notre engagement envers votre EBITDA."
                : "Operational excellence is not an option; it is the foundation of our commitment to your EBITDA."}
            </p>
            <span className="text-5xl !font-serif !font-bold italic tracking-tighter text-white">MBK<span className="text-blue-600">.</span></span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
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
