import projects from '../../../../models/Project';
import ProjectItem from '../portofolio/ProjectItem';
import Reveal from '../../shared/motion/Reveal';
import SectionHead from './SectionHead';

const featuredIds = [
  'proyek-membangun-aplikasi-react-dengan-redux',
  'proyek-implementasi-redux-pada-aplikasi-sosial-media-open-sp',
  'proyek-membangun-aplikasi-movie-catalogue-app',
];

const featured = featuredIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

const FeaturedProjects = () => (
  <section className="home-section">
    <SectionHead title="Featured Projects" to="/portfolio" />
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

export default FeaturedProjects;
