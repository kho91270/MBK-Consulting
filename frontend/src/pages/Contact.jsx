import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Globe, Send, CheckCircle, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  if (!t) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans">
      {/* Spacer pour éviter le chevauchement du Header invisible */}
      <div className="h-40 w-full"></div>

      <div className="max-w-7xl mx-auto px-8 pb-32">
        <header className="mb-24 border-b border-white/10 pb-12">
          <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-sm mb-6 block">
            {t.common.ctaTitle} // 05
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter uppercase italic leading-none">
            {t.nav.contact}<span className="text-blue-600">.</span>
          </h1>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="space-y-16">
            <div className="bg-white/5 p-10 border-l-4 border-blue-600">
              <h2 className="text-2xl font-serif italic mb-6">
                {language === 'fr' ? "Protocole d'engagement" : "Engagement Protocol"}
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                {language === 'fr' 
                  ? "Chaque sollicitation fait l'objet d'une analyse de conflit d'intérêt préalable. Nos analystes traitent vos données sous chiffrement de bout en bout."
                  : "Every inquiry undergoes a prior conflict-of-interest analysis. Our analysts process your data using end-to-end encryption."}
              </p>
            </div>

            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Direct Channel</p>
                <a href="mailto:contact@mbkprocurement.com" className="text-2xl md:text-3xl font-light hover:text-blue-400 transition-all border-b border-white/10 pb-2">
                  contact@mbkprocurement.com
                </a>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Regional Hubs</p>
                <p className="text-xl font-light tracking-wide text-gray-300 italic">Paris — London — Dubai — Singapore</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-blue-600 p-20 text-center animate-in fade-in zoom-in duration-700">
                <CheckCircle className="w-16 h-16 text-white mx-auto mb-8" />
                <h3 className="text-3xl font-serif italic mb-4">Inquiry Received</h3>
                <p className="text-blue-100 uppercase tracking-widest text-xs font-bold">Secure ID: #MBK-{Math.floor(Math.random()*9000)}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-8">
                  <input required type="text" placeholder={language === 'fr' ? "Nom & Institution" : "Name & Institution"} className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-blue-500 text-lg font-light transition-all" />
                  <input required type="email" placeholder="Corporate Email" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-blue-500 text-lg font-light transition-all" />
                  <textarea rows="5" placeholder={language === 'fr' ? "Description sommaire de l'enjeu" : "Brief description of the challenge"} className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-blue-500 text-lg font-light resize-none transition-all"></textarea>
                </div>
                <button type="submit" className="group flex items-center justify-between w-full bg-white text-[#0A192F] px-10 py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-blue-600 hover:text-white transition-all">
                  <span>{language === 'fr' ? "Transmettre" : "Transmit"}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
