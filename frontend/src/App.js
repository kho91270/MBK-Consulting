import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// IMPORTATION NOMMÉE : On utilise { Menubar } car il n'y a pas d'export default
import { Menubar } from './components/ui/menubar'; 

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

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-[#0A192F]">
          
          {/* IMPORTANT : Le Menubar que vous avez fourni est un conteneur vide. 
              S'il ne contient pas vos liens, c'est normal qu'ils ne s'affichent pas. */}
          <header className="fixed top-0 w-full z-50 bg-[#0A192F]/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-8">
               <Menubar>
                 {/* Si vos liens ont disparu, c'est qu'ils doivent être réécrits ici 
                     ou dans un composant "Navbar" qui utilise ce Menubar */}
               </Menubar>
            </div>
          </header>
          
          <main className="flex-grow">
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
