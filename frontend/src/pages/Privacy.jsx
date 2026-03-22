import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Confidentialité",
      sections: [
        { h: "Collecte des données", p: "Nous collectons uniquement les données transmises via notre formulaire de contact (Nom, Email, Institution) afin de répondre à vos demandes d'expertise." },
        { h: "Usage et Sécurité", p: "Vos informations sont traitées avec la plus stricte confidentialité et ne sont jamais cédées à des tiers. Nous appliquons des protocoles de sécurité rigoureux pour protéger vos échanges." },
        { h: "Vos droits", p: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande par email à contact@mbkprocurement.com." }
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        { h: "Data Collection", p: "We only collect data submitted through our contact form (Name, Email, Institution) to address your expertise inquiries." },
        { h: "Usage and Security", p: "Your information is processed with the strictest confidentiality and is never shared with third parties. We apply rigorous security protocols to protect your communications." },
        { h: "Your Rights", p: "In accordance with GDPR, you have the right to access, rectify, or delete your personal data upon simple request via email to contact@mbkprocurement.com." }
      ]
    }
  };

  const active = content[language];

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F] pt-48 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl !font-serif !font-bold !italic tracking-tighter mb-20">
          {active.title}<span className="text-blue-600">.</span>
        </h1>
        <div className="space-y-16">
          {active.sections.map((s, i) => (
            <div key={i} className="border-t border-gray-100 pt-8">
              <h2 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-4">{s.h}</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed italic">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
