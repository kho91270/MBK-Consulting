import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Breadcrumbs = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: '/about', label: t.nav.about },
    { path: '/conseil', label: t.nav.conseil },
    { path: '/audit', label: t.nav.audit },
    { path: '/formation', label: t.nav.formation },
    { path: '/mediation', label: t.nav.mediation },
    { path: '/contact', label: t.nav.contact },
  ];

  const currentPath = location.pathname;
  if (currentPath === '/') return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-50 px-6 pointer-events-none md:hidden">
      {/* On affiche uniquement une puce discrète qui indique le scroll possible */}
      <div className="flex justify-center">
        <div className="bg-[#0A192F]/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1 pointer-events-auto">
          <select 
            value={currentPath}
            onChange={(e) => navigate(e.target.value)}
            className="bg-transparent text-[10px] uppercase tracking-[0.2em] text-[#0A192F] font-bold outline-none appearance-none cursor-pointer"
          >
            {navLinks.map(link => (
              <option key={link.path} value={link.path}>{link.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
