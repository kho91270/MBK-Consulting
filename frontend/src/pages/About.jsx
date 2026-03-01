import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-32 px-8 text-center border-b border-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mb-12 tracking-tighter uppercase">
            {t.nav.about}
          </h1>
          <p className="text-2xl text-gray-500 font-light leading-relaxed italic">
            "Nous concevons les architectures de coûts qui soutiendront votre croissance de demain."
          </p>
        </div>
      </section>

      {/* SECTION DOUBLE IMAGE B&W ASYMÉTRIQUE */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-5 gap-8 grayscale contrast-125">
        <div className="md:col-span-3 h-[50vh] bg-gray-100">
           <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1500" alt="Team MBK Meeting" className="w-full h-full object-cover"/>
        </div>
        <div className="md:col-span-2 h-[50vh] bg-gray-100 mt-16">
           <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1500" alt="Expertise MBK" className="w-full h-full object-cover"/>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
        <div className="space-y-8">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold underline decoration-blue-600/30 underline-offset-8">Notre ADN</h3>
          <p className="text-gray-600 font-light text-lg leading-relaxed">
            MBK Procurement est né de la volonté d'apporter aux directions générales une expertise pointue en ingénierie achats, souvent réservée aux plus grands groupes mondiaux. 
          </p>
        </div>
        <div className="space-y-8">
           <h3 className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold underline decoration-blue-600/30 underline-offset-8">Méthodologie</h3>
           <p className="text-gray-600 font-light text-lg leading-relaxed">
             Basée sur les standards de l'audit financier et de l'ingénierie industrielle, notre approche garantit un TCO (Total Cost of Ownership) optimisé et pérenne.
           </p>
        </div>
      </section>
    </div>
  );
};

export default About;
