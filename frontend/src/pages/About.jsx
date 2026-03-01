import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="pt-48 pb-32 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.6em] text-blue-600 font-bold mb-8 block">Corporate Profile</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0A192F] mb-12 tracking-tighter uppercase leading-none">{t.nav.about}</h1>
          <p className="text-2xl text-gray-500 font-serif font-light leading-relaxed italic max-w-3xl mx-auto">
            "Nous concevons les architectures de coûts qui soutiendront votre croissance de demain."
          </p>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-5 gap-8 grayscale contrast-125 brightness-90">
        <div className="md:col-span-3 h-[50vh] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1500" alt="Office" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
        </div>
        <div className="md:col-span-2 h-[50vh] mt-16 overflow-hidden hidden md:block">
          <img src="https://images.unsplash.com/photo-1444653300602-86aa896173b4?q=80&w=1500" alt="Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
        </div>
      </section>
    </div>
  );
};

export default About;
