import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const { t, language } = useLanguage();

  if (!t || !t.hero) return null;

  return (
    <>
      <SEO
        title="Accueil"
        description="MBK Procurement : Cabinet d'expertise en audit, conseil stratégique, formation et médiation achats. Optimisez votre performance achats et votre EBITDA."
        canonical="https://www.mbkprocurement.com/"
        keywords="cabinet conseil achats, audit procurement, formation négociation, médiation commerciale, optimisation coûts, Paris, Luxembourg"
      />
      <div className="min-h-screen bg-white font-sans">
        <section className="relative h-screen flex items-center bg-[#0A192F] px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25 grayscale contrast-125">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp"
              alt="Structure architecturale moderne symbolisant la performance de MBK Procurement"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tighter italic max-w-5xl">
              {t.hero.title}<span className="text-blue-600">.</span>
            </h1>

            <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed mb-14 border-l-2 border-blue-600/50 pl-10 italic">
              {t.hero.description}
            </p>

            <Link to="/contact" className="group flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all w-fit shadow-2xl">
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>
        </section>

        <section className="py-32 bg-white px-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl !font-serif !font-bold italic tracking-tighter leading-tight text-[#0A192F]">
                  {language === 'fr' ? 'Expertise en Action' : 'Expertise in Action'}<span className="text-blue-600">.</span>
                </h2>
                <p className="text-lg text-gray-500 font-light italic leading-relaxed">
                  {language === 'fr'
                    ? "La plupart des entreprises savent qu'elles dépensent trop. Ce qu'elles ne savent pas, c'est où, pourquoi, et comment y remédier sans désorganiser l'existant. C'est là que nous intervenons. Pas avec des slides — avec des résultats."
                    : "Most companies know they're overspending. What they don't know is where, why, and how to fix it without disrupting what already works. That's where we come in. Not with slides — with results."}
                </p>
                <div className="space-y-8 border-l-2 border-blue-600 pl-8">
                  <h3 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {language === 'fr' ? 'Transformation & Gouvernance' : 'Transformation & Governance'}
                  </h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed italic">
                    {language === 'fr'
                      ? "Ingénierie d'un département achats complet : catégorisation des familles, structuration des équipes, implémentation de processus cibles et pilotage d'appels d'offres européens stratégiques."
                      : "Engineering of a procurement department: category management, team structuring, process implementation, and strategic European tender management."}
                  </p>
                  <p className="text-gray-500 text-lg font-light italic">
                    {language === 'fr'
                      ? "Définition de la politique achat et revue globale du parc contractuel."
                      : "Definition of procurement policy and global review of the contract portfolio."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#0A192F] p-10 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-blue-500 text-[10px] font-bold tracking-[0.3em] mb-4">COMPLIANCE</div>
                  <div className="text-5xl font-serif italic text-white mb-2">13% <span className="text-blue-600">&rarr;</span> 96%</div>
                  <p className="text-gray-400 text-xs font-light tracking-wide uppercase">
                    {language === 'fr' ? 'Conformité Contractuelle' : 'Contractual Compliance'}
                  </p>
                </div>
                <div className="bg-gray-50 p-10 border border-gray-100 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-blue-600 text-[10px] font-bold tracking-[0.3em] mb-4">SAVINGS</div>
                  <div className="text-5xl font-serif italic text-[#0A192F] mb-2">-23%</div>
                  <p className="text-gray-500 text-xs font-light tracking-wide uppercase">
                    {language === 'fr' ? "Sur appels d'offres Européens" : 'On European Tenders'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Références Clients */}
        <section className="py-32 bg-[#0A192F] px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold italic tracking-tighter text-white mb-6">
                {language === 'fr' ? 'Références' : 'References'}<span className="text-blue-600">.</span>
              </h2>
              <p className="text-gray-500 text-lg font-light italic max-w-3xl">
                {language === 'fr'
                  ? "Nous ne publions pas de témoignages anonymes. Voici les entreprises que nous avons accompagnées, les problèmes qu'elles rencontraient, et ce que nous avons livré."
                  : "We don't publish anonymous testimonials. Here are the companies we have supported, the problems they faced, and what we delivered."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border-t border-gray-800">
              <div className="border-r border-b md:border-b-0 border-gray-800 p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Appels d\'offres & Contrats' : 'Tenders & Contracts'}
                </div>
                <h3 className="text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  Kingfisher
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Management d'appels d'offres européens, gestion contractuelle fournisseurs et pilotage de la performance des contrats Facility Management."
                    : "European tender management, supplier contract management and Facility Management contract performance monitoring."}
                </p>
              </div>

              <div className="border-r border-b md:border-b-0 border-gray-800 p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Logistique & Transfert' : 'Logistics & Transfer'}
                </div>
                <h3 className="text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  Logista
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Pilotage end-to-end du déménagement d'un site logistique : restitution de l'ancien site, aménagement complet du nouveau jusqu'à son exploitation opérationnelle."
                    : "End-to-end management of a logistics site relocation: handover of the former site, full fit-out of the new facility through to operational launch."}
                </p>
              </div>

              <div className="border-b md:border-b-0 border-gray-800 p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Sourcing & Développement' : 'Sourcing & Development'}
                </div>
                <h3 className="text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  SBFM
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Sourcing stratégique pour le développement d'un nouveau marché en Europe et identification de sous-traitants spécialisés en Facility Management."
                    : "Strategic sourcing for European market expansion and identification of specialized Facility Management subcontractors."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white px-8 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-6">
              {language === 'fr' ? 'Discutons de votre situation' : "Let's discuss your situation"}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light italic mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "Contactez-nous dès aujourd'hui pour discuter de vos projets"
                : "Contact us today to discuss your projects"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-4 bg-[#0A192F] hover:bg-blue-600 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <button
                onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                className="flex items-center justify-center gap-4 bg-transparent border-2 border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all"
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

export default Home;
