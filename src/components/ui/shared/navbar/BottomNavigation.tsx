import { FiDownload } from 'react-icons/fi';
import { usePwaInstall } from '../../../../hooks/usePwaInstall';
import { useI18n } from '../../../../i18n/useI18n';

const BottomNavigation = () => {
  const { canInstall, install } = usePwaInstall();
  const { t } = useI18n();

  return (
    <footer className="footer-container">
      <div className="footer-text-copy">
        © {new Date().getFullYear()} Farhan
      </div>
      {canInstall && (
        <button type="button" className="footer-install" onClick={install}>
          <FiDownload size={14} /> {t('footer.install')}
        </button>
      )}
    </footer>
  );
};

export default BottomNavigation;
