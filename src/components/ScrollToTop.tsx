import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Reset scroll position on route change (SPA navigation otherwise keeps the old offset). */
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};
