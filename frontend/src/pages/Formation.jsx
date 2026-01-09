import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

const Formation = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: 'Formations certifiantes',
      description: 'Des programmes reconnus et certifiés Qualiopi'
    },
    {
      title: 'Formateurs experts',
      description: 'Des professionnels expérimentés et pédagogues'
    },
    {
      title: 'Méthodes interactives',
      description: 'Ateliers pratiques et mises en situation réelles'
    },
    {
      title: 'Suivi personnalisé',
      description: 'Un accompagnement post-formation pour ancrer les acquis'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 to-amber-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80" 
            alt="Formation professionnelle"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center space-x-2 bg-amber-500 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5" />
                <span className="font-semibold">{t.services.formation.title}</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {t.services.formation.title}
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-amber-50">
                {t.hero.title.includes('partenaire')
                  ? 'Développez les compétences de vos équipes avec des formations adaptées à vos enjeux.'
                  : 'Développez les compétences de vos équipes avec des formations adaptées à vos enjeux.'}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.hero.title.includes('partenaire') ? 'Notre offre de formation' : 'Notre offre de formation'}
                </h3>
                <ul className="space-y-4">
                  {t.services.formation.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=800&q=80" 
              alt="Session de formation"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?w=800&q=80" 
              alt="Formation en équipe"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            {t.hero.title.includes('partenaire') ? 'Nos points forts' : 'Our strengths'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.hero.title.includes('partenaire')
              ? 'Une pédagogie innovante qui place l\'apprenant au cœur de la formation'
              : 'An innovative pedagogy that places the learner at the heart of training'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.hero.title.includes('partenaire') ? 'Construisons votre programme de formation' : 'Let\'s build your training program'}
          </h2>
          <p className="text-xl mb-10 text-amber-100">
            {t.hero.title.includes('partenaire')
              ? 'Nos formateurs vous accompagnent pour développer les compétences clés de votre organisation'
              : 'Our trainers support you to develop the key skills of your organization'}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 border-0">
              {t.nav.contact}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Formation;
