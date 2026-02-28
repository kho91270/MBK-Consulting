// Mock data for MBK Procurement website

export const translations = {
  fr: {
    nav: {
      conseil: 'Conseil',
      audit: 'Audit',
      formation: 'Formation',
      mediation: 'Médiation',
      about: 'À Propos',
      contact: 'Contact'
    },
    hero: {
      title: 'MBK Procurement',
      subtitle: 'Votre partenaire en conseil, audit, formation et médiation',
      description: 'Excellence, expertise et accompagnement sur mesure pour transformer vos défis en opportunités',
      cta: 'Demander une consultation'
    },
    services: {
      title: 'Notre offre de services',
      conseil: {
        title: 'CONSEIL',
        items: [
          'Stratégie et transformation organisationnelle',
          'Optimisation des processus métiers',
          'Accompagnement au changement',
          'Diagnostic et recommandations stratégiques',
          'Plans d\'action orientés ROI'
        ]
      },
      audit: {
        title: 'AUDIT',
        items: [
          'Audit organisationnel et opérationnel',
          'Évaluation des systèmes de contrôle interne',
          'Audit de conformité et réglementaire',
          'Analyse des risques et opportunités',
          'Rapports détaillés et préconisations'
        ]
      },
      formation: {
        title: 'FORMATION',
        items: [
          'Programmes de formation sur mesure',
          'Développement des compétences managériales',
          'Formation en présentiel et à distance',
          'Coaching individuel et collectif',
          'Certifications professionnelles'
        ]
      },
      mediation: {
        title: 'MÉDIATION & CONCILIATION',
        items: [
          'Médiation commerciale et d\'entreprise',
          'Résolution amiable des conflits',
          'Conciliation et négociation',
          'Facilitation de dialogue entre parties',
          'Accompagnement post-conflit'
        ]
      }
    },
    about: {
      title: 'À propos de MBK Procurement',
      description: 'MBK Procurement est un cabinet de conseil de premier plan, spécialisé dans l\'optimisation de la fonction Achats et la transformation stratégique des entreprises.',
      mission: 'Notre mission',
      missionText: 'Accompagner nos clients dans leur développement en apportant des solutions innovantes et personnalisées qui créent de la valeur durable.',
      values: 'Nos valeurs',
      valuesList: [
        { title: 'Excellence', description: 'Nous visons l\'excellence dans chaque mission' },
        { title: 'Intégrité', description: 'L\'éthique et la transparence guident nos actions' },
        { title: 'Innovation', description: 'Nous proposons des solutions créatives et adaptées' },
        { title: 'Engagement', description: 'Nous nous engageons pleinement pour votre réussite' }
      ]
    },
    team: {
      title: 'Notre équipe',
      subtitle: 'Des experts passionnés par votre réussite',
      members: [
        {
          name: 'Marc-B. K.',
          role: 'Fondateur & Expert Achats',
          expertise: '20 ans d\'expérience en stratégie Procurement'
        },
        {
          name: 'Marie Dubois',
          role: 'Directrice Associée',
          expertise: 'Stratégie et transformation'
        }
      ]
    },
    stats: {
      experience: "Années d'expérience",
      clients: "Clients accompagnés",
      missions: "Missions réalisées",
      satisfaction: "Taux de satisfaction"
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes à votre écoute pour répondre à vos besoins',
      form: {
        name: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        company: 'Entreprise',
        subject: 'Sujet',
        message: 'Votre message',
        submit: 'Envoyer',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi'
      }
    },
    footer: {
      description: 'MBK Procurement - Votre partenaire de confiance pour la transformation et la croissance de votre entreprise.',
      links: 'Liens rapides',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions générales',
      rights: 'Tous droits réservés',
      contact: 'Contact'
    },
 common: {
      learnMore: 'En savoir plus',
      years: 'années',
      clientsTitle: 'Nos clients nous font confiance',
      clientsSubtitle: 'Ils nous ont fait confiance pour les accompagner dans leur transformation',
      testimonialsTitle: 'Témoignages clients',
      testimonialsSubtitle: 'Découvrez ce que nos clients disent de leur expérience avec MBK Procurement',
      ctaTitle: 'Prêt à transformer votre entreprise ?',
      ctaSubtitle: 'Contactez-nous dès aujourd\'hui pour discuter de vos projets',
      servicesSubtitle: 'Des solutions sur mesure pour accompagner votre transformation et votre croissance',
      // C'EST CETTE LISTE QUE "HOME.JSX" CHERCHE (Ligne 228) :
      testimonials: [
        {
          name: 'Sophie L.',
          role: 'Directrice Générale',
          text: '"Un accompagnement exceptionnel qui a transformé notre organisation. L\'équipe MBK a su comprendre nos enjeux."'
        },
        {
          name: 'Marc D.',
          role: 'Directeur Financier',
          text: '"L\'audit réalisé par MBK nous a permis d\'identifier des axes d\'amélioration majeurs."'
        },
        {
          name: 'Claire P.',
          role: 'DRH',
          text: '"Les formations proposées sont de très haute qualité. Nos équipes ont développé de nouvelles compétences."'
        }
      ]
    },
  en: {
    nav: {
      conseil: 'Consulting',
      audit: 'Audit',
      formation: 'Training',
      mediation: 'Mediation',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'MBK Procurement',
      subtitle: 'Your partner in consulting, audit, training and mediation',
      description: 'Excellence, expertise and tailored support to transform your challenges into opportunities',
      cta: 'Request a consultation'
    },
    about: {
      title: 'About MBK Procurement',
      description: 'MBK Procurement is a leading consulting firm specializing in purchasing optimization and strategic corporate transformation.',
      mission: 'Our Mission',
      missionText: 'To support our clients in their development by providing innovative and personalized solutions that create sustainable value.',
      values: 'Our Values',
      valuesList: [
        { title: 'Excellence', description: 'We aim for excellence in every mission' },
        { title: 'Integrity', description: 'Ethics and transparency guide our actions' },
        { title: 'Innovation', description: 'We offer creative and adapted solutions' },
        { title: 'Commitment', description: 'We are fully committed to your success' }
      ]
    },
    team: {
      title: 'Our Team',
      subtitle: 'Experts passionate about your success',
      members: [
        {
          name: 'Marc-B. K.',
          role: 'Founder & Purchasing Expert',
          expertise: '20 years of experience in Procurement strategy'
        }
      ]
    },
    stats: {
      experience: "Years of experience",
      clients: "Clients supported",
      missions: "Missions completed",
      satisfaction: "Satisfaction rate"
    },
    footer: {
      description: 'MBK Procurement - Your trusted partner for the transformation and growth of your business.',
      links: 'Quick links',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      terms: 'Terms and conditions',
      rights: 'All rights reserved',
      contact: 'Contact'
    },
    common: {
      ctaSubtitle: '"Our commitment: to be by your side at every stage of your transformation to guarantee lasting results."'
    }
  }
};

export const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'Global Industries', logo: 'GI' },
  { name: 'Innovation Group', logo: 'IG' },
  { name: 'Strategic Alliance', logo: 'SA' }
];
