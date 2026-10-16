import { experience } from '../../../../models/Experience';
import ExperienceItem from './ExperienceItem';
import Reveal from '../../shared/motion/Reveal';

const ExperienceListItem = () => {
  const items: Experience[] = experience;

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <Reveal key={index} delay={index * 0.08} className="timeline-entry">
          <ExperienceItem {...item} />
        </Reveal>
      ))}
    </div>
  );
};

export default ExperienceListItem;
