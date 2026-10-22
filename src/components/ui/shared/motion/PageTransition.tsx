import * as React from 'react';
import { Suspense, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import PageErrorBoundary from '../PageErrorBoundary';
import PageLoader from '../PageLoader';

/**
 * Animates route changes. useOutlet is frozen per-location so the exiting
 * page keeps rendering its own content while it fades out.
 */
const PageTransition: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <PageErrorBoundary>
          <Suspense fallback={<PageLoader />}>{outlet}</Suspense>
        </PageErrorBoundary>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
