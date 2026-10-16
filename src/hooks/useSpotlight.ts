import { useEffect } from 'react';

/** Cards that get a soft highlight following the cursor (see theme.css). */
const SPOTLIGHT_SELECTOR = [
  '.portofolio-list__items',
  '.skills-items',
  '.service-card',
  '.quick-facts__item',
  '.timeline-card__body',
  '.contact-channel',
  '.contact-card',
  '.resume-stats__item',
  '.detail-pager__link',
  '.profile-summary',
  '.home-cta',
].join(',');

/**
 * One delegated listener updates --mx/--my on the hovered card. Skipped on
 * touch devices, where there is no cursor to follow.
 */
export const useSpotlight = () => {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(
        SPOTLIGHT_SELECTOR
      );
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
};
