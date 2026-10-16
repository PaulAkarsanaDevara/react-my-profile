import { Link, useParams } from 'react-router-dom';
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import projects from '../models/Project';
import { postedAt } from '../utils/formattedDate';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import Reveal from '../components/ui/shared/motion/Reveal';
import HTML from '../components/ui/shared/HTML';
import techIcons from '../components/ui/v1/skills/techIcons';

const FALLBACK_IMAGE = '/images/13429_ILL_DevOpsLoop.webp';

const isRepo = (url: string) => /^https?:\/\/(www\.)?github\.com\//i.test(url);

const DetailProject = () => {
  const { id } = useParams();

  const index = projects.findIndex((project) => project.id === id);
  const detailProject: Project | undefined = projects[index];

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

  const previous = projects[index - 1];
  const next = projects[index + 1];
  // `links` is a live demo unless it points at GitHub; `repo` adds the source link
  const linkIsRepo = Boolean(detailProject.links) && isRepo(detailProject.links);
  const demoUrl = linkIsRepo ? undefined : detailProject.links || undefined;
  const repoUrl = linkIsRepo
    ? detailProject.links
    : detailProject.repoPublic
      ? detailProject.repo
      : undefined;

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
              'Belum ada deskripsi untuk proyek ini.'}
          </div>

          {detailProject.tech && detailProject.tech.length > 0 && (
            <div className="detail-project__tech">
              <div className="detail-project__tech-label">Tech stack</div>
              <ul className="service-card__tech">
                {detailProject.tech.map((name) => {
                  const icon = techIcons[name];
                  return (
                    <li key={name}>
                      {icon && <icon.Icon size={14} color={icon.color} />} {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {!demoUrl && !repoUrl && (
            <p className="detail-project__private">
              Sistem internal: kode dan demo tidak dipublikasikan.
            </p>
          )}

          {(demoUrl || repoUrl) && (
            <div className="detail-project__actions">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-btn resume-btn--solid"
                >
                  Buka Demo <FaExternalLinkAlt size={12} />
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`resume-btn ${demoUrl ? 'resume-btn--ghost' : 'resume-btn--solid'}`}
                >
                  <FaGithub size={15} /> Lihat Kode
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>

      <nav className="detail-pager" aria-label="Navigasi proyek">
        {previous ? (
          <Link
            to={`/porto/${previous.id}/project`}
            className="detail-pager__link"
          >
            <span className="detail-pager__dir">
              <FaArrowLeft size={11} /> Sebelumnya
            </span>
            <span className="detail-pager__name">{previous.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/porto/${next.id}/project`}
            className="detail-pager__link detail-pager__link--next"
          >
            <span className="detail-pager__dir">
              Berikutnya <FaArrowRight size={11} />
            </span>
            <span className="detail-pager__name">{next.name}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      {related.length > 0 && (
        <div className="detail-related">
          <h2 className="resume-item__heading">
            Proyek {detailProject.type} Lainnya
          </h2>
          <div className="portofolio-list">
            {related.map((project, relatedIndex) => (
              <Reveal
                key={project.id}
                delay={relatedIndex * 0.08}
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
