import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title={`${t.nav.contact} | MBK Procurement`} 
        description={t.contact.subtitle}
        keywords="Contacter MBK Procurement, Devis Conseil Achats, Audit Performance Achats Paris, Cabinet Sourcing EMEA"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-serif font-bold text-[#0A192F] mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 font-light mb-12">{t.contact.subtitle}</p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">{t.contact.location}</h3>
                <p className="text-gray-600 font-light">Paris, France<br />{t.contact.emea}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">LinkedIn</h3>
                <a href="https://linkedin.com/company/mbkprocurement" target="_blank" className="text-blue-600 hover:underline">MBK Procurement Official</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-10 border border-gray-100 shadow-inner">
          {submitted ? (
            <div className="text-green-600 font-bold text-center py-20 uppercase tracking-widest text-xs">{t.contact.form.success}</div>
          ) : (
            <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-6">
              <input type="text" placeholder={t.contact.form.name} className="w-full bg-white border p-4 outline-none focus:border-blue-600" required />
              <input type="email" placeholder={t.contact.form.email} className="w-full bg-white border p-4 outline-none focus:border-blue-600" required />
              <textarea placeholder={t.contact.form.message} rows="5" className="w-full bg-white border p-4 outline-none focus:border-blue-600" required></textarea>
              <button className="w-full bg-[#0A192F] text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                {t.contact.form.submit} <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
