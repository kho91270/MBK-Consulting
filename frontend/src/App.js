import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// NAVIGATION : Importation avec le 'm' minuscule exact
// Si vous avez une erreur "Default export not found", 
// remplacez la ligne ci-dessous par : import { Menubar } from './components/ui/menubar';
import Menubar from './components/ui/menubar'; 

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
        <div className="flex flex-col min-h-screen bg-white">
          {/* Le nom du composant reste Menubar avec une majuscule pour React */}
          <Menubar />
          
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
