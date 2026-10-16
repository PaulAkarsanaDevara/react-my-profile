import Reveal from '../../shared/motion/Reveal';
import projects from '../../../../models/Project';
import certificates from '../../../../models/Certificate';
import education from '../../../../models/Education';
import { experience } from '../../../../models/Experience';

const gpa = education.find((edu) => edu.ipk !== '')?.ipk;

const stats = [
  { value: projects.length, label: 'Projects' },
  { value: experience.length, label: 'Experiences' },
  { value: certificates.length, label: 'Certificates' },
  ...(gpa ? [{ value: gpa, label: 'GPA' }] : []),
];

const HomeStats = () => (
  <Reveal>
    <div className="resume-stats home-stats">
      {stats.map((stat) => (
        <div className="resume-stats__item" key={stat.label}>
          <div className="resume-stats__value">{stat.value}</div>
          <div className="resume-stats__label">{stat.label}</div>
        </div>
      ))}
    </div>
  </Reveal>
);

export default HomeStats;
