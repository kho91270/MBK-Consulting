import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import ServiceCard from '../components/ServiceCard';
import { Briefcase, FileSearch, GraduationCap, HandshakeIcon, ArrowRight, CheckCircle2, Users } from 'lucide-react';
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-700 mb-4 font-light">
              {t.hero.subtitle}
            </p>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t.about.description}
              </p>
              <div className="space-y-4 mb-8">
                {t.about.valuesList.slice(0, 3).map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  {t.nav.about}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.team.members.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-center mb-1">{member.name}</h4>
                  <p className="text-sm text-blue-600 text-center mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600 text-center">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            {t.about.title.includes('propos') ? 'Nos clients nous font confiance' : 'Our clients trust us'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">{client.logo}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.hero.title.includes('partenaire') ? 'Prêt à transformer votre entreprise ?' : 'Ready to transform your business?'}
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            {t.hero.title.includes('partenaire') ? 'Contactez-nous dès aujourd\'hui pour discuter de vos projets' : 'Contact us today to discuss your projects'}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-0 text-lg px-8 py-6">
              {t.nav.contact}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
