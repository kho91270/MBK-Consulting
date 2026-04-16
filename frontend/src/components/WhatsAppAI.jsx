import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppAI = () => {
  const [isVisible, setIsVisible] = useState(false);

  // On n'affiche le bouton qu'après 3 secondes pour ne pas être intrusif
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    // Remplacez par votre numéro configuré avec l'IA ou votre lien de concierge
    const phoneNumber = "+352691254492"; 
    const message = encodeURIComponent("Bonjour MBK. J'aimerais en savoir plus sur vos services d'audit.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[150] animate-fadeIn">
      {/* Tooltip élégant */}
      <div className="absolute bottom-full right-0 mb-4 w-48 bg-white p-4 shadow-2xl border border-gray-100 rounded-xl hidden md:block">
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#0A192F] mb-1">Conciergerie IA</p>
        <p className="text-xs text-gray-500 italic">Une question sur vos achats ? Posez-la ici.</p>
      </div>

      {/* Bouton Principal */}
      <button
        onClick={openWhatsApp}
        className="bg-[#0A192F] hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppAI;
