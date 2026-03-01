import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-serif font-bold text-[#0A192F] mb-8 italic">MBK Procurement.</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md">
              Cabinet de conseil spécialisé dans l'ingénierie de la performance Achats et Supply Chain. 
              Résultats tangibles. Stratégies imperturbables.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600 mb-10">Capabilities</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-[#0A192F]">
              <li><Link to="/conseil" className="hover:opacity-50 transition-opacity">Sourcing Engineering</Link></li>
              <li><Link to="/audit" className="hover:opacity-50 transition-opacity">Maturity Audit</Link></li>
              <li><Link to="/formation" className="hover:opacity-50 transition-opacity">Experts Academy</Link></li>
              <li><Link to="/mediation" className="hover:opacity-50 transition-opacity">Mediation</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600 mb-10">Engagement</h4>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0A192F]">contact@mbkprocurement.com</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 pt-10 text-[9px] uppercase tracking-[0.4em] text-gray-400">
          <p>© {new Date().getFullYear()} MBK. Global Standards.</p>
          <div className="flex gap-10 font-bold">
            <Link to="/legal">Legal</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
