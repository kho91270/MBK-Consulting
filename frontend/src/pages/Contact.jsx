import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-48 pb-32 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
        <div>
          <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
            {t.common?.ctaTitle || 'Contact'}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-12 tracking-tighter uppercase leading-none">
            {t.nav?.contact}.
          </h1>
          
          <div className="space-y-12 mt-20">
            <div className="flex gap-8 items-center border-b border-white/10 pb-8 group">
              <Mail className="text-blue-500 w-5 h-5 group-hover:scale-110 transition-transform" />
              <p className="text-xl font-light tracking-widest">contact@mbkprocurement.com</p>
            </div>
            <div className="flex gap-8 items-center border-b border-white/10 pb-8">
              <MapPin className="text-blue-500 w-5 h-5" />
              <p className="text-sm uppercase tracking-[0.3em] font-bold">Paris — EMEA Region</p>
            </div>
          </div>
        </div>
        
        <div className="relative bg-white/5 p-16 border border-white/10 backdrop-blur-sm flex flex-col justify-center">
          <h2 className="text-2xl font-serif italic mb-8">
            {t.common?.maintenance || "Système en maintenance"}
          </h2>
          <p className="text-gray-400 font-light leading-relaxed">
            {t.language === 'en' 
              ? "Our secure engagement portal is being updated. Please contact us directly via email for any urgent strategic inquiries."
              : "Notre portail d'engagement sécurisé est en cours de mise à jour. Veuillez nous contacter directement par email pour toute demande stratégique urgente."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
