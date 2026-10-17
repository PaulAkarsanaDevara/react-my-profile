import { IconType } from 'react-icons';
import { FiFileText, FiFolder, FiHome, FiMail, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuListItem, menuLabelKeys } from '../../../../models/MenuList';
import { useI18n } from '../../../../i18n/useI18n';

const icons: Record<string, IconType> = {
  '/': FiHome,
  '/me': FiUser,
  '/resume': FiFileText,
  '/portfolio': FiFolder,
  '/contact': FiMail,
};

/** Floating bottom tab bar, shown only below the `lg` breakpoint (CSS). */
const MobileTabBar = () => {
  const { t } = useI18n();

  return (
  <nav className="mobile-tabbar" aria-label={t('nav.aria')}>
    {menuListItem.map((menuItem) => {
      const Icon = icons[menuItem.links];
      return (
        <NavLink
          key={menuItem.links}
          to={menuItem.links}
          end={menuItem.links === '/'}
          className="mobile-tabbar__item"
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId="tabbar-pill"
                  className="mobile-tabbar__pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="mobile-tabbar__content">
                {Icon && <Icon size={20} />}
                <span className="mobile-tabbar__label">{t(menuLabelKeys[menuItem.links as keyof typeof menuLabelKeys])}</span>
              </span>
            </>
          )}
        </NavLink>
      );
    })}
  </nav>
  );
};

export default MobileTabBar;
