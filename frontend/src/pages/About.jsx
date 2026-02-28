import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const valueIcons = {
    0: Award,
    1: Target,
    2: Lightbulb,
    3: Users
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80" 
            alt={t.about.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.about.mission}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {t.about.missionText}
              </p>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <p className="text-gray-800 italic">
                  {/* Utilisation de la clé de traduction pour la citation */}
                  {t.about.quote}
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?w=800&q=80" 
                alt={t.about.mission}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            {t.about.values}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {/* Utilisation de la clé de traduction pour le sous-titre des valeurs */}
            {t.about.valuesSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.valuesList.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            {t.team.title}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {/* Utilisation de la clé de traduction pour le sous-titre de l'équipe */}
            {t.team.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {t.team.members.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm text-center">{member.expertise}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
              alt={t.team.title}
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">{t.stats.experience}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100">{t.stats.clients}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">{t.stats.missions}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">{t.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
