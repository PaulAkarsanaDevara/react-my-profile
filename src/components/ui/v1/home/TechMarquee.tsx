import skills from '../../../../models/Skill';
import skillIcons from '../skills/skillIcons';
import SectionHead from './SectionHead';

const items = skills.filter((skill) => skillIcons[skill.title]);

const Track = ({ hidden }: { hidden?: boolean }) => (
  <ul className="marquee__track" aria-hidden={hidden}>
    {items.map((skill) => {
      const { Icon, color } = skillIcons[skill.title];
      return (
        <li className="marquee__item" key={skill.title}>
          <Icon size={22} color={color} />
          <span>{skill.title}</span>
        </li>
      );
    })}
  </ul>
);

const TechMarquee = () => (
  <section className="home-section">
    <SectionHead title="Tech Stack" to="/me" linkLabel="Semua skill" />
    <div className="marquee">
      <Track />
      <Track hidden />
    </div>
  </section>
);

export default TechMarquee;
