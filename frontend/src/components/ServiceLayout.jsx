import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceLayout = ({ content, label, imageUrl, altText }) => {
  const { language } = useLanguage();

  if (!content || !content.items) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-px bg-blue-600 animate-pulse"></div>
      </div>
    );
  }

  const webpUrl = imageUrl && !imageUrl.includes('fm=webp')
    ? imageUrl + '&fm=webp'
    : imageUrl;

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F]">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl !font-serif !font-bold tracking-tighter leading-[0.9] !italic mb-10">
          {content.title}<span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-4xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed !italic border-l-4 border-blue-50 pl-10">
          {content.lead}
        </p>
      </header>

      <section className="relative w-full h-[65vh] bg-[#0A192F] overflow-hidden grayscale contrast-125 border-y border-gray-100">
        <img
          src={webpUrl}
          alt={altText || content.title}
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-60 scale-105 hover:scale-100 transition-transform duration-[4000ms] ease-out"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&fm=webp";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-24">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t-2 border-gray-100 pt-12 group hover:border-blue-600 transition-colors duration-700"
            >
              <h3 className="text-3xl md:text-4xl !font-serif !font-bold leading-tight mb-8 !italic tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {item}<span className="text-blue-600">.</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed !italic border-l-2 border-blue-50 pl-6">
                <p>
                  {content.descriptions && content.descriptions[idx]
                    ? content.descriptions[idx]
                    : (language === 'fr' ? "Optimisation stratégique de vos ressources." : "Strategic resource optimization.")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
