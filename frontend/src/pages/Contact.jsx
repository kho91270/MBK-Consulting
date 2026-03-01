import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Globe, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi simulée pour le prestige du rendu
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-48 pb-32 px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header de section standardisé */}
        <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
          {t.common.ctaTitle || 'Contact'} // 05
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-20 tracking-tighter uppercase leading-none italic">
          {t.nav.contact}<span className="text-blue-600">.</span>
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Colonne de gauche : Infos institutionnelles */}
          <div className="space-y-16">
            <div className="max-w-md">
              <h2 className="text-2xl font-serif italic mb-6 leading-snug">
                {language === 'fr' 
                  ? "Engagez une expertise de précision pour vos enjeux de performance." 
                  : "Engage some precision expertise for your performance challenges."}
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                {language === 'fr'
                  ? "Nos analystes vous répondent sous 24h pour une première évaluation confidentielle de votre structure de coûts."
                  : "Our analysts respond within 24 hours for a confidential initial assessment of your cost structure."}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</p>
                  <a href="mailto:contact@mbkprocurement.com" className="text-lg hover:text-blue-400 transition-colors tracking-tight">
                    contact@mbkprocurement.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Global Presence</p>
                  <p className="text-lg tracking-tight italic">Paris — EMEA — International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite : Le Formulaire "Elite" */}
          <div className="relative">
            {submitted ? (
              <div className="bg-white/5 border border-blue-500/30 p-16 text-center backdrop-blur-md animate-in fade-in zoom-in duration-700">
                <CheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-serif italic mb-4">
                  {language === 'fr' ? "Message transmis" : "Message transmitted"}
                </h3>
                <p className="text-gray-400 font-light">
                  {language === 'fr' ? "Un consultant MBK prendra contact avec vous sous peu." : "An MBK consultant will contact you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-12 border border-white/10 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{language === 'fr' ? 'Nom' : 'Name'}</label>
                    <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-blue-500 transition-colors font-light text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email</label>
                    <input required type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-blue-500 transition-colors font-light text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{language === 'fr' ? 'Sujet' : 'Subject'}</label>
                  <select className="w-full bg-[#0A192F] border-b border-white/20 py-3 focus:outline-none focus:border-blue-500 transition-colors font-light text-white appearance-none">
                    <option>{t.nav.conseil}</option>
                    <option>{t.nav.audit}</option>
                    <option>{t.nav.formation}</option>
                    <option>{t.nav.mediation}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Message</label>
                  <textarea rows="4" required className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-blue-500 transition-colors font-light text-white resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-[0.4em] text-[11px] font-bold transition-all flex items-center justify-center gap-4 group">
                  {language === 'fr' ? 'Envoyer la requête' : 'Send Inquiry'}
                  <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
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
