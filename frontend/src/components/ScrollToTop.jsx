import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Vérifiez bien cet import

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cette commande force le navigateur à remonter tout en haut
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
