import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conseil from './pages/Conseil';
import Audit from './pages/Audit';
import Formation from './pages/Formation';
import Mediation from './pages/Mediation';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

// --- COMPOSANT DE SÉCURITÉ (BOUCLIER) ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erreur détectée par le bouclier:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oups ! Une petite erreur est survenue.</h2>
          <p className="text-gray-600 mb-6">Certaines informations de cette page ne sont pas disponibles pour le moment.</p>
          <a href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Retourner à l'accueil
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- COMPOSANT APP ---
function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="App min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <ErrorBoundary> {/* LE BOUCLIER PROTÈGE TOUTES LES ROUTES */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/conseil" element={<Conseil />} />
                  <Route path="/audit" element={<Audit />} />
                  <Route path="/formation" element={<Formation />} />
                  <Route path="/mediation" element={<Mediation />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Redirection automatique si la page n'existe pas */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
            <Toaster />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
