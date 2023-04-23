import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
        window.scrollTo(0, 0);
    }
    return () => {
        mounted = false;
    }
  }, [pathname]);

  return null;
}