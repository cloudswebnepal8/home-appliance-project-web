import { useEffect } from "react";
import { useLocation } from "react-router"; // or "react-router-dom" depending on your package version

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;