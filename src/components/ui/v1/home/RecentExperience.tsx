import ExperienceItem from '../experience/ExperienceItem';
import Reveal from '../../shared/motion/Reveal';
import SectionHead from './SectionHead';
import { useContent } from '../../../../i18n/useContent';
import { useI18n } from '../../../../i18n/useI18n';

const RecentExperience = () => {
  const { experience } = useContent();
  const { t } = useI18n();
  const recent = experience.slice(0, 2);

  return (
  <section className="home-section">
    <SectionHead
      title={t('section.recentExperience')}
      to="/resume"
      linkLabel={t('section.seeResume')}
    />
    <div className="timeline">
      {recent.map((item, index) => (
        <Reveal key={index} delay={index * 0.1} className="timeline-entry">
          <ExperienceItem {...item} compact />
        </Reveal>
      ))}
    </div>
  </section>
  );
};

export default RecentExperience;
