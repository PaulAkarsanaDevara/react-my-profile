import ProjectItem from '../portofolio/ProjectItem';
import Reveal from '../../shared/motion/Reveal';
import SectionHead from './SectionHead';
import { useContent } from '../../../../i18n/useContent';
import { useI18n } from '../../../../i18n/useI18n';

const featuredIds = [
  'alaraya-cuaca-dan-gempa-indonesia',
  'layarvia-penjelajah-film',
  'notea-aplikasi-catatan',
];

const FeaturedProjects = () => {
  const { projects } = useContent();
  const { t } = useI18n();
  const featured = featuredIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

  return (
  <section className="home-section">
    <SectionHead title={t('section.featured')} to="/portfolio" />
    <div className="portofolio-list">
      {featured.map((project, index) => (
        <Reveal
          key={project.id}
          delay={index * 0.1}
          className="portofolio-list__cell"
        >
          <ProjectItem {...project} />
        </Reveal>
      ))}
    </div>
  </section>
  );
};

export default FeaturedProjects;
