import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { postedAt } from '../../../../utils/formattedDate';
import { useI18n } from '../../../../i18n/useI18n';

type ProjectItemProps = Project;

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  coverImage,
  description,
  insertDate,
  type,
}) => {
  const { t } = useI18n();

  return (
  <div className="portofolio-list__items ">
    {type && <span className="portofolio-list__items-type">{type}</span>}
    <Link to={`/porto/${id}/project`} className="portofolio-list__items-image-wrap">
      <LazyLoadImage
        alt={name}
        src={coverImage || '/images/13429_ILL_DevOpsLoop.webp'}
        effect="blur"
        loading="lazy"
        className="portofolio-list__items-image"
      />
    </Link>

    <div className="portofolio-list__items-date">
      {postedAt({ date: insertDate, t })}
    </div>
    <div className="portofolio-list__items-name">{name}</div>
    <div className="portofolio-list__items-description">{description}</div>
    <Link
      to={`/porto/${id}/project`}
      className="portofolio-list__items-more"
      aria-label={t('portfolio.detailsOf', { name })}
    >
      {t('portfolio.details')} <FaArrowRight size={11} />
    </Link>
  </div>
  );
};

export default ProjectItem;
