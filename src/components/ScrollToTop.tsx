import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If navigating to a hash anchor, let the browser handle native anchor scrolling
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return null;
}


