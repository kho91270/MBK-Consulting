import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section Institutionnelle */}
      <section className="pt-48 pb-32 px-8 text-center border-b border-gray-50">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.6em] text-blue-600 font-bold mb-8 block">
            Corporate Profile // Excellence & Rigor
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mb-12 tracking-tighter uppercase leading-none">
            {t?.nav?.about || 'Le Cabinet'}
          </h1>
          <p className="text-2xl text-gray-500 font-serif font-light leading-relaxed italic max-w-3xl mx-auto">
            "Nous concevons les architectures de coûts qui soutiendront votre croissance de demain, avec la rigueur des plus hauts standards du conseil mondial."
          </p>
        </div>
      </section>

      {/* Section Double Image B&W Style Magazine Corporate */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 grayscale contrast-125 brightness-90">
          <div className="md:col-span-3 h-[60vh] bg-gray-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1500" 
              alt="MBK Headquarters Architecture" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="md:col-span-2 h-[60vh] bg-gray-100 mt-16 overflow-hidden hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1444653300602-86aa896173b4?auto=format&fit=crop&q=80&w=1500" 
              alt="Expertise and Detail" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Section ADN et Méthodologie */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-8 border-t border-gray-100 pt-12">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-blue-600 font-bold">
              Notre Identité
            </h3>
            <p className="text-gray-600 font-light text-xl leading-relaxed font-serif italic">
              MBK Procurement est né de la volonté d'apporter aux directions générales une expertise pointue en ingénierie achats, basée sur une culture de la donnée et de la performance pure.
            </p>
          </div>
          <div className="space-y-8 border-t border-gray-100 pt-12">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-blue-600 font-bold">
              Standards Mondiaux
            </h3>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              Basée sur les méthodologies de l'audit financier et de l'ingénierie industrielle, notre approche garantit une optimisation du TCO (Total Cost of Ownership) à la fois agressive et pérenne.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
