import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projects from '../models/Project';
import { postedAt } from '../utils/formattedDate';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import Reveal from '../components/ui/shared/motion/Reveal';
import HTML from '../components/ui/shared/HTML';

const FALLBACK_IMAGE = '/images/13429_ILL_DevOpsLoop.webp';

const DetailProject = () => {
  const { id } = useParams();

  const detailProject: Project | undefined = projects.find(
    (project) => project.id === id
  );

  if (!detailProject) {
    return (
      <section className="detailproject-section detail-empty">
        <h1 className="detail-empty__title">Proyek tidak ditemukan</h1>
        <p className="detail-empty__text">
          Proyek yang kamu cari tidak tersedia atau tautannya sudah kedaluwarsa.
        </p>
        <Link to="/portfolio" className="resume-btn resume-btn--solid">
          <FaArrowLeft size={13} /> Kembali ke Portfolio
        </Link>
      </section>
    );
  }

  const related = projects
    .filter(
      (project) =>
        project.id !== detailProject.id && project.type === detailProject.type
    )
    .slice(0, 3);

  return (
    <section className="detailproject-section pb-5">
      <HTML
        title={`${detailProject.name} - Farhan`}
        description={detailProject.description || detailProject.name}
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <Link to="/portfolio" className="detail-back">
        <FaArrowLeft size={12} /> Kembali ke Portfolio
      </Link>

      <div className="detail-project-container">
        <motion.div
          className="detail-project__media"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="detail-project__image"
            src={detailProject.coverImage || FALLBACK_IMAGE}
            alt={detailProject.name}
          />
        </motion.div>

        <motion.div
          className="detail-project__content"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="detail-project__chips">
            <span className="timeline-chip timeline-chip--accent">
              {detailProject.type}
            </span>
            <span className="timeline-chip">
              {detailProject.startDate === detailProject.endDate
                ? detailProject.startDate
                : `${detailProject.startDate} – ${detailProject.endDate}`}
            </span>
            <span className="timeline-chip">
              {postedAt({ date: detailProject.insertDate })}
            </span>
          </div>

          <h1 className="detail-project__title">{detailProject.name}</h1>

          <div className="detail-project__content-description">
            {detailProject.description ||
              'Deskripsi proyek belum tersedia. Buka proyeknya untuk melihat detail lengkapnya.'}
          </div>

          {detailProject.links && (
            <div className="detail-project__actions">
              <a
                href={detailProject.links}
                target="_blank"
                rel="noreferrer"
                className="resume-btn resume-btn--solid"
              >
                Tampilkan Proyek <FaExternalLinkAlt size={12} />
              </a>
            </div>
          )}
        </motion.div>
      </div>

      {related.length > 0 && (
        <div className="detail-related">
          <h2 className="resume-item__heading">Proyek {detailProject.type} Lainnya</h2>
          <div className="portofolio-list">
            {related.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 0.08}
                className="portofolio-list__cell"
              >
                <MyComponentInstance.ProjectItem {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailProject;
