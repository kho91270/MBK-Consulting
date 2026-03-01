import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Mail, MapPin, Send, Linkedin, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // État pour le champ "Honeypot" (Anti-Bot)
  const [hpValue, setHpValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. SÉCURITÉ HONEYPOT : Si ce champ est rempli, c'est un robot.
    if (hpValue !== "") {
      console.warn("Tentative de spam détectée via bot.");
      // On simule un succès pour tromper le robot sans rien envoyer
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    // 2. RÉCUPÉRATION ET NETTOYAGE DES DONNÉES
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('user_name').trim(),
      email: formData.get('user_email').trim(),
      subject: formData.get('user_subject').trim(),
      message: formData.get('user_message').trim(),
    };

    // 3. VALIDATION CÔTÉ CLIENT
    if (!payload.email.includes('@') || payload.message.length < 10) {
      alert(language === 'fr' ? "Données invalides." : "Invalid data.");
      setLoading(false);
      return;
    }

    try {
      // LOGIQUE D'ENVOI (Exemple avec EmailJS ou votre propre API)
      // console.log("Envoi sécurisé du formulaire...", payload);
      
      // Simuler l'appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title={`${t.nav.contact} | MBK Procurement`} 
        description={t.contact.subtitle}
        keywords="Contact MBK Procurement, Expertise Achats Paris, Consultation Sourcing"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* INFOS DE CONTACT */}
        <div>
          <h1 className="text-5xl font-serif font-bold text-[#0A192F] mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 font-light mb-12 italic">{t.contact.subtitle}</p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg"><MapPin className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-[10px] mb-1">{t.contact.location}</h3>
                <p className="text-gray-600 font-light">Paris, France<br />{t.contact.emea}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg"><Mail className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-[10px] mb-1">Email</h3>
                <p className="text-gray-600 font-light">contact@mbkprocurement.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg"><Linkedin className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-[10px] mb-1">LinkedIn</h3>
                <a href="https://linkedin.com/company/mbkprocurement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-light">
                  MBK Procurement Official
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 border-l-2 border-green-500 bg-green-50 flex items-center gap-4">
            <ShieldCheck className="text-green-600 w-8 h-8" />
            <p className="text-xs text-green-800 font-light">
              {language === 'fr' 
                ? "Vos données sont chiffrées via protocole SSL et traitées selon les normes RGPD en vigueur."
                : "Your data is encrypted via SSL protocol and processed according to current GDPR standards."}
            </p>
          </div>
        </div>

        {/* FORMULAIRE SÉCURISÉ */}
        <div className="bg-gray-50 p-8 lg:p-12 shadow-inner border border-gray-100 relative">
          {submitted ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 font-bold uppercase tracking-widest text-xs">
                {t.contact.form.success}
              </div>
              <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold uppercase tracking-widest text-[10px] hover:underline">
                {language === 'fr' ? 'Envoyer un nouveau message' : 'Send another message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* CHAMP HONEYPOT CACHÉ (SÉCURITÉ ANTI-ROBOT) */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input 
                  type="text" 
                  name="hp_address" 
                  tabIndex="-1" 
                  value={hpValue}
                  onChange={(e) => setHpValue(e.target.value)}
                  autoComplete="off" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{t.contact.form.name}</label>
                  <input type="text" name="user_name" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-all font-light" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{t.contact.form.email}</label>
                  <input type="email" name="user_email" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-all font-light" />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{t.contact.form.subject}</label>
                <input type="text" name="user_subject" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-all font-light" />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{t.contact.form.message}</label>
                <textarea name="user_message" rows="5" required className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-blue-600 transition-all font-light"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full bg-[#0A192F] text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
              >
                {loading ? '...' : <>{t.contact.form.submit} <Send className="w-4 h-4" /></>}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
