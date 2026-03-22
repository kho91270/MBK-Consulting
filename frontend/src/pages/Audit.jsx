import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t, language } = useLanguage();
  
  const leadText = language === 'fr' 
    ? "Un regard neutre et expert pour transformer vos dépenses en opportunités de croissance. Nous identifions les zones de risques et les gisements de profit cachés dans votre organisation."
    : "An expert, neutral perspective to transform your expenses into growth opportunities. We identify risk zones and hidden profit sources within your organization.";

  // Exemple de descriptions détaillées et accessibles
  const descriptions = language === 'fr' ? [
    "Nous scannons l'ensemble de votre organisation pour comprendre où part chaque euro. Un diagnostic clair pour aider les décideurs à arbitrer leurs budgets.",
    "Vérifier que vos contrats protègent réellement l'entreprise. Un point crucial pour les directions juridiques et les services RH qui gèrent des prestataires.",
    "Vos fournisseurs sont-ils des partenaires ou des risques ? Nous mesurons leur fiabilité pour sécuriser votre production et votre image de marque.",
    "Identifier immédiatement des économies sans sacrifier la qualité. Un gain direct pour l'EBITDA de l'entreprise, apprécié par tous les actionnaires."
  ] : [
    "We scan your entire organization to understand where every dollar goes. A clear diagnosis to help decision-makers manage their budgets.",
    "Verifying that your contracts truly protect the company. A crucial point for legal and HR departments managing service providers.",
    "Are your suppliers partners or risks? We measure their reliability to secure your production and brand image.",
    "Immediately identify savings without sacrificing quality. A direct gain for the company's EBITDA, valued by all stakeholders."
  ];

  const contentWithDescriptions = {
    ...t.services.audit,
    descriptions: descriptions
  };

  return (
    <ServiceLayout 
      content={contentWithDescriptions} 
      label={t.common.analysisLabel} 
      imageUrl="https://images.unsplash.com/photo-1454165833767-0274b24f6733?q=80&w=2000"
      leadText={leadText}
    />
  );
};

export default Audit;
