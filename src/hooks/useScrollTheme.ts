import { useEffect } from 'react';

export function useScrollTheme() {
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress * 100}%`);
      document.body.classList.toggle('scrolled', window.scrollY > 48);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
}
