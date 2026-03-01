import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Globe, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  if (!t) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-48 pb-32 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-sm mb-8 block">
          CONTACT // 05
        </span>
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-20 tracking-tighter uppercase italic leading-none">
          {t.nav.contact}<span className="text-blue-600">.</span>
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <h2 className="text-2xl font-serif italic mb-8 border-l-2 border-blue-600 pl-6 text-gray-300">
              {language === 'fr' ? "Engagez une expertise de précision." : "Engage precision expertise."}
            </h2>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-500" />
              </div>
              <a href="mailto:contact@mbkprocurement.com" className="text-lg font-light tracking-tighter hover:text-blue-400 transition-colors">
                contact@mbkprocurement.com
              </a>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-white/5 border border-blue-500/30 p-16 text-center backdrop-blur-md">
                <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-serif italic">{language === 'fr' ? "Message transmis" : "Message sent"}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 bg-white/[0.03] p-12 border border-white/10">
                <input required type="text" placeholder={language === 'fr' ? "Nom complet" : "Full Name"} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-blue-500 text-sm" />
                <input required type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-blue-500 text-sm" />
                <textarea rows="4" placeholder="Message" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-blue-500 text-sm resize-none"></textarea>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-[0.5em] text-[10px] font-bold flex items-center justify-center gap-4 group">
                  {language === 'fr' ? 'Envoyer' : 'Send'} <Send className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
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
