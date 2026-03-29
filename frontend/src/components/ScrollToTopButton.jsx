import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#0A192F] text-white flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg"
      aria-label="Retour en haut"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
