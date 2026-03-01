import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A192F] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Colonne 1 : Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            MBK <span className="text-blue-500 font-sans text-xs uppercase tracking-[0.3em] ml-2 font-bold">Procurement</span>
          </Link>
          <p className="mt-6 text-gray-400 font-light max-w-sm leading-relaxed text-sm">
            {t.footer.description}
          </p>
        </div>

        {/* Colonne 2 : Liens Légaux CORRIGÉS */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-blue-500">
            {t.footer.legal}
          </h4>
          <ul className="space-y-4 text-sm font-light text-gray-400">
            <li>
              <Link to="/legal" className="hover:text-white transition-colors">
                {t.legal.title}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">
                {t.privacy.title}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Social */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-blue-500">
            Social
          </h4>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/company/mbkprocurement" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@mbkprocurement.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
          © 2026 MBK Procurement. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
