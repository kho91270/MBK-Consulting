import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0A192F] text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 mb-24 font-light">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 italic">MBK Procurement.</h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Cabinet d'élite dédié à l'ingénierie de la performance. Nous intervenons sur les structures de coûts complexes pour libérer la croissance de nos partenaires.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-8 underline decoration-blue-500/30 underline-offset-8">Expertise</h4>
              <ul className="space-y-4 text-[11px] uppercase tracking-widest text-gray-400">
                <li><Link to="/conseil" className="hover:text-white">Sourcing</Link></li>
                <li><Link to="/audit" className="hover:text-white">Audit</Link></li>
                <li><Link to="/formation" className="hover:text-white">Academy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-8 underline decoration-blue-500/30 underline-offset-8">Engagement</h4>
              <p className="text-[11px] uppercase tracking-widest text-gray-400">contact@mbkprocurement.com</p>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-gray-500 font-bold">
          <p>© {new Date().getFullYear()} MBK Global Standards.</p>
          <div className="flex gap-8">
            <Link to="/legal">Legal</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
