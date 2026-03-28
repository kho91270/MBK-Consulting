import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();

  // Sécurité si translations.js est incomplet
  const content = t?.contact || {};

  // Fonction pour ouvrir Koalendar en popup
  const openKoalendar = () => {
    window.open(
      'https://koalendar.com/e/meet-with-mbk-procurement',
      'koalendar-popup',
      'width=800,height=700,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* SECTION VISUELLE : L'Image Exclusive "Le Lien Stratégique" */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512411604-d73117498c8c?q=80&w=2500" 
          alt="MBK Connection Architecture"
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500";
          }}
        />
      </div>

      {/* HEADER ÉPURÉ (Même style que le Hero de la Home) */}
      <div className="text-center py-16 px-6">
        <h1 className="text-7xl font-serif italic font-bold mb-4">
          {content.title || 'Contact'}
        </h1>
      </div>

      {/* COLONNES INFOS & FORMULAIRE */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">
        
        {/* COLONNE INFOS */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif italic mb-6">
              {language === 'fr' ? 'Définir la trajectoire' : 'Define the trajectory'}.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {content.subtitle || (language === 'fr' 
                ? 'Nous transformons vos enjeux achats en avantage stratégique.' 
                : 'We transform your procurement challenges into strategic advantage.')}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">contact@mbkprocurement.com</p>
            <p className="text-gray-500 text-sm">
              Paris — Luxembourg — New-York — Dubaï
            </p>
          </div>

          {/* NOUVELLE SECTION : SCHEDULE & CONNECT */}
          <div className="pt-8 border-t border-gray-800">
            <h3 className="text-xl font-serif italic mb-6 text-gray-300">
              {language === 'fr' ? 'Réserver ou se connecter' : 'Schedule or Connect'}
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* BOUTON KOALENDAR */}
              <button
                onClick={openKoalendar}
                className="flex-1 group relative px-6 py-4 bg-transparent border border-gray-700 hover:border-white transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">
                    {language === 'fr' ? 'Réserver un meeting' : 'Book a Meeting'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </button>

              {/* BOUTON LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/mbkprocurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative px-6 py-4 bg-transparent border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-center gap-3">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-4 text-center">
              {language === 'fr' 
                ? 'Choisissez votre mode de contact préféré' 
                : 'Choose your preferred contact method'}
            </p>
          </div>
        </div>

        {/* FORMULAIRE SIMPLE ET CHIC (Adapté pour fond sombre) */}
        <div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder={content.form?.name || (language === 'fr' ? 'Nom' : 'Name')}
              className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors text-white placeholder-gray-600"
            />
            <input
              type="email"
              placeholder={content.form?.email || 'Email'}
              className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors text-white placeholder-gray-600"
            />
            <textarea
              placeholder={content.form?.message || 'Message'}
              rows={6}
              className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors resize-none text-white placeholder-gray-600"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              {language === 'fr' ? 'ENVOYER LE MESSAGE' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
