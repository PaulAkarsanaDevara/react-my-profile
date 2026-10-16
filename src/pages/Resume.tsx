import { Link } from 'react-router-dom';
import { FaDownload, FaEye } from 'react-icons/fa';
import HTML from '../components/ui/shared/HTML';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import Reveal from '../components/ui/shared/motion/Reveal';
import education from '../models/Education';
import { experience } from '../models/Experience';
import '../styles/resume.css';

const gpa = education.find((edu) => edu.ipk !== '')?.ipk;

const stats = [
  { value: experience.length, label: 'Experiences' },
  { value: education.length, label: 'Education' },
  ...(gpa ? [{ value: gpa, label: 'GPA' }] : []),
];

const Resume = () => {
  return (
    <>
      <HTML
        title="Resume - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <div className="resume-container">
        <div className="resume-header">
          <div>
            <MyComponentInstance.Heading title="Resume" />
            <p className="resume-header__lead">
              Education and work experience — a quick look at where I studied
              and what I have built.
            </p>
          </div>
          <div className="resume-header__actions">
            <Link
              to="/uploads/CV FARHAN EN.pdf"
              target="_blank"
              download
              className="resume-btn resume-btn--solid"
            >
              <FaDownload size={13} /> Download CV
            </Link>
            <Link to="/resume-online" className="resume-btn resume-btn--ghost">
              <FaEye size={14} /> View Online
            </Link>
          </div>
        </div>

        <Reveal>
          <div className="resume-stats">
            {stats.map((stat) => (
              <div className="resume-stats__item" key={stat.label}>
                <div className="resume-stats__value">{stat.value}</div>
                <div className="resume-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="resume-experience">
          <h2 className="resume-item__heading">Work Experience</h2>
          <MyComponentInstance.ExperienceListItem />
        </div>

        <div className="resume-education">
          <h2 className="resume-item__heading">Education</h2>
          <MyComponentInstance.EducationItemList />
        </div>
      </div>
    </>
  );
};

export default Resume;
