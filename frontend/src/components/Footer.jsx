import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import Conseil from './pages/Conseil';
import Audit from './pages/Audit';
import Formation from './pages/Formation';
import Mediation from './pages/Mediation';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="App min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <Breadcrumbs />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/conseil" element={<Conseil />} />
                <Route path="/audit" element={<Audit />} />
                <Route path="/formation" element={<Formation />} />
                <Route path="/mediation" element={<Mediation />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTopButton />
            <Toaster />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
3. src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isDarkPage = location.pathname === '/contact' || location.pathname === '/privacy' || location.pathname === '/legal';
  const isHomePage = location.pathname === '/';
  const shouldBeWhite = (isHomePage && !isScrolled) || (isDarkPage && !isScrolled);

  const navLinks = [
    { name: t.nav.conseil, path: '/conseil' },
    { name: t.nav.audit, path: '/audit' },
    { name: t.nav.formation, path: '/formation' },
    { name: t.nav.mediation, path: '/mediation' },
  ];

  const mobileLinks = [
    { name: t.nav.home || (language === 'fr' ? 'Accueil' : 'Home'), path: '/' },
    { name: t.nav.conseil, path: '/conseil' },
    { name: t.nav.audit, path: '/audit' },
    { name: t.nav.formation, path: '/formation' },
    { name: t.nav.mediation, path: '/mediation' },
    { name: t.nav.about, path: '/about' },
    { name: language === 'fr' ? 'Cas Clients' : 'Case Studies', path: '/case-studies' },
  ];

  return (
    <header
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 lg:py-4 shadow-lg'
          : 'bg-transparent py-4 sm:py-5 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        <Link
          to="/"
          className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-300 ${
            shouldBeWhite ? 'text-white' : 'text-[#0A192F]'
          }`}
        >
          MBK<span className="text-blue-600">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.4em] font-bold transition-all hover:text-blue-500 ${
                shouldBeWhite ? 'text-white/80' : 'text-[#0A192F]/80'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className={`h-4 w-px transition-colors ${shouldBeWhite ? 'bg-white/20' : 'bg-gray-200'}`}></div>

          <Link
            to="/contact"
            className={`text-[10px] uppercase tracking-[0.3em] font-bold px-6 py-2.5 border transition-all duration-300 ${
              shouldBeWhite
                ? 'border-white text-white hover:bg-white hover:text-[#0A192F]'
                : 'border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white'
            }`}
          >
            {t.nav.contact}
          </Link>

          <button
            onClick={toggleLanguage}
            className={`text-[10px] font-bold w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              shouldBeWhite
                ? 'border-white/30 text-white hover:bg-blue-600 hover:border-blue-600'
                : 'border-gray-200 text-gray-500 hover:border-[#0A192F] hover:text-[#0A192F]'
            }`}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden relative z-[101]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className={`w-6 h-6 ${shouldBeWhite ? 'text-white' : 'text-[#0A192F]'}`} />
          )}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0A192F] z-[99] overflow-y-auto">
          <div className="flex flex-col justify-center items-center min-h-full py-24 px-8 gap-5">

            {mobileLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-serif italic uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-blue-500' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="w-12 h-px bg-gray-800 my-2"></div>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-10 py-3 border border-blue-500 text-blue-500 uppercase tracking-widest font-bold text-xs"
            >
              {t.nav.contact}
            </Link>

            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="w-11 h-11 rounded-full border border-white/30 text-white text-xs font-bold flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
4. src/pages/Home.jsx
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
        {/* Hero */}
        <section className="relative min-h-[85vh] sm:h-screen flex items-center bg-[#0A192F] px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25 grayscale contrast-125">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp"
              alt="Structure architecturale moderne symbolisant la performance de MBK Procurement"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10 py-12 sm:py-0">
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-serif font-bold text-white mb-6 sm:mb-10 leading-[1.05] tracking-tighter italic max-w-5xl">
              {t.hero.title}<span className="text-blue-600">.</span>
            </h1>

            <p className="max-w-2xl text-base sm:text-xl text-gray-400 font-light leading-relaxed mb-8 sm:mb-14 border-l-2 border-blue-600/50 pl-4 sm:pl-10 italic">
              {t.hero.description}
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 sm:gap-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 sm:px-10 sm:py-5 text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all w-fit shadow-2xl"
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>
        </section>

        {/* Expertise en Action */}
        <section className="py-16 md:py-32 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="space-y-8 sm:space-y-12">
                <h2 className="text-3xl sm:text-4xl md:text-6xl !font-serif !font-bold italic tracking-tighter leading-tight text-[#0A192F]">
                  {language === 'fr' ? 'Expertise en Action' : 'Expertise in Action'}<span className="text-blue-600">.</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-500 font-light italic leading-relaxed">
                  {language === 'fr'
                    ? "La plupart des entreprises savent qu'elles dépensent trop. Ce qu'elles ne savent pas, c'est où, pourquoi, et comment y remédier sans désorganiser l'existant. C'est là que nous intervenons. Pas avec des slides — avec des résultats."
                    : "Most companies know they're overspending. What they don't know is where, why, and how to fix it without disrupting what already works. That's where we come in. Not with slides — with results."}
                </p>
                <div className="space-y-6 sm:space-y-8 border-l-2 border-blue-600 pl-4 sm:pl-8">
                  <h3 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {language === 'fr' ? 'Transformation & Gouvernance' : 'Transformation & Governance'}
                  </h3>
                  <p className="text-base sm:text-xl text-gray-600 font-light leading-relaxed italic">
                    {language === 'fr'
                      ? "Ingénierie d'un département achats complet : catégorisation des familles, structuration des équipes, implémentation de processus cibles et pilotage d'appels d'offres européens stratégiques."
                      : "Engineering of a procurement department: category management, team structuring, process implementation, and strategic European tender management."}
                  </p>
                  <p className="text-gray-500 text-base sm:text-lg font-light italic">
                    {language === 'fr'
                      ? "Définition de la politique achat et revue globale du parc contractuel."
                      : "Definition of procurement policy and global review of the contract portfolio."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="bg-[#0A192F] p-6 sm:p-10 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-blue-500 text-[10px] font-bold tracking-[0.3em] mb-4">COMPLIANCE</div>
                  <div className="text-3xl sm:text-5xl font-serif italic text-white mb-2">13% <span className="text-blue-600">&rarr;</span> 96%</div>
                  <p className="text-gray-400 text-xs font-light tracking-wide uppercase">
                    {language === 'fr' ? 'Conformité Contractuelle' : 'Contractual Compliance'}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 sm:p-10 border border-gray-100 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-blue-600 text-[10px] font-bold tracking-[0.3em] mb-4">SAVINGS</div>
                  <div className="text-3xl sm:text-5xl font-serif italic text-[#0A192F] mb-2">-23%</div>
                  <p className="text-gray-500 text-xs font-light tracking-wide uppercase">
                    {language === 'fr' ? "Sur appels d'offres Européens" : 'On European Tenders'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Références Clients */}
        <section className="py-16 md:py-32 bg-[#0A192F] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold italic tracking-tighter text-white mb-6">
                {language === 'fr' ? 'Références' : 'References'}<span className="text-blue-600">.</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg font-light italic max-w-3xl">
                {language === 'fr'
                  ? "Nous ne publions pas de témoignages anonymes. Voici les entreprises que nous avons accompagnées, les problèmes qu'elles rencontraient, et ce que nous avons livré."
                  : "We don't publish anonymous testimonials. Here are the companies we have supported, the problems they faced, and what we delivered."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-800">
              <div className="md:border-r border-b md:border-b-0 border-gray-800 p-6 sm:p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? "Appels d'offres & Contrats" : 'Tenders & Contracts'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  Kingfisher
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Management d'appels d'offres européens, gestion contractuelle fournisseurs et pilotage de la performance des contrats Facility Management."
                    : "European tender management, supplier contract management and Facility Management contract performance monitoring."}
                </p>
              </div>

              <div className="md:border-r border-b md:border-b-0 border-gray-800 p-6 sm:p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Logistique & Transfert' : 'Logistics & Transfer'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  Logista
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Pilotage end-to-end du déménagement d'un site logistique : restitution de l'ancien site, aménagement complet du nouveau jusqu'à son exploitation opérationnelle."
                    : "End-to-end management of a logistics site relocation: handover of the former site, full fit-out of the new facility through to operational launch."}
                </p>
              </div>

              <div className="border-b md:border-b-0 border-gray-800 p-6 sm:p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Sourcing & Développement' : 'Sourcing & Development'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
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
        <section className="py-12 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-6">
              {language === 'fr' ? 'Discutons de votre situation' : "Let's discuss your situation"}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg font-light italic mb-8 sm:mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "Contactez-nous dès aujourd'hui pour discuter de vos projets"
                : "Contact us today to discuss your projects"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 sm:gap-4 bg-[#0A192F] hover:bg-blue-600 text-white px-6 py-4 sm:px-10 sm:py-5 text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all shadow-xl"
              >
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <button
                onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                className="flex items-center justify-center gap-3 sm:gap-4 bg-transparent border-2 border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white px-6 py-4 sm:px-10 sm:py-5 text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all"
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
5. src/components/ServiceLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ServiceLayout = ({ content, label, imageUrl, altText, faq }) => {
  const { language } = useLanguage();

  if (!content || !content.items) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-px bg-blue-600 animate-pulse"></div>
      </div>
    );
  }

  const webpUrl = imageUrl && !imageUrl.includes('fm=webp')
    ? imageUrl + '&fm=webp'
    : imageUrl;

  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F]">
      {faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}

      <header className="pt-20 sm:pt-28 lg:pt-48 pb-8 sm:pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-8xl !font-serif !font-bold tracking-tighter leading-[0.9] !italic mb-6 sm:mb-10">
          {content.title}<span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-4xl text-base sm:text-xl md:text-2xl text-gray-500 font-light leading-relaxed !italic border-l-4 border-blue-50 pl-4 sm:pl-10">
          {content.lead}
        </p>
      </header>

      <section className="relative w-full h-[40vh] sm:h-[55vh] md:h-[65vh] bg-[#0A192F] overflow-hidden grayscale contrast-125 border-y border-gray-100">
        <img
          src={webpUrl}
          alt={altText || content.title}
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-60 scale-105 hover:scale-100 transition-transform duration-[4000ms] ease-out"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&fm=webp";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
      </section>

      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-10 md:gap-y-24">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t-2 border-gray-100 pt-8 sm:pt-12 group hover:border-blue-600 transition-colors duration-700"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl !font-serif !font-bold leading-tight mb-4 sm:mb-8 !italic tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {item}<span className="text-blue-600">.</span>
              </h3>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 font-light leading-relaxed !italic border-l-2 border-blue-50 pl-4 sm:pl-6">
                <p>
                  {content.descriptions && content.descriptions[idx]
                    ? content.descriptions[idx]
                    : (language === 'fr' ? "Optimisation stratégique de vos ressources." : "Strategic resource optimization.")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-10 md:mb-16">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-8 md:gap-y-12">
              {faq.map((item, idx) => (
                <div key={idx} className="border-t border-gray-200 pt-6 sm:pt-8">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 tracking-tight">{item.q}</h3>
                  <p className="text-gray-500 font-light leading-relaxed italic text-sm sm:text-base">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 md:py-24 bg-[#0A192F] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-6">
            {language === 'fr' ? 'Discutons de votre situation' : "Let's discuss your situation"}<span className="text-blue-600">.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-light italic mb-8 sm:mb-12 max-w-2xl mx-auto">
            {language === 'fr'
              ? "Contactez-nous dès aujourd'hui pour discuter de vos projets"
              : "Contact us today to discuss your projects"}
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
  );
};

export default ServiceLayout;
6. src/pages/About.jsx
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
        <header className="pt-20 sm:pt-28 lg:pt-48 pb-8 sm:pb-10 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-[0.85]">
            {content.title}<span className="text-blue-600">.</span>
          </h1>
        </header>

        <section className="relative w-full h-[40vh] sm:h-[55vh] md:h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="Structure architecturale solide représentant les fondations et l'expertise stratégique du cabinet MBK Procurement."
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
            <p className="max-w-4xl text-center text-lg sm:text-2xl md:text-5xl !font-serif italic text-white leading-tight">
              "{content.philosophy}"
            </p>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl !font-serif !font-bold italic tracking-tighter mb-8 sm:mb-12">
            {content.historyTitle}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-4 sm:pl-8">
              {content.historyText}
            </p>
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-4 sm:pl-8">
              {content.historyText2}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 border-t border-gray-100">
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl !font-serif !font-bold mb-6 sm:mb-8 italic tracking-tighter">
              {content.adnTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-4 sm:pl-8">
              {content.adnDescription}
            </p>
          </div>
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl !font-serif !font-bold mb-6 sm:mb-8 italic tracking-tighter">
              {content.methodTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-4 sm:pl-8">
              {content.methodDescription}
            </p>
          </div>
        </section>

        {/* Chiffres Clés */}
        <section className="py-12 md:py-24 bg-[#0A192F] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-10 md:mb-16">
              {language === 'fr' ? 'En chiffres' : 'By the numbers'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-800">
              <div className="md:border-r border-gray-800 p-4 sm:p-6 md:p-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-2 sm:mb-3">15+</div>
                <p className="text-gray-500 text-xs sm:text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? "Années d'expérience" : 'Years of experience'}
                </p>
              </div>
              <div className="md:border-r border-gray-800 p-4 sm:p-6 md:p-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-2 sm:mb-3">50+</div>
                <p className="text-gray-500 text-xs sm:text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Missions réalisées' : 'Completed missions'}
                </p>
              </div>
              <div className="md:border-r border-gray-800 p-4 sm:p-6 md:p-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-2 sm:mb-3">8</div>
                <p className="text-gray-500 text-xs sm:text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Pays couverts' : 'Countries covered'}
                </p>
              </div>
              <div className="p-4 sm:p-6 md:p-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-2 sm:mb-3">96%</div>
                <p className="text-gray-500 text-xs sm:text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Conformité atteinte' : 'Compliance achieved'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secteurs d'intervention */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-10 md:mb-16">
            {language === 'fr' ? "Secteurs d'intervention" : 'Sectors of expertise'}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-8 md:gap-y-16">
            <div className="border-t-2 border-gray-100 pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-serif italic font-bold mb-3 sm:mb-4 tracking-tight">
                {language === 'fr' ? 'Distribution & Retail' : 'Distribution & Retail'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed text-sm sm:text-base">
                {language === 'fr'
                  ? "Optimisation des achats indirects, gestion des appels d'offres multi-pays et pilotage de la performance fournisseurs pour les enseignes de distribution européennes."
                  : "Indirect procurement optimization, multi-country tender management and supplier performance monitoring for European retail chains."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-serif italic font-bold mb-3 sm:mb-4 tracking-tight">
                {language === 'fr' ? 'Logistique & Supply Chain' : 'Logistics & Supply Chain'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed text-sm sm:text-base">
                {language === 'fr'
                  ? "Transfert de sites, sourcing de prestataires logistiques, aménagement d'entrepôts et optimisation des flux de distribution à l'échelle européenne."
                  : "Site relocation, logistics provider sourcing, warehouse fit-out and distribution flow optimization across Europe."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-serif italic font-bold mb-3 sm:mb-4 tracking-tight">
                Facility Management<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed text-sm sm:text-base">
                {language === 'fr'
                  ? "Structuration et mise en concurrence des contrats FM, suivi de la performance opérationnelle et identification de sous-traitants spécialisés sur les marchés européens."
                  : "FM contract structuring and tendering, operational performance tracking and identification of specialized subcontractors across European markets."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-serif italic font-bold mb-3 sm:mb-4 tracking-tight">
                {language === 'fr' ? 'Industrie & Production' : 'Industry & Manufacturing'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed text-sm sm:text-base">
                {language === 'fr'
                  ? "Sécurisation des chaînes d'approvisionnement critiques, négociation de contrats-cadres et audit de la maturité achats des organisations industrielles."
                  : "Critical supply chain security, framework agreement negotiation and procurement maturity audits for industrial organizations."}
              </p>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="bg-gray-50 py-12 md:py-24 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-10 md:mb-16">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
              <div>
                <h3 className="text-lg sm:text-xl font-serif italic font-bold mb-3 sm:mb-4 tracking-tight">
                  {content.commitmentResultTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed text-sm sm:text-base">
                  {content.commitmentResultText}
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-serif italic font-bold mb-3 sm:mb-4 tracking-tight">
                  {content.commitmentTransferTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed text-sm sm:text-base">
                  {content.commitmentTransferText}
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-serif italic font-bold mb-3 sm:mb-4 tracking-tight">
                  {content.commitmentConfidentialityTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed text-sm sm:text-base">
                  {content.commitmentConfidentialityText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation + CTA */}
        <section className="py-12 md:py-24 bg-[#0A192F] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-base sm:text-lg font-light italic leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "L'excellence opérationnelle n'est pas une option, c'est le socle de notre engagement envers votre EBITDA."
                : "Operational excellence is not an option; it is the foundation of our commitment to your EBITDA."}
            </p>
            <span className="text-4xl sm:text-5xl !font-serif !font-bold italic tracking-tighter text-white">MBK<span className="text-blue-600">.</span></span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-16">
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

export default About;
7. src/pages/Contact.jsx
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const { t, language } = useLanguage();
  const content = t?.contact || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const openKoalendar = () => {
    window.open(
      'https://koalendar.com/e/meet-with-mbk-procurement',
      'koalendar-popup',
      'width=800,height=700,scrollbars=yes,resizable=yes'
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const WEB3FORMS_KEY = 'e2902245-a54e-4a05-a2ab-ddd87ca1674b';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nouveau message de ${formData.name} — MBK Procurement`,
          from_name: 'MBK Procurement Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Contactez MBK Procurement pour un audit, conseil stratégique ou formation en achats. Bureaux à Paris, Luxembourg, New-York et Dubaï."
        canonical="https://www.mbkprocurement.com/contact"
        keywords="contact consultant achats, rendez-vous conseil procurement, audit achats Paris"
      />
      <div className="min-h-screen bg-black text-white">
        <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512411604-d73117498c8c?q=80&w=2500&fm=webp"
            alt="MBK Connection Architecture"
            loading="lazy"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&fm=webp';
            }}
          />
        </div>

        <div className="text-center py-10 sm:py-16 px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif italic font-bold mb-4">
            {content.title || 'Contact'}
          </h1>
          <p className="text-gray-500 text-base sm:text-lg font-light italic max-w-2xl mx-auto">
            {language === 'fr'
              ? "Chaque situation est différente. Que vous ayez un besoin précis ou simplement une question sur la performance de vos achats, le premier échange est toujours sans engagement. Nous vous répondons sous 24h."
              : "Every situation is different. Whether you have a specific need or simply a question about your procurement performance, the first conversation is always no-commitment. We respond within 24 hours."}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif italic mb-4 sm:mb-6">
                {language === 'fr' ? 'Définir la trajectoire' : 'Define the trajectory'}.
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {content.subtitle || (language === 'fr'
                  ? 'Nous transformons vos enjeux achats en avantage stratégique.'
                  : 'We transform your procurement challenges into strategic advantage.')}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">contact@mbkprocurement.com</p>
            </div>

            {/* Présence internationale */}
            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-4 sm:mb-6">
                {language === 'fr' ? 'Présence internationale' : 'International presence'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-medium text-sm">Paris</p>
                  <p className="text-gray-600 text-xs">{language === 'fr' ? 'Bureau principal' : 'Head office'}</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Luxembourg</p>
                  <p className="text-gray-600 text-xs">{language === 'fr' ? 'Interventions régulières' : 'Regular engagements'}</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">New York</p>
                  <p className="text-gray-600 text-xs">{language === 'fr' ? 'Missions ponctuelles' : 'Project-based missions'}</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{language === 'fr' ? 'Dubaï' : 'Dubai'}</p>
                  <p className="text-gray-600 text-xs">{language === 'fr' ? 'Couverture Moyen-Orient' : 'Middle East coverage'}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-gray-800">
              <h3 className="text-lg sm:text-xl font-serif italic mb-4 sm:mb-6 text-gray-300">
                {language === 'fr' ? 'Réserver ou se connecter' : 'Schedule or Connect'}
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={openKoalendar}
                  className="flex-1 group relative px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-gray-700 hover:border-white transition-all duration-300 overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium text-sm sm:text-base">{language === 'fr' ? 'Réserver un meeting' : 'Book a Meeting'}</span>
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </button>
                <a
                  href="https://www.linkedin.com/company/mbkprocurement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium text-sm sm:text-base">LinkedIn</span>
                  </div>
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </a>
              </div>
              <p className="text-xs text-gray-600 mt-4 text-center">
                {language === 'fr' ? 'Choisissez votre mode de contact préféré' : 'Choose your preferred contact method'}
              </p>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 sm:py-20 text-center space-y-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-2 border-green-500 flex items-center justify-center">
                  <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-green-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif italic">{language === 'fr' ? 'Message envoyé' : 'Message sent'}.</h3>
                <p className="text-gray-400 max-w-sm text-sm sm:text-base">
                  {language === 'fr'
                    ? 'Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.'
                    : 'Thank you for your message. Our team will get back to you shortly.'}
                </p>
                <button onClick={() => setStatus('idle')} className="mt-4 px-6 py-3 border border-gray-700 hover:border-white transition-colors text-sm uppercase tracking-wider">
                  {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={content.form?.name || (language === 'fr' ? 'Nom' : 'Name')}
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors text-white placeholder-gray-600 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={content.form?.email || 'Email'}
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors text-white placeholder-gray-600 text-sm sm:text-base"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.form?.message || 'Message'}
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors resize-none text-white placeholder-gray-600 text-sm sm:text-base"
                />
                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{language === 'fr' ? "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par email." : 'Sending error. Please try again or contact us by email.'}</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 sm:py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {language === 'fr' ? 'ENVOI EN COURS...' : 'SENDING...'}
                    </>
                  ) : (
                    language === 'fr' ? 'ENVOYER LE MESSAGE' : 'SEND MESSAGE'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
8. src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setNewsletterStatus('sending');

    try {
      const WEB3FORMS_KEY = 'e2902245-a54e-4a05-a2ab-ddd87ca1674b';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          email,
          subject: 'Nouvelle inscription newsletter — MBK Procurement',
          from_name: 'MBK Procurement Newsletter',
          message: `Nouvelle inscription à la newsletter : ${email}`,
          replyto: email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setNewsletterStatus('success');
        setEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 4000);
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setNewsletterStatus('error');
    }
  };

  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-serif italic text-xl sm:text-2xl mb-4">MBK Procurement</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {language === 'fr'
                ? "Excellence stratégique en achats et approvisionnement."
                : 'Strategic excellence in procurement and supply chain.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/mbkprocurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Services' : 'Services'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/conseil" className="hover:text-white transition-colors">{language === 'fr' ? 'Conseil' : 'Consulting'}</Link></li>
              <li><Link to="/audit" className="hover:text-white transition-colors">Audit</Link></li>
              <li><Link to="/formation" className="hover:text-white transition-colors">{language === 'fr' ? 'Formation' : 'Training'}</Link></li>
              <li><Link to="/mediation" className="hover:text-white transition-colors">{language === 'fr' ? 'Médiation' : 'Mediation'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Ressources' : 'Resources'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{language === 'fr' ? 'Le Cabinet' : 'About'}</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">{language === 'fr' ? 'Cas Clients' : 'Case Studies'}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li>
                <button
                  onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                  className="hover:text-white transition-colors text-left"
                >
                  {language === 'fr' ? 'Prendre rendez-vous' : 'Book a Meeting'}
                </button>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">
              {language === 'fr'
                ? 'Recevez nos analyses et insights directement.'
                : 'Get our analyses and insights delivered directly.'}
            </p>
            {newsletterStatus === 'success' ? (
              <div className="flex items-center gap-2 text-green-500 text-sm py-2">
                <CheckCircle className="w-4 h-4" />
                <span>{language === 'fr' ? 'Inscription confirmée' : 'Subscription confirmed'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 min-w-0 px-3 py-2 bg-transparent border border-gray-800 text-white text-sm placeholder-gray-600 focus:border-gray-600 outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'sending'}
                  className="px-3 py-2 bg-white text-black hover:bg-blue-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Subscribe"
                >
                  {newsletterStatus === 'sending' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            )}

            {newsletterStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-xs mt-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>
                  {language === 'fr'
                    ? "Erreur lors de l'inscription. Veuillez réessayer."
                    : 'Subscription error. Please try again.'}
                </span>
              </div>
            )}

            <div className="space-y-2 text-sm mt-6 sm:mt-8 border-t border-gray-900 pt-4">
              <Link to="/privacy" className="block hover:text-white transition-colors">
                {language === 'fr' ? 'Confidentialité' : 'Privacy'}
              </Link>
              <Link to="/legal" className="block hover:text-white transition-colors">
                {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} MBK Procurement. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
          </p>
          <a href="mailto:contact@mbkprocurement.com" className="text-xs text-gray-600 hover:text-white transition-colors">
            contact@mbkprocurement.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
