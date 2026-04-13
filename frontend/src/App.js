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
