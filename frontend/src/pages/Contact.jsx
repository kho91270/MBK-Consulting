import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const content = t?.contact || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const openKoalendar = () => {
    window.open(
      'https://koalendar.com/e/meet-with-mbk-procurement',
      'koalendar-popup',
      'width=800,height=700,scrollbars=yes,resizable=yes'
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // CONFIGURATION EMAIL — Web3Forms (gratuit, 250 emails/mois)
      //
      // 1. Allez sur https://web3forms.com
      // 2. Entrez votre email (contact@mbkprocurement.com)
      // 3. Copiez la clé (access_key) reçue par email
      // 4. Remplacez 'VOTRE_CLE_ICI' ci-dessous par votre clé
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      const WEB3FORMS_KEY = 'e2902245-a54e-4a05-a2ab-ddd87ca1674b';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nouveau message de ${formData.name} — MBK Procurement`,
          from_name: 'MBK Procurement Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO IMAGE */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512411604-d73117498c8c?q=80&w=2500"
          alt="MBK Connection Architecture"
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500';
          }}
        />
      </div>

      {/* TITLE */}
      <div className="text-center py-16 px-6">
        <h1 className="text-7xl font-serif italic font-bold mb-4">
          {content.title || 'Contact'}
        </h1>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">

        {/* LEFT COLUMN — INFO */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif italic mb-6">
              {language === 'fr' ? 'Définir la trajectoire' : 'Define the trajectory'}.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {content.subtitle || (language === 'fr'
                ? 'Nous transformons vos enjeux achats en avantage stratégique.'
                : 'We transform your procurement challenges into strategic advantage.')}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">contact@mbkprocurement.com</p>
            <p className="text-gray-500 text-sm">
              Paris — Luxembourg — New-York — Dubaï
            </p>
          </div>

          {/* SCHEDULE & CONNECT */}
          <div className="pt-8 border-t border-gray-800">
            <h3 className="text-xl font-serif italic mb-6 text-gray-300">
              {language === 'fr' ? 'Réserver ou se connecter' : 'Schedule or Connect'}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openKoalendar}
                className="flex-1 group relative px-6 py-4 bg-transparent border border-gray-700 hover:border-white transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">
                    {language === 'fr' ? 'Réserver un meeting' : 'Book a Meeting'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </button>

              <a
                href="https://www.linkedin.com/company/mbkprocurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative px-6 py-4 bg-transparent border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-center gap-3">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-4 text-center">
              {language === 'fr'
                ? 'Choisissez votre mode de contact préféré'
                : 'Choose your preferred contact method'}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — FORM */}
        <div>

          {/* SUCCESS STATE */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full py-20 text-center space-y-6">
              <div className="w-20 h-20 rounded-full border-2 border-green-500 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-serif italic">
                {language === 'fr' ? 'Message envoyé' : 'Message sent'}.
              </h3>
              <p className="text-gray-400 max-w-sm">
                {language === 'fr'
                  ? 'Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.'
                  : 'Thank you for your message. Our team will get back to you shortly.'}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-3 border border-gray-700 hover:border-white transition-colors text-sm uppercase tracking-wider"
              >
                {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
              </button>
            </div>
          ) : (

            /* FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={content.form?.name || (language === 'fr' ? 'Nom' : 'Name')}
                className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors text-white placeholder-gray-600"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={content.form?.email || 'Email'}
                className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors text-white placeholder-gray-600"
              />
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder={content.form?.message || 'Message'}
                className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 outline-none transition-colors resize-none text-white placeholder-gray-600"
              ></textarea>

              {/* ERROR MESSAGE */}
              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    {language === 'fr'
                      ? 'Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter par email.'
                      : 'Sending error. Please try again or contact us by email.'}
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {language === 'fr' ? 'ENVOI EN COURS...' : 'SENDING...'}
                  </>
                ) : (
                  language === 'fr' ? 'ENVOYER LE MESSAGE' : 'SEND MESSAGE'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
