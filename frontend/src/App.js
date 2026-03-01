import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';

import Menubar from './components/ui/menubar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          {/* On s'assure que la div parente ne bloque pas le scroll */}
          <div className="relative min-h-screen flex flex-col bg-white">
            <Menubar /> 
            <main className="flex-grow pt-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
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
