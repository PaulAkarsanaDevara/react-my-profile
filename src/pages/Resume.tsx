import { Link } from 'react-router-dom';
import { FaDownload, FaEye } from 'react-icons/fa';
import HTML from '../components/ui/shared/HTML';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import Reveal from '../components/ui/shared/motion/Reveal';
import { useI18n } from '../i18n/useI18n';
import { useContent } from '../i18n/useContent';

const Resume = () => {
  const { t } = useI18n();
  const { education, experience } = useContent();
  const gpa = education.find((edu) => edu.ipk !== '')?.ipk;

  const stats = [
    { value: experience.length, label: t('stat.experiences') },
    { value: education.length, label: t('stat.education') },
    ...(gpa ? [{ value: gpa, label: t('stat.gpa') }] : []),
  ];

  return (
    <>
      <HTML
        title="Resume - Farhan"
        description={t('meta.resume')}
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <div className="resume-container">
        <div className="resume-header">
          <div>
            <MyComponentInstance.Heading title={t('resume.heading')} />
            <p className="resume-header__lead">
              {t('resume.lead')}
            </p>
          </div>
          <div className="resume-header__actions">
            <Link
              to="/uploads/CV FARHAN EN.pdf"
              target="_blank"
              download
              className="resume-btn resume-btn--solid"
            >
              <FaDownload size={13} /> {t('profile.downloadCv')}
            </Link>
            <Link to="/resume-online" className="resume-btn resume-btn--ghost">
              <FaEye size={14} /> {t('resume.viewOnline')}
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
          <h2 className="resume-item__heading">{t('resume.work')}</h2>
          <MyComponentInstance.ExperienceListItem />
        </div>

        <div className="resume-education">
          <h2 className="resume-item__heading">{t('resume.education')}</h2>
          <MyComponentInstance.EducationItemList />
        </div>
      </div>
    </>
  );
};

export default Resume;
