import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logique d'envoi ici
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO title={`${t.nav.contact} | MBK Procurement`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLONNE GAUCHE : INFOS DE CONTACT */}
          <div>
            <h1 className="text-5xl font-serif font-bold text-[#0A192F] mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-600 font-light mb-12">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              {/* LOCALISATION DYNAMIQUE */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F] uppercase tracking-widest text-xs mb-1">
                    {t.footer.contact} {/* Utilise la clé "Contact" ou "Localisation" */}
                  </h3>
                  <p className="text-gray-600">
                    Paris, France<br />
                    {t.footer.description.includes('premium') ? 'Zone EMEA' : 'EMEA Region'} 
                    {/* Note: Idéalement, ajoutez une clé spécifique dans mockData pour "Zone EMEA" */}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F] uppercase tracking-widest text-xs mb-1">Email</h3>
                  <p className="text-gray-600">contact@mbkprocurement.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F] uppercase tracking-widest text-xs mb-1">LinkedIn</h3>
                  <a href="#" className="text-blue-600 hover:underline">MBK Procurement Official</a>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE BILINGUE */}
          <div className="bg-gray-50 p-8 lg:p-12 shadow-inner border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  {t.contact.form.success}
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-bold uppercase tracking-widest text-xs"
                >
                  {language === 'fr' ? 'Renvoyer un message' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.name}</label>
                    <input type="text" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.email}</label>
                    <input type="email" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.subject}</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-colors" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.message}</label>
                  <textarea rows="5" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-colors"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#0A192F] text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                  {t.contact.form.submit} <Send className="w-4 h-4" />
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
