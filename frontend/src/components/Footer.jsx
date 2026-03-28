import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* COLONNE 1 : LOGO & DESCRIPTION */}
          <div>
            <h3 className="text-white font-serif italic text-2xl mb-4">
              MBK Procurement
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {language === 'fr' 
                ? 'Excellence stratégique en achats et approvisionnement.'
                : 'Strategic excellence in procurement and supply chain.'}
            </p>
          </div>

          {/* COLONNE 2 : LIENS RAPIDES */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Navigation' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Accueil' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/conseil" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Conseil' : 'Consulting'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'À Propos' : 'About'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : CONNECT */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              {/* LINKEDIN ICON */}
              <a
                href="https://www.linkedin.com/company/mbkprocurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>

              {/* TEXTE OPTIONNEL */}
              <div className="text-xs text-gray-600">
                <p>{language === 'fr' ? 'Suivez-nous' : 'Follow us'}</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="mt-6">
              <a 
                href="mailto:contact@mbkprocurement.com"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                contact@mbkprocurement.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-900 mt-12 pt-8 text-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} MBK Procurement. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
