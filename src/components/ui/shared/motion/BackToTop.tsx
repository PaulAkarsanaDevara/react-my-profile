import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useI18n } from '../../../../i18n/useI18n';

const SHOW_AFTER = 600;

/** Floating button that appears after scrolling down and jumps back to top. */
const BackToTop = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();

  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > SHOW_AFTER));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="back-to-top"
          aria-label={t('backToTop')}
          title={t('backToTop')}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
