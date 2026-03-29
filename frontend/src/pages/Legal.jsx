import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Legal = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-6xl font-serif italic font-bold mb-8">
          {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
        </h1>
        
        <div className="text-gray-400 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? 'Éditeur du site' : 'Site Publisher'}
            </h2>
            <p>
              <strong className="text-white">MBK Procurement</strong><br />
              {language === 'fr' ? 'Siège social' : 'Headquarters'}: Luxembourg, Luxembourg<br />
              Email: contact@mbkprocurement.com<br />
              {language === 'fr' ? 'Directeur de publication' : 'Publication Director'}: MBK Procurement
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? 'Hébergement' : 'Hosting'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Ce site est hébergé par : [Nom de votre hébergeur]'
                : 'This site is hosted by: [Your hosting provider name]'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Tous les contenus de ce site (textes, images, logos) sont la propriété exclusive de MBK Procurement. Toute reproduction est interdite sans autorisation.'
                : 'All contents of this site (texts, images, logos) are the exclusive property of MBK Procurement. Any reproduction is prohibited without authorization.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? 'Responsabilité' : 'Liability'}
            </h2>
            <p>
              {language === 'fr'
                ? 'MBK Procurement s\'efforce d\'assurer l\'exactitude des informations diffusées mais ne peut être tenue responsable des erreurs ou omissions.'
                : 'MBK Procurement strives to ensure the accuracy of information published but cannot be held responsible for errors or omissions.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
