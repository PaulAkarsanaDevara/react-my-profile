import { FiDownload } from 'react-icons/fi';
import { usePwaInstall } from '../../../../hooks/usePwaInstall';

const BottomNavigation = () => {
  const { canInstall, install } = usePwaInstall();

  return (
    <footer className="footer-container">
      <div className="footer-text-copy">
        © {new Date().getFullYear()} Farhan · Built with React & Framer Motion
      </div>
      {canInstall && (
        <button type="button" className="footer-install" onClick={install}>
          <FiDownload size={14} /> Install app
        </button>
      )}
    </footer>
  );
};

export default BottomNavigation;
