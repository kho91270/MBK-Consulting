import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';

// On garde l'import 'menubar' en minuscule comme confirmé
import Menubar from './components/ui/menubar'; 
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
// Importe les autres pages ici...

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          {/* Structure Flex pour que le Footer soit toujours en bas */}
          <div className="flex flex-col min-h-screen bg-white">
            <Menubar /> 
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<Home />} />
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
