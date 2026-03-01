import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Globe, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    // Ajout d'un min-h-screen et d'un padding-top important pour laisser la place au Header
    <div className="min-h-screen bg-[#0A192F] text-white pt-40 pb-32 px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de page avec alignement standardisé */}
        <header className="mb-20">
          <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">
            {t.common.ctaTitle || 'Contact'} // 05
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter uppercase leading-none italic">
            {t.nav.contact}<span className="text-blue-600">.</span>
          </h1>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Colonne Gauche : Identité Institutionnelle */}
          <div className="space-y-16">
            <div className="max-w-md">
              <h2 className="text-2xl font-serif italic mb-8 leading-snug border-l-2 border-blue-600 pl-6">
                {language === 'fr' 
                  ? "Engagez une expertise de précision pour vos enjeux de performance." 
                  : "Engage some precision expertise for your performance challenges."}
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {language === 'fr'
                  ? "Nos analystes vous répondent sous 24h pour une première évaluation confidentielle de votre structure de coûts."
                  : "Our analysts respond within 24 hours for a confidential initial assessment of your cost structure."}
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-500">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email Strategy</p>
                  <a href="mailto:contact@mbkprocurement.com" className="text-lg hover:text-blue-400 transition-colors tracking-tighter font-light">
                    contact@mbkprocurement.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-1">Global Presence</p>
                  <p className="text-lg tracking-tighter font-light italic">Paris — London — Dubai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire Haute Performance */}
          <div className="relative">
            {submitted ? (
              <div className="bg-white/5 border border-blue-500/30 p-20 text-center backdrop-blur-md animate-in fade-in zoom-in duration-1000">
                <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-8" />
                <h3 className="text-2xl font-serif italic mb-4">
                  {language === 'fr' ? "Transmission réussie" : "Transmission successful"}
                </h3>
                <p className="text-gray-400 font-light text-sm tracking-wide">
                  {language === 'fr' ? "Votre requête est en cours d'analyse." : "Your inquiry is currently being analyzed."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 bg-white/[0.03] p-12 border border-white/10 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input required type="text" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-blue-500 transition-all text-sm font-light" />
                    <label className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-gray-500 font-bold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-blue-500">
                      {language === 'fr' ? 'Nom complet' : 'Full Name'}
                    </label>
                  </div>
                  <div className="relative group">
                    <input required type="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-blue-500 transition-all text-sm font-light" />
                    <label className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-gray-500 font-bold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-blue-500">
                      Email
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <select className="peer w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-blue-500 transition-all text-sm font-light text-white appearance-none cursor-pointer">
                    <option className="bg-[#0A192F]">{t.nav.conseil}</option>
                    <option className="bg-[#0A192F]">{t.nav.audit}</option>
                    <option className="bg-[#0A192F]">{t.nav.formation}</option>
                    <option className="bg-[#0A192F]">{t.nav.mediation}</option>
                  </select>
                  <label className="absolute left-0 -top-4 text-[9px] uppercase tracking-widest text-blue-500 font-bold">
                    {language === 'fr' ? 'Nature de la mission' : 'Nature of mission'}
                  </label>
                </div>

                <div className="relative group">
                  <textarea rows="4" required placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-blue-500 transition-all text-sm font-light resize-none"></textarea>
                  <label className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-gray-500 font-bold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-blue-500">
                    Message
                  </label>
                </div>

                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-[0.5em] text-[10px] font-bold transition-all flex items-center justify-center gap-4 group">
                  {language === 'fr' ? 'Envoyer' : 'Send'}
                  <Send className="w-3 h-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
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
