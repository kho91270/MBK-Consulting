import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulation d'envoi (à relier à ton service d'email plus tard)
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] font-sans text-white relative overflow-hidden">
      
      {/* SECTION VISUELLE */}
      <section className="absolute inset-0 w-full h-full bg-[#0A192F] overflow-hidden grayscale contrast-125 border-b border-gray-800">
        <img 
          src="https://images.unsplash.com/photo-1512411604-d73117498c8c?q=80&w=2500" 
          alt="Structure architecturale épurée représentant l'expertise stratégique de MBK Procurement." 
          className="w-full h-full object-cover object-center opacity-30 scale-105 hover:scale-100 transition-transform duration-[6s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60"></div>
      </section>

      {/* HEADER ÉPURÉ */}
      <header className="relative z-10 pt-48 pb-10 px-8 max-w-7xl mx-auto text-left">
        <h1 className="text-6xl md:text-9xl !font-serif !font-bold italic tracking-tighter leading-[0.85] mb-4 text-white">
          {language === 'fr' ? "L'Engagement Stratégique" : "Strategic Engagement"}<span className="text-blue-600">.</span>
        </h1>
      </header>

      {/* COLONNES INFOS & FORMULAIRE */}
      <section className="relative z-10 pb-32 pt-16 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
        
        {/* COLONNE INFOS */}
        <div className="space-y-16">
          <div className="border-t-2 border-white pt-12 group hover:border-blue-600 transition-colors duration-700">
            <h2 className="text-4xl !font-serif !font-bold italic mb-8 tracking-tighter text-white group-hover:translate-x-3 transition-transform duration-500">
              {language === 'fr' ? 'Définir la trajectoire' : 'Define the trajectory'}<span className="text-blue-600">.</span>
            </h2>
            <div className="space-y-6 text-2xl !font-serif italic text-gray-300">
              <p className="hover:text-blue-600 transition-colors cursor-pointer duration-500">
                contact@mbkprocurement.com
              </p>
              <p className="text-gray-400">Paris — Luxembourg — New-York — Dubaï</p>
            </div>
          </div>
        </div>

        {/* FORMULAIRE D'ÉLITE */}
        <div className="bg-white/5 p-12 border border-white/10 shadow-2xl backdrop-blur-md relative min-h-[500px] flex flex-col justify-center">
          
          {status === 'success' ? (
            <div className="animate-fadeIn text-center space-y-6">
              <div className="w-16 h-px bg-blue-600 mx-auto"></div>
              <h3 className="text-2xl !font-serif italic uppercase tracking-widest">
                {language === 'fr' ? 'Message Transmis' : 'Message Sent'}
              </h3>
              <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase">
                {language === 'fr' ? 'Nous reviendrons vers vous sous 48h.' : 'We will get back to you within 48h.'}
              </p>
              <button onClick={() => setStatus('idle')} className="text-blue-500 text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors">
                {language === 'fr' ? 'Nouvel envoi' : 'New request'}
              </button>
            </div>
          ) : (
            <form className="space-y-10" onSubmit={handleSubmit}>
              
              {/* NOM */}
              <div className="space-y-2 border-b border-white/20 pb-4 focus-within:border-blue-600 transition-all duration-500">
                <input 
                  required
                  type="text" 
                  placeholder={language === 'fr' ? "NOM" : "NAME"} 
                  className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase text-white placeholder:text-gray-500"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2 border-b border-white/20 pb-4 focus-within:border-blue-600 transition-all duration-500">
                <input 
                  required
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase text-white placeholder:text-gray-500"
                />
              </div>

         {/* SÉLECTEUR DE SERVICE (Dynamique FR/EN) */}
<div className="space-y-2 border-b border-white/20 pb-4 focus-within:border-blue-600 transition-all duration-500">
  <select 
    required
    className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase text-white cursor-pointer appearance-none"
    style={{ background: 'none' }}
  >
    <option className="bg-[#0A192F]" value="">
      {language === 'fr' ? '-- SÉLECTIONNER UN AXE --' : '-- SELECT EXPERTISE --'}
    </option>
    <option className="bg-[#0A192F]" value="audit">
      {language === 'fr' ? 'AUDIT STRATÉGIQUE' : 'STRATEGIC AUDIT'}
    </option>
    <option className="bg-[#0A192F]" value="conseil">
      {language === 'fr' ? 'CONSEIL EN PERFORMANCE' : 'PERFORMANCE CONSULTING'}
    </option>
    <option className="bg-[#0A192F]" value="formation">
      {language === 'fr' ? 'FORMATION ACHATS' : 'PROCUREMENT TRAINING'}
    </option>
    <option className="bg-[#0A192F]" value="mediation">
      {language === 'fr' ? 'MÉDIATION FOURNISSEURS' : 'SUPPLIER MEDIATION'}
    </option>
  </select>
</div>

              {/* MESSAGE */}
              <div className="space-y-2 border-b border-white/20 pb-4 focus-within:border-blue-600 transition-all duration-500">
                <textarea 
                  rows="3" 
                  placeholder="MESSAGE" 
                  className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase resize-none text-white placeholder:text-gray-500"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-6 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-blue-700 transition-all duration-700 disabled:bg-gray-700"
              >
                {status === 'sending' 
                  ? (language === 'fr' ? 'TRANSMISSION...' : 'SENDING...') 
                  : (language === 'fr' ? 'ENGAGER LA DISCUSSION' : 'START THE CONVERSATION')}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
