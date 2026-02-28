import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // PROTECTION : Si les traductions ne sont pas chargées, on n'affiche rien au lieu de crash
  if (!t || !t.footer) return null;

  return (
    <footer className="bg-[#0A192F] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Section Logo & Vision */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white font-serif leading-tight tracking-tight">
                MBK <span className="text-blue-500 font-sans font-medium text-lg uppercase tracking-[0.2em] ml-1">Procurement</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed font-light pr-4">
              {t.footer?.description || "Expertise en performance Achats"}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-white font-serif text-lg font-bold mb-6 italic">{t.footer?.links || "Liens"}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/conseil" className="hover:text-white transition-colors">{t.nav?.conseil}</Link></li>
              <li><Link to="/audit" className="hover:text-white transition-colors">{t.nav?.audit}</Link></li>
              <li><Link to="/formation" className="hover:text-white transition-colors">{t.nav?.formation}</Link></li>
              <li><Link to="/mediation" className="hover:text-white transition-colors">{t.nav?.mediation}</Link></li>
            </ul>
          </div>

          {/* Bureau & Contact */}
          <div>
            <h3 className="text-white font-serif text-lg font-bold mb-6 italic">{t.footer?.contact || "Contact"}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                <span>Paris, France<br />Zone EMEA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>contact@mbkprocurement.com</span>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white font-serif text-lg font-bold mb-6 italic">{t.footer?.legal || "Légal"}</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer?.privacy || "Confidentialité"}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer?.terms || "Mentions"}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest uppercase font-medium text-gray-500">
            © {currentYear} MBK Procurement. {t.footer?.rights}
          </p>
          <div className="flex items-center space-x-1">
             <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
             <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">Strategic Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
