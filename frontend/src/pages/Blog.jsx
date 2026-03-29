import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      slug: 'optimiser-tco',
      date: '2025-03-15',
      category: language === 'fr' ? 'Stratégie' : 'Strategy',
      title: language === 'fr'
        ? "Comment optimiser votre TCO en 5 étapes"
        : 'How to optimize your TCO in 5 steps',
      excerpt: language === 'fr'
        ? "Le Total Cost of Ownership reste l'indicateur le plus sous-estimé en procurement. Découvrez comment en faire votre avantage compétitif."
        : 'Total Cost of Ownership remains the most underestimated indicator in procurement. Learn how to make it your competitive advantage.',
      readTime: language === 'fr' ? '8 min de lecture' : '8 min read',
    },
    {
      id: 2,
      slug: 'audit-maturite',
      date: '2025-02-28',
      category: 'Audit',
      title: language === 'fr'
        ? "Audit de maturité achats : pourquoi c'est le point de départ"
        : 'Procurement maturity audit: why it is the starting point',
      excerpt: language === 'fr'
        ? "Avant toute transformation, un diagnostic objectif est indispensable. Retour sur notre méthodologie d'audit en 360°."
        : 'Before any transformation, an objective assessment is essential. An overview of our 360-degree audit methodology.',
      readTime: language === 'fr' ? '6 min de lecture' : '6 min read',
    },
    {
      id: 3,
      slug: 'negociation-elite',
      date: '2025-01-20',
      category: 'Formation',
      title: language === 'fr'
        ? "Les 7 principes de la négociation de haut niveau"
        : 'The 7 principles of high-level negotiation',
      excerpt: language === 'fr'
        ? "La négociation n'est pas un bras de fer. C'est un art stratégique. Voici les fondamentaux que nous enseignons à nos clients."
        : "Negotiation is not an arm wrestle. It's a strategic art. Here are the fundamentals we teach our clients.",
      readTime: language === 'fr' ? '10 min de lecture' : '10 min read',
    },
    {
      id: 4,
      slug: 'mediation-fournisseur',
      date: '2024-12-10',
      category: language === 'fr' ? 'Médiation' : 'Mediation',
      title: language === 'fr'
        ? "Conflit fournisseur : quand la médiation sauve la relation"
        : 'Supplier conflict: when mediation saves the relationship',
      excerpt: language === 'fr'
        ? "Un litige mal géré peut coûter des millions. La médiation stratégique transforme les impasses en opportunités de renforcement."
        : 'A poorly managed dispute can cost millions. Strategic mediation transforms deadlocks into strengthening opportunities.',
      readTime: language === 'fr' ? '7 min de lecture' : '7 min read',
    },
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <SEO
        title="Insights"
        description="Articles, analyses et perspectives sur les achats, le procurement et la performance. Expertise MBK Procurement."
        canonical="https://www.mbkprocurement.com/blog"
        keywords="blog achats, articles procurement, insights conseil achats, tendances achats"
      />
      <div className="min-h-screen bg-white font-sans text-[#0A192F]">
        <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl !font-serif !font-bold tracking-tighter leading-[0.9] !italic mb-10">
            Insights<span className="text-blue-600">.</span>
          </h1>
          <p className="max-w-4xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed !italic border-l-4 border-blue-50 pl-10">
            {language === 'fr'
              ? "Analyses, méthodologies et perspectives pour transformer votre fonction achats."
              : 'Analyses, methodologies and perspectives to transform your procurement function.'}
          </p>
        </header>

        <section className="pb-32 px-8 max-w-7xl mx-auto">
          <div className="space-y-0">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="border-t-2 border-gray-100 py-16 group hover:border-blue-600 transition-colors duration-700"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="flex-1 max-w-3xl">
                    <div className="flex items-center gap-6 mb-6">
                      <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                        {article.category}
                      </span>
                      <span className="text-gray-300 text-xs">
                        {formatDate(article.date)}
                      </span>
                      <span className="text-gray-300 text-xs">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl !font-serif !font-bold !italic tracking-tighter leading-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                      {article.title}<span className="text-blue-600">.</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-light leading-relaxed !italic">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="text-gray-200 text-7xl md:text-8xl !font-serif !italic leading-none shrink-0">
                    0{index + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl !font-serif !font-bold !italic tracking-tighter mb-4">
                {language === 'fr' ? "Besoin d'expertise" : 'Need expertise'}<span className="text-blue-600"> ?</span>
              </h2>
              <p className="text-gray-500 text-lg font-light !italic">
                {language === 'fr'
                  ? "Discutons de vos enjeux achats."
                  : "Let's discuss your procurement challenges."}
              </p>
            </div>
            <Link
              to="/contact"
              className="group flex items-center gap-4 px-10 py-5 bg-[#0A192F] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap"
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
