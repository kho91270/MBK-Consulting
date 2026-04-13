import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setNewsletterStatus('sending');

    try {
      const WEB3FORMS_KEY = 'e2902245-a54e-4a05-a2ab-ddd87ca1674b';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          email,
          subject: 'Nouvelle inscription newsletter — MBK Procurement',
          from_name: 'MBK Procurement Newsletter',
          message: `Nouvelle inscription à la newsletter : ${email}`,
          replyto: email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setNewsletterStatus('success');
        setEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 4000);
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setNewsletterStatus('error');
    }
  };

  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-serif italic text-xl sm:text-2xl mb-4">MBK Procurement</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {language === 'fr'
                ? "Excellence stratégique en achats et approvisionnement."
                : 'Strategic excellence in procurement and supply chain.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/mbkprocurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Services' : 'Services'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/conseil" className="hover:text-white transition-colors">{language === 'fr' ? 'Conseil' : 'Consulting'}</Link></li>
              <li><Link to="/audit" className="hover:text-white transition-colors">Audit</Link></li>
              <li><Link to="/formation" className="hover:text-white transition-colors">{language === 'fr' ? 'Formation' : 'Training'}</Link></li>
              <li><Link to="/mediation" className="hover:text-white transition-colors">{language === 'fr' ? 'Médiation' : 'Mediation'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Ressources' : 'Resources'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{language === 'fr' ? 'Le Cabinet' : 'About'}</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">{language === 'fr' ? 'Cas Clients' : 'Case Studies'}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li>
                <button
                  onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                  className="hover:text-white transition-colors text-left"
                >
                  {language === 'fr' ? 'Prendre rendez-vous' : 'Book a Meeting'}
                </button>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">
              {language === 'fr'
                ? 'Recevez nos analyses et insights directement.'
                : 'Get our analyses and insights delivered directly.'}
            </p>
            {newsletterStatus === 'success' ? (
              <div className="flex items-center gap-2 text-green-500 text-sm py-2">
                <CheckCircle className="w-4 h-4" />
                <span>{language === 'fr' ? 'Inscription confirmée' : 'Subscription confirmed'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 min-w-0 px-3 py-2 bg-transparent border border-gray-800 text-white text-sm placeholder-gray-600 focus:border-gray-600 outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'sending'}
                  className="px-3 py-2 bg-white text-black hover:bg-blue-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Subscribe"
                >
                  {newsletterStatus === 'sending' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            )}

            {newsletterStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-xs mt-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>
                  {language === 'fr'
                    ? "Erreur lors de l'inscription. Veuillez réessayer."
                    : 'Subscription error. Please try again.'}
                </span>
              </div>
            )}

            <div className="space-y-2 text-sm mt-6 sm:mt-8 border-t border-gray-900 pt-4">
              <Link to="/privacy" className="block hover:text-white transition-colors">
                {language === 'fr' ? 'Confidentialité' : 'Privacy'}
              </Link>
              <Link to="/legal" className="block hover:text-white transition-colors">
                {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} MBK Procurement. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
          </p>
          <a href="mailto:contact@mbkprocurement.com" className="text-xs text-gray-600 hover:text-white transition-colors">
            contact@mbkprocurement.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
