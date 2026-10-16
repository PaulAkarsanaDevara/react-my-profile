import education from '../../../../models/Education';
import EducationItem from './EducationItem';
import Reveal from '../../shared/motion/Reveal';

const EducationListItem = () => (
  <div className="timeline">
    {education.map((edu, index) => (
      <Reveal key={index} delay={index * 0.08} className="timeline-entry">
        <EducationItem {...edu} />
      </Reveal>
    ))}
  </div>
);

export default EducationListItem;
