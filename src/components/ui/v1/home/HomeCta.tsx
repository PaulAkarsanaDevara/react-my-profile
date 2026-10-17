import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import Reveal from '../../shared/motion/Reveal';
import { useI18n } from '../../../../i18n/useI18n';

const HomeCta = () => {
  const { t } = useI18n();

  return (
  <Reveal>
    <div className="home-cta">
      <h2 className="home-cta__title">{t('cta.title')}</h2>
      <p className="home-cta__text">
        {t('cta.text')}
      </p>
      <Link to="/contact" className="resume-btn resume-btn--solid">
        <FaPaperPlane size={13} /> {t('cta.button')}
      </Link>
    </div>
  </Reveal>
  );
};

export default HomeCta;
