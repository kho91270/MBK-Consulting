import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  if (!t || !t.footer) return null;

  return (
    <footer className="bg-[#0A192F] text-white py-24 px-8 border-t border-white/10 font-sans relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 mb-24">
          {/* Section Identité */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold italic tracking-tighter">
              MBK Procurement<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed font-light text-sm italic">
              {t.footer.description}
            </p>
          </div>
          
          {/* Section Navigation & Contact */}
          <div className="grid grid-cols-2 gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
            <div className="flex flex-col gap-8">
              <h4 className="text-blue-500">{t.footer.links}</h4>
              <ul className="space-y-4 text-gray-500">
                {['conseil', 'audit', 'formation', 'mediation', 'about'].map((key) => (
                  <li key={key}>
                    <Link to={`/${key}`} className="hover:text-white transition-colors duration-300">
                      {t.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="text-blue-500 uppercase">Contact</h4>
              <div className="space-y-4 text-gray-500 lowercase tracking-normal font-light">
                <p className="hover:text-blue-400 transition-colors">contact@mbkprocurement.com</p>
                <p className="uppercase text-[9px] tracking-widest text-gray-600">Paris — EMEA — Global</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barre de Copyright & Légal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-gray-600">
          <p>© {new Date().getFullYear()} MBK Global Standards. Excellence in Sourcing.</p>
          <div className="flex gap-10">
            <Link to="/legal" className="hover:text-white transition-colors">
              {t.footer.legal}
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
