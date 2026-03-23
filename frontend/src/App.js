import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Importation nommée pour Radix (ton fichier menubar en minuscules)
import { Menubar, MenubarMenu, MenubarTrigger } from './components/ui/menubar';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Conseil from './pages/Conseil';
import Audit from './pages/Audit';
import Formation from './pages/Formation';
import Mediation from './pages/Mediation';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

// COMPOSANT NAVIGATION (Intégré pour éviter les erreurs d'import)
const const NavigationBar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  
  if (!t || !t.nav) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A192F] border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* LOGO MBK - Reste fixe à gauche */}
        <Link to="/" className="text-2xl font-serif font-bold italic text-white tracking-tighter shrink-0">
          MBK<span className="text-blue-500">.</span>
        </Link>

        {/* ZONE DE NAVIGATION DÉFILANTE SUR MOBILE */}
        <div className="flex items-center gap-2 overflow-hidden w-full justify-end">
          
          <div className="mobile-nav-scroll overflow-x-auto no-scrollbar">
            <Menubar className="border-none bg-transparent shadow-none flex flex-nowrap">
              <MenubarMenu>
                <Link to="/conseil" className="shrink-0"><MenubarTrigger>{t.nav.conseil}</MenubarTrigger></Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link to="/audit" className="shrink-0"><MenubarTrigger>{t.nav.audit}</MenubarTrigger></Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link to="/formation" className="shrink-0"><MenubarTrigger>{t.nav.formation}</MenubarTrigger></Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link to="/mediation" className="shrink-0"><MenubarTrigger>{t.nav.mediation}</MenubarTrigger></Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link to="/about" className="shrink-0"><MenubarTrigger>{t.nav.about}</MenubarTrigger></Link>
              </MenubarMenu>
              {/* Le bouton Contact reste dans le scroll sur mobile pour gagner de la place */}
              <MenubarMenu>
                <Link to="/contact" className="ml-4 px-4 py-2 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all rounded-sm shrink-0">
                  {t.nav.contact}
                </Link>
              </MenubarMenu>
            </Menubar>
          </div>

          {/* SÉLECTEUR DE LANGUE - Reste fixe à droite */}
          <button 
            onClick={toggleLanguage}
            className="shrink-0 ml-2 px-3 py-1 border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white hover:text-[#0A192F] transition-all rounded-sm"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </header>
  );
};
// COMPOSANT PRINCIPAL APP
function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white">
          <NavigationBar />
          
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conseil" element={<Conseil />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/mediation" element={<Mediation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/confidentialite" element={<Privacy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
