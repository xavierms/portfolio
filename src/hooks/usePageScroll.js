import { useEffect, useState } from 'react';

export function usePageScroll() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const currentSection = [...document.querySelectorAll('[data-section]')]
        .findLast((section) => section.getBoundingClientRect().top <= window.innerHeight * 0.4);
      if (currentSection) setActiveSection(currentSection.id);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      revealObserver.disconnect();
    };
  }, []);

  return { activeSection };
}
