import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-48 pb-32 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
        <div>
          <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Direct Engagement</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-12 tracking-tighter uppercase leading-none">Contact.</h1>
          
          <div className="space-y-12 mt-20">
            <div className="flex gap-8 items-center border-b border-white/10 pb-8">
              <Mail className="text-blue-500 w-5 h-5" />
              <p className="text-xl font-light tracking-widest">contact@mbkprocurement.com</p>
            </div>
            <div className="flex gap-8 items-center">
              <MapPin className="text-blue-500 w-5 h-5" />
              <p className="text-sm uppercase tracking-[0.3em] font-bold">Paris — EMEA Region</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-16 grayscale contrast-125 brightness-75 flex items-center justify-center">
            <h2 className="text-[#0A192F] font-serif text-3xl font-bold italic text-center">Formulaire en cours de maintenance sécurisée.</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
