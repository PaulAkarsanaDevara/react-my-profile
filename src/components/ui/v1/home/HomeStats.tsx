import Reveal from '../../shared/motion/Reveal';
import projects from '../../../../models/Project';
import { activeCertificates as certificates } from '../../../../models/Certificate';
import education from '../../../../models/Education';
import { experience } from '../../../../models/Experience';
import { useI18n } from '../../../../i18n/useI18n';
import type { Key } from '../../../../i18n/locales/en';

const gpa = education.find((edu) => edu.ipk !== '')?.ipk;

const stats: { value: number | string; label: Key }[] = [
  { value: projects.length, label: 'stat.projects' },
  { value: experience.length, label: 'stat.experiences' },
  { value: certificates.length, label: 'stat.certificates' },
  ...(gpa ? [{ value: gpa, label: 'stat.gpa' as Key }] : []),
];

const HomeStats = () => {
  const { t } = useI18n();

  return (
  <Reveal>
    <div className="resume-stats home-stats">
      {stats.map((stat) => (
        <div className="resume-stats__item" key={stat.label}>
          <div className="resume-stats__value">{stat.value}</div>
          <div className="resume-stats__label">{t(stat.label)}</div>
        </div>
      ))}
    </div>
  </Reveal>
  );
};

export default HomeStats;
