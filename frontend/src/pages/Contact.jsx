import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Send, CheckCircle } from 'lucide-react';

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
      <div className="h-40 w-full"></div>
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <header className="mb-24 border-b border-white/10 pb-12">
          <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-sm mb-6 block">
            {t.nav.contact}
          </span>
          {/* TITRE CONTACT : Serif Bold Italic */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter italic leading-none">
            {t.nav.contact}<span className="text-blue-600">.</span>
          </h1>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16 italic font-light text-2xl text-gray-300 leading-relaxed border-l-2 border-blue-600 pl-10">
            {language === 'fr' 
              ? "Engagez une conversation stratégique sur vos enjeux de performance structurelle."
              : "Engage a strategic conversation regarding your structural performance challenges."}
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-white/5 border border-blue-500/30 p-20 text-center backdrop-blur-md animate-in zoom-in duration-1000">
                <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-8" />
                <h3 className="text-3xl font-serif italic">{language === 'fr' ? "Transmission réussie" : "Transmission successful"}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 bg-white/[0.03] p-12 border border-white/10">
                <input required type="text" placeholder={language === 'fr' ? "Nom & Institution" : "Name & Institution"} className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-blue-500 text-lg font-light transition-all" />
                <input required type="email" placeholder="Email corporate" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-blue-500 text-lg font-light transition-all" />
                <textarea rows="4" placeholder="Message" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-blue-500 text-lg font-light resize-none transition-all"></textarea>
                <button type="submit" className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-[0.5em] text-[10px] font-bold flex items-center justify-center gap-4 transition-all">
                  {language === 'fr' ? 'Transmettre' : 'Transmit'} <Send className="w-3 h-3" />
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
