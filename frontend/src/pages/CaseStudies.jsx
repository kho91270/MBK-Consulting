
1. src/index.css (ajout html { overflow-x: hidden; })
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
    overflow-x: hidden;
}

body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', 'Inter', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
@keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
.animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }
.animate-slideInRight { animation: slideInRight 0.6s ease-out forwards; }
.animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
.animate-float { animation: float 3s ease-in-out infinite; }

/* Hover lift utility */
.hover-lift {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Scrollbar hiding utility */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

@layer base {
    :root {
        --background: 0 0% 100%;
        --foreground: 0 0% 3.9%;
        --primary: 0 0% 9%;
        --border: 0 0% 89.8%;
        --radius: 0.75rem;
    }
    .dark {
        --background: 0 0% 3.9%;
        --foreground: 0 0% 98%;
        --border: 0 0% 14.9%;
    }
    * { @apply border-border; }
    body { @apply bg-background text-foreground; }
}
2. src/App.js (overflow-x-hidden retiré du div)
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
          <div className="App min-h-screen flex flex-col">
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
3. src/components/Header.jsx (overlay sorti du <header>, z-index corrigé)
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
    <>
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
            className={`lg:hidden relative z-[101] p-2 -mr-2 ${isMenuOpen ? 'text-white' : shouldBeWhite ? 'text-white' : 'text-[#0A192F]'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY — rendu en dehors du <header> pour éviter les problèmes de stacking context mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0A192F] z-[200] overflow-y-auto">
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
    </>
  );
};

export default Header;
4. src/pages/CaseStudies.jsx (refait pour mobile)
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
