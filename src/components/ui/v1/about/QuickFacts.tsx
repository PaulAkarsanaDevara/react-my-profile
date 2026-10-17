import {
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaLaptopCode,
} from 'react-icons/fa';
import Reveal from '../../shared/motion/Reveal';
import { activeCertificates as certificates } from '../../../../models/Certificate';
import { useContent } from '../../../../i18n/useContent';
import { useI18n } from '../../../../i18n/useI18n';

const QuickFacts = () => {
  const { education, experience } = useContent();
  const { t } = useI18n();
  const degree = education[0];

  const facts = [
    {
      icon: <FaGraduationCap size={18} />,
      label: t('facts.education'),
      value: t('facts.degree', { study: degree.studyName }),
      detail: t('facts.gpaYear', { gpa: degree.ipk, year: degree.endDate }),
    },
    {
      icon: <FaLaptopCode size={18} />,
      label: t('facts.focus'),
      value: 'Full Stack Developer',
      detail: t('facts.focusDetail'),
    },
    {
      icon: <FaBriefcase size={17} />,
      label: t('facts.experience'),
      value: t('facts.roles', { n: experience.length }),
      detail: t('facts.experienceDetail'),
    },
    {
      icon: <FaCertificate size={17} />,
      label: t('facts.certificates'),
      value: t('facts.earned', { n: certificates.length }),
      detail: t('facts.certificatesDetail'),
    },
  ];

  return (
    <div className="quick-facts">
      {facts.map((fact, index) => (
        <Reveal key={index} delay={index * 0.07}>
          <div className="quick-facts__item">
            <span className="quick-facts__icon">{fact.icon}</span>
            <div>
              <div className="quick-facts__label">{fact.label}</div>
              <div className="quick-facts__value">{fact.value}</div>
              <div className="quick-facts__detail">{fact.detail}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default QuickFacts;
