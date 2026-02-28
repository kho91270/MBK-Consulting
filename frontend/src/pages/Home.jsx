import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { 
  Briefcase, 
  FileSearch, 
  GraduationCap, 
  HandshakeIcon, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Award,
  Zap
} from 'lucide-react';
import { clients } from '../mockData';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.conseil.title,
      items: t.services.conseil.items,
      icon: Briefcase,
      color: 'bg-blue-50',
      link: '/conseil'
    },
    {
      title: t.services.audit.title,
      items: t.services.audit.items,
      icon: FileSearch,
      color: 'bg-blue-50',
      link: '/audit'
    },
    {
      title: t.services.formation.title,
      items: t.services.formation.items,
      icon: GraduationCap,
      color: 'bg-blue-50',
      link: '/formation'
    },
    {
      title: t.services.mediation.title,
      items: t.services.mediation.items,
      icon: HandshakeIcon,
      color: 'bg-blue-50',
      link: '/mediation'
    }
  ];

  return (
    <>
      <SEO 
        title="MBK Procurement | Expert Consultant Achats"
        description="Audit, Stratégie et Performance Achats. Consultant expert pour optimiser votre marge opérationnelle."
        canonical="https://mbkprocurement.com/"
      />

      <div className="min-h-screen bg-white">
        {/* HERO SECTION - STYLE MCKINSEY */}
        <section className="relative min-h-[85vh] flex items-center bg-[#0A192F] overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
              className="w-full h-full object-cover filter grayscale"
              alt="Background MBK"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1 border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                Strategic Procurement Consulting
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] font-serif">
                Libérer la <span className="text-blue-400">performance</span> opérationnelle.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 font-light leading-relaxed border-l-2 border-blue-500 pl-8">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <button className="bg-white text-[#0A192F] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300">
                    {t.hero.cta}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - ALIGNEMENT PARFAIT */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">{t.services.title}</h2>
               <div className="w-20 h-1.5 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="p-8 flex-grow">
                    <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 h-14 flex items-center font-serif uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <ul className="space-y-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 pt-0 mt-auto">
                    <Link to={service.link} className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-blue-600 group-hover:text-blue-800">
                      {t.common.learnMore}
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION INSIGHTS (STYLE DELOITTE) */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-16 font-serif">Perspectives & Analyses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 aspect-video">
                  <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Data" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">L'IA dans le Sourcing 2026</h3>
                <p className="text-gray-600 mb-4">Comment l'IA générative redéfinit la réduction des coûts opérationnels.</p>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest italic underline">Lire l'article</span>
              </div>
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 aspect-video">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Supply Chain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Résilience de la Supply Chain</h3>
                <p className="text-gray-600 mb-4">Sécuriser ses flux dans un contexte de volatilité mondiale.</p>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest italic underline">Découvrir l'étude</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; // <--- C'EST CETTE LIGNE QUI MANQUAIT ET CAUSAIT LE POINT ROUGE
