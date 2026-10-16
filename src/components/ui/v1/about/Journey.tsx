import Reveal from '../../shared/motion/Reveal';
import projects from '../../../../models/Project';
import SectionHead from '../home/SectionHead';
import { useI18n } from '../../../../i18n/useI18n';

const appsIn2026 = projects.filter((project) =>
  project.startDate.endsWith('2026')
).length;

const YEARS = ['2017', '2020', '2022', '2023', '2024', '2026'] as const;

const Journey = () => {
  const { t } = useI18n();

  return (
    <section className="about-section">
      <SectionHead
        title={t('journey.title')}
        to="/resume"
        linkLabel={t('section.seeResume')}
      />
      <div className="journey">
        {YEARS.map((year, index) => (
          <Reveal key={year} delay={index * 0.06} className="journey__entry">
            <div className="journey__item">
              <span className="journey__year">{year}</span>
              <div className="journey__body">
                <div className="journey__title">
                  {t(`journey.${year}.title`, { n: appsIn2026 })}
                </div>
                <div className="journey__place">{t(`journey.${year}.place`)}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Journey;
