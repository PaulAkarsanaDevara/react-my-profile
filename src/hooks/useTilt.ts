import * as React from 'react';
import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';

/**
 * Tilts an element toward the cursor. Disabled on touch screens and when the
 * user prefers reduced motion. Spread the result onto a `motion.*` element.
 */
export const useTilt = (max = 10) => {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 200, damping: 18 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), spring);

  const enabled =
    !reduceMotion &&
    typeof window !== 'undefined' &&
    window.matchMedia(FINE_POINTER).matches;

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    style: enabled ? { rotateX, rotateY, transformPerspective: 800 } : undefined,
    onPointerMove,
    onPointerLeave,
  };
};
