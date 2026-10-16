import * as React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { useI18n } from '../../../../i18n/useI18n';

type EducationItemProps = Education;

const EducationItem: React.FC<EducationItemProps> = ({
  campus,
  studyName,
  startDate,
  endDate,
  ipk,
  description,
}) => {
  const { t } = useI18n();

  return (
  <div className="timeline-card">
    <span className="timeline-card__dot" aria-hidden="true">
      <FaGraduationCap size={14} />
    </span>
    <div className="timeline-card__body">
      <div className="timeline-card__chips">
        <span className="timeline-chip">
          {startDate} – {endDate}
        </span>
        {ipk !== '' && (
          <span className="timeline-chip timeline-chip--accent">{t('stat.gpa')} {ipk}</span>
        )}
      </div>
      <h3 className="timeline-card__title">{campus}</h3>
      <div className="timeline-card__subtitle">{studyName}</div>
      <p className="timeline-card__description">{description}</p>
    </div>
  </div>
  );
};

export default EducationItem;
