import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0A192F] text-white py-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 italic">MBK Procurement.</h2>
            <p className="text-gray-400 max-w-md leading-relaxed font-light">
              {t.footer.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
            <div>
              <h4 className="text-blue-500 mb-8">{t.footer.links}</h4>
              <ul className="space-y-4 text-gray-500">
                <li><Link to="/conseil" className="hover:text-white transition-colors">{t.nav.conseil}</Link></li>
                <li><Link to="/audit" className="hover:text-white transition-colors">{t.nav.audit}</Link></li>
                <li><Link to="/formation" className="hover:text-white transition-colors">{t.nav.formation}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-500 mb-8">Contact</h4>
              <p className="text-gray-500">contact@mbkprocurement.com</p>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-gray-600">
          <p>© {new Date().getFullYear()} MBK Global Standards.</p>
          <div className="flex gap-10">
            <Link to="/legal" className="hover:text-white">{t.footer.legal}</Link>
            <Link to="/privacy" className="hover:text-white">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
