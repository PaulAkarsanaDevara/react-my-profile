import { AnimatePresence, motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../../../hooks/useTheme';
import { useI18n } from '../../../../i18n/useI18n';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
      title={t('theme.toggle')}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          style={{ display: 'inline-flex' }}
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
