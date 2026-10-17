import skills from '../../../../models/Skill';
import techIcons from '../skills/techIcons';
import SectionHead from './SectionHead';
import { useI18n } from '../../../../i18n/useI18n';

const items = skills.filter((skill) => techIcons[skill.title]);

const Track = ({ hidden }: { hidden?: boolean }) => (
  <ul className="marquee__track" aria-hidden={hidden}>
    {items.map((skill) => {
      const { Icon, color } = techIcons[skill.title];
      return (
        <li className="marquee__item" key={skill.title}>
          <Icon size={22} color={color} />
          <span>{skill.title}</span>
        </li>
      );
    })}
  </ul>
);

const TechMarquee = () => {
  const { t } = useI18n();

  return (
  <section className="home-section">
    <SectionHead
      title={t('section.techStack')}
      to="/me"
      linkLabel={t('section.allSkills')}
    />
    <div className="marquee">
      <Track />
      <Track hidden />
    </div>
  </section>
  );
};

export default TechMarquee;
