import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ServiceLayout = ({ content, label, imageUrl, altText, faq }) => {
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

  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F]">
      {faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}

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

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-24 px-8 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-16">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
              {faq.map((item, idx) => (
                <div key={idx} className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold mb-3 tracking-tight">{item.q}</h3>
                  <p className="text-gray-500 font-light leading-relaxed italic">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-[#0A192F] px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-6">
            {language === 'fr' ? 'Discutons de votre situation' : "Let's discuss your situation"}<span className="text-blue-600">.</span>
          </h2>
          <p className="text-gray-500 text-lg font-light italic mb-12 max-w-2xl mx-auto">
            {language === 'fr'
              ? "Contactez-nous dès aujourd'hui pour discuter de vos projets"
              : "Contact us today to discuss your projects"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl">
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <button
              onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
              className="flex items-center justify-center gap-4 bg-transparent border-2 border-gray-700 text-white hover:border-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all"
            >
              {language === 'fr' ? 'Prendre rendez-vous' : 'Book a meeting'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
