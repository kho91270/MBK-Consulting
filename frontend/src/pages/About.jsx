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
        description="MBK Procurement : identité stratégique et standards d'excellence."
        canonical="https://www.mbkprocurement.com/about"
      />
      
      <div className="min-h-screen bg-white font-sans text-[#0A192F] overflow-x-hidden">
        
        {/* HEADER */}
        <header className="pt-32 sm:pt-40 md:pt-48 pb-10 sm:pb-16 px-6 sm:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-[0.85]">
            {content.title || "Le Cabinet"}<span className="text-blue-600">.</span>
          </h1>
        </header>

        {/* PHILOSOPHIE */}
        <section className="relative w-full h-[50vh] sm:h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="Structure MBK"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <p className="max-w-4xl text-xl sm:text-3xl md:text-5xl !font-serif italic text-white leading-tight">
              "{content.philosophy}"
            </p>
          </div>
        </section>

        {/* NOTRE HISTOIRE */}
        <section className="py-16 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl !font-serif !font-bold italic tracking-tighter mb-12">
            {content.historyTitle || "Notre histoire"}<span className="text-blue-600">.</span>
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

        {/* ADN & METHODOLOGIE */}
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

        {/* CHIFFRES CLÉS */}
        <section className="py-16 bg-[#0A192F] px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-10">
              <div>
                <div className="text-4xl sm:text-5xl font-serif italic text-white mb-2">15+</div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{language === 'fr' ? "Années d'expérience" : "Years of experience"}</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-serif italic text-white mb-2">50+</div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{language === 'fr' ? "Missions" : "Missions"}</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-serif italic text-white mb-2">8</div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{language === 'fr' ? "Pays" : "Countries"}</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-serif italic text-white mb-2">96%</div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{language === 'fr' ? "Conformité" : "Compliance"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTEURS D'INTERVENTION */}
        <section className="py-16 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold italic text-[#0A192F] mb-16">
            Secteurs d'intervention<span className="text-blue-600">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4">Retail & Distribution<span className="text-blue-600">.</span></h3>
              <p className="text-gray-500 italic">Optimisation des achats indirects et pilotage de la performance fournisseurs.</p>
            </div>
            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4">Logistique & Supply Chain<span className="text-blue-600">.</span></h3>
              <p className="text-gray-500 italic">Sourcing de prestataires et optimisation des flux européens.</p>
            </div>
          </div>
        </section>

        {/* NOS ENGAGEMENTS (Correction visibilité) */}
        <section className="bg-gray-50 py-20 sm:py-32 px-6 sm:px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold italic text-[#0A192F] mb-16">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold italic text-[#0A192F]">
                  {content.commitmentResultTitle || "Résultats mesurables"}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-600 italic leading-relaxed">
                  {content.commitmentResultText || "Nous délivrons un impact concret sur votre P&L."}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold italic text-[#0A192F]">
                  {content.commitmentTransferTitle || "Transfert de savoir"}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-600 italic leading-relaxed">
                  {content.commitmentTransferText || "Nous rendons vos équipes autonomes."}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold italic text-[#0A192F]">
                  {content.commitmentConfidentialityTitle || "Confidentialité"}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-600 italic leading-relaxed">
                  {content.commitmentConfidentialityText || "Une discrétion absolue sur vos données stratégiques."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0A192F] px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl font-serif font-bold italic text-white">MBK<span className="text-blue-600">.</span></span>
            <div className="mt-12">
              <Link to="/contact" className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
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
