import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      console.warn("ScrollToTop failed", error);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
