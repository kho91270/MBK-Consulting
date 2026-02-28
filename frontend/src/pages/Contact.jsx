import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulation d'envoi simple
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.target.reset();
      alert(t.contact.form.success); // Alerte classique pour éviter l'erreur de module
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h1>
          <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Infos de Contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Notre Bureau</h3>
                  <p className="text-gray-600 mt-1">123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t.contact.form.phone}</h3>
                  <p className="text-gray-600 mt-1">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t.contact.form.email}</h3>
                  <p className="text-gray-600 mt-1">contact@mbkprocurement.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.company}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.subject}</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
                <textarea rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                <span>{t.contact.form.submit}</span>
              </button>
              
              {sent && <p className="text-green-600 text-center font-medium">{t.contact.form.success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
