import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-gray-900 font-bold text-xs leading-tight">M B K</span>
                  <div className="w-8 h-0.5 bg-blue-500 mt-0.5"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">MBK</span>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Consulting</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li><Link to="/conseil" className="text-sm hover:text-blue-400 transition-colors">{t.nav.conseil}</Link></li>
              <li><Link to="/audit" className="text-sm hover:text-blue-400 transition-colors">{t.nav.audit}</Link></li>
              <li><Link to="/formation" className="text-sm hover:text-blue-400 transition-colors">{t.nav.formation}</Link></li>
              <li><Link to="/mediation" className="text-sm hover:text-blue-400 transition-colors">{t.nav.mediation}</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.nav.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">contact@mbk-consulting.fr</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">{t.footer.legal}</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">{t.footer.terms}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} MBK Consulting. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
