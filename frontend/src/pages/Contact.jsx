import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  // LA CORRECTION EST ICI : t, ET language
  const { t, language } = useLanguage(); 
  const c = t.contact;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t.nav.contact} | MBK Procurement`} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#0A192F] mb-12">{c.title}</h1>
        
        <div className="grid lg:grid-cols-2 gap-20">
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder={language === 'fr' ? "Votre nom" : "Your name"} 
              className="w-full border-b border-gray-300 py-4 outline-none focus:border-blue-600 transition-all font-light"
            />
            <button className="bg-[#0A192F] text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-blue-600 transition-all">
              {language === 'fr' ? "Envoyer" : "Send"} <Send className="w-4 h-4" />
            </button>
          </form>
          
          <div className="bg-gray-50 p-12 space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 w-5 h-5" />
              <p className="text-sm font-light text-gray-600 tracking-wide">contact@mbkprocurement.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
