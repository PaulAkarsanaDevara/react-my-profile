import { experience } from '../../../../models/Experience';
import ExperienceItem from '../experience/ExperienceItem';
import Reveal from '../../shared/motion/Reveal';
import SectionHead from './SectionHead';

const recent = experience.slice(0, 2);

const RecentExperience = () => (
  <section className="home-section">
    <SectionHead
      title="Recent Experience"
      to="/resume"
      linkLabel="Lihat resume"
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

export default RecentExperience;
