import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';

// STRUCTURE - ATTENTION À LA CASSE EXACTE
// Import avec 'menubar' en minuscule pour correspondre à ton fichier
import Menubar from './components/ui/menubar'; 
import Footer from './components/Footer';

// PAGES
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
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white">
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
                <Route path="/legal" element={<Legal />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
