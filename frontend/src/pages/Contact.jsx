import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(t.contact.form.success);
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A192F] py-24 text-white text-center">
        <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-4">{t.contact.title}</h1>
        <p className="text-xl text-gray-400 font-light tracking-wide">{t.contact.subtitle}</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Formulaire - Prend 2 colonnes */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-b border-gray-300 focus-within:border-blue-600 transition-colors">
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">{t.contact.form.name}</label>
                  <input type="text" required className="w-full py-4 bg-transparent outline-none text-lg font-light" placeholder="Ex: Jean Martin" />
                </div>
                <div className="border-b border-gray-300 focus-within:border-blue-600 transition-colors">
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">{t.contact.form.email}</label>
                  <input type="email" required className="w-full py-4 bg-transparent outline-none text-lg font-light" placeholder="jean@entreprise.com" />
                </div>
              </div>

              <div className="border-b border-gray-300 focus-within:border-blue-600 transition-colors">
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">{t.contact.form.subject}</label>
                <input type="text" required className="w-full py-4 bg-transparent outline-none text-lg font-light" />
              </div>

              <div className="border-b border-gray-300 focus-within:border-blue-600 transition-colors">
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">{t.contact.form.message}</label>
                <textarea rows="4" required className="w-full py-4 bg-transparent outline-none text-lg font-light resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="bg-[#0A192F] text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : t.contact.form.submit}
              </button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="space-y-12 bg-gray-50 p-12">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600 mb-6 italic">Localisation</h4>
              <p className="text-lg font-serif text-[#0A192F]">Paris, France</p>
              <p className="text-gray-500 font-light mt-2 leading-relaxed">Interventions sur toute la zone EMEA.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600 mb-6 italic">Direct</h4>
              <p className="text-lg font-serif text-[#0A192F]">contact@mbkprocurement.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
