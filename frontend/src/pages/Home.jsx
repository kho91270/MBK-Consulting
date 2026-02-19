import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import ServiceCard from '../components/ServiceCard';
import { 
  Briefcase, 
  FileSearch, 
  GraduationCap, 
  HandshakeIcon, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Star,
  Award
} from 'lucide-react';
import { clients } from '../mockData';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.conseil.title,
      items: t.services.conseil.items,
      icon: Briefcase,
      color: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
      link: '/conseil'
    },
    {
      title: t.services.audit.title,
      items: t.services.audit.items,
      icon: FileSearch,
      color: 'bg-gradient-to-br from-rose-100 to-rose-200',
      link: '/audit'
    },
    {
      title: t.services.formation.title,
      items: t.services.formation.items,
      icon: GraduationCap,
      color: 'bg-gradient-to-br from-amber-100 to-amber-200',
      link: '/formation'
    },
    {
      title: t.services.mediation.title,
      items: t.services.mediation.items,
      icon: HandshakeIcon,
      color: 'bg-gradient-to-br from-sky-100 to-sky-200',
      link: '/mediation'
    }
  ];

  return (
    <>
      <SEO 
        title="Accueil"
        description="MBK Consulting - Cabinet de conseil, audit, formation et médiation. Expertise reconnue en transformation d'entreprise. Accompagnement sur mesure pour votre réussite."
        keywords="conseil stratégique, audit organisationnel, formation professionnelle, médiation commerciale, transformation entreprise, Paris"
        canonical="https://mbk-consulting.fr/"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" 
            alt="Business consulting"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              {t.hero.title}
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-200 mb-4 font-light">
              {t.hero.subtitle}
            </p>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-xl">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.common.servicesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slideInLeft">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80" 
                alt="Équipe MBK Consulting"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-50"></div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl z-20 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl z-20 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-xs text-gray-600">{t.common.years}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t.about.description}
              </p>
              <div className="space-y-5 mb-8">
                {t.about.valuesList.slice(0, 3).map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group">
                  {t.common.learnMore}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {t.common.clientsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.common.clientsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white font-bold text-base">{client.logo}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-semibold">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-4">
              {t.common.testimonialsTitle}
            </h3>
            <p className="text-center text-gray-600 mb-12 text-lg">
              {t.common.testimonialsSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover-lift border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Sophie L.</div>
                    <div className="text-sm text-gray-600">Directrice Générale</div>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Un accompagnement exceptionnel qui a transformé notre organisation. L'équipe MBK a su comprendre nos enjeux et proposer des solutions concrètes."
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover-lift border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Marc D.</div>
                    <div className="text-sm text-gray-600">Directeur Financier</div>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "L'audit réalisé par MBK nous a permis d'identifier des axes d'amélioration majeurs et d'optimiser nos processus."
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover-lift border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Claire P.</div>
                    <div className="text-sm text-gray-600">DRH</div>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Les formations proposées sont de très haute qualité. Nos équipes ont développé de nouvelles compétences essentielles."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-6">
            {t.common.ctaTitle}
          </h2>
          <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-2xl mx-auto">
            {t.common.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-0 text-lg px-10 py-7 shadow-2xl hover:shadow-3xl group">
                {t.nav.contact}
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-10 py-7 group">
                {t.common.learnMore}
                <Shield className="w-6 h-6 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
