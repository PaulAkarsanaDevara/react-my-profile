import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useI18n } from '../../../../i18n/useI18n';

type SectionHeadProps = { title: string; to?: string; linkLabel?: string };

const SectionHead: React.FC<SectionHeadProps> = ({ title, to, linkLabel }) => {
  const { t } = useI18n();

  return (
  <div className="home-section__head">
    <h2 className="resume-item__heading">{title}</h2>
    {to && (
      <Link to={to} className="home-section__link">
        {linkLabel ?? t('section.seeAll')} <FaArrowRight size={11} />
      </Link>
    )}
  </div>
  );
};

export default SectionHead;
