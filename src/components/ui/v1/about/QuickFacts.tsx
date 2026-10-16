import {
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaLaptopCode,
} from 'react-icons/fa';
import Reveal from '../../shared/motion/Reveal';
import { activeCertificates as certificates } from '../../../../models/Certificate';
import education from '../../../../models/Education';
import { experience } from '../../../../models/Experience';

const degree = education[0];

const facts = [
  {
    icon: <FaGraduationCap size={18} />,
    label: 'Education',
    value: `S1 ${degree.studyName}`,
    detail: `GPA ${degree.ipk} · ${degree.endDate}`,
  },
  {
    icon: <FaLaptopCode size={18} />,
    label: 'Focus',
    value: 'Full Stack Developer',
    detail: 'Frontend · Backend · DevOps',
  },
  {
    icon: <FaBriefcase size={17} />,
    label: 'Experience',
    value: `${experience.length} roles`,
    detail: 'Internships & work',
  },
  {
    icon: <FaCertificate size={17} />,
    label: 'Certificates',
    value: `${certificates.length} earned`,
    detail: 'Courses & internships',
  },
];

const QuickFacts = () => (
  <div className="quick-facts">
    {facts.map((fact, index) => (
      <Reveal key={fact.label} delay={index * 0.07}>
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

export default QuickFacts;
