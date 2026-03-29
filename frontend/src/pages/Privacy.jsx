import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-6xl font-serif italic font-bold mb-8">
          {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
        </h1>
        
        <div className="text-gray-400 space-y-8 leading-relaxed">
          <p className="text-sm text-gray-600">
            {language === 'fr' ? 'Dernière mise à jour : Mars 2026' : 'Last updated: March 2026'}
          </p>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? '1. Collecte des données' : '1. Data Collection'}
            </h2>
            <p>
              {language === 'fr' 
                ? 'MBK Procurement collecte uniquement les données nécessaires via les formulaires de contact : nom, email, entreprise et message. Ces informations sont utilisées exclusivement pour répondre à vos demandes.'
                : 'MBK Procurement collects only necessary data through contact forms: name, email, company, and message. This information is used exclusively to respond to your requests.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? '2. Utilisation des données' : '2. Data Usage'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Vos données personnelles sont utilisées pour : répondre à vos demandes de contact, améliorer nos services, et vous envoyer des informations pertinentes (avec votre consentement).'
                : 'Your personal data is used to: respond to your contact requests, improve our services, and send you relevant information (with your consent).'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? '3. Cookies' : '3. Cookies'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Nous utilisons Google Analytics pour analyser le trafic du site. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.'
                : 'We use Google Analytics to analyze site traffic. You can disable cookies in your browser settings.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? '4. Vos droits (RGPD)' : '4. Your Rights (GDPR)'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression et d\'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à : contact@mbkprocurement.com'
                : 'In accordance with GDPR, you have the right to access, rectify, delete, and object to the processing of your data. To exercise these rights, contact us at: contact@mbkprocurement.com'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? '5. Sécurité' : '5. Security'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé.'
                : 'We implement appropriate security measures to protect your data from unauthorized access.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif italic text-white mb-4">
              {language === 'fr' ? '6. Contact' : '6. Contact'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Pour toute question concernant cette politique, contactez-nous :'
                : 'For any questions about this policy, contact us:'}
            </p>
            <p className="text-white mt-2">
              Email: contact@mbkprocurement.com<br />
              {language === 'fr' ? 'Adresse' : 'Address'}: Luxembourg, Luxembourg
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
