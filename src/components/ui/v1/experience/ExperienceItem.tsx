import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

type ExperienceItemProps = Experience;

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  job,
  location,
  startDate,
  endDate,
  description,
}) => (
  <div className="timeline-card">
    <span className="timeline-card__dot" aria-hidden="true">
      <FaBriefcase size={13} />
    </span>
    <div className="timeline-card__body">
      <div className="timeline-card__chips">
        <span className="timeline-chip">
          {startDate} – {endDate}
        </span>
        {location && (
          <span className="timeline-chip">
            <FaMapMarkerAlt size={10} /> {location}
          </span>
        )}
      </div>
      <h3 className="timeline-card__title">{job}</h3>
      <div className="timeline-card__subtitle">{company}</div>
      <p className="timeline-card__description">{description}</p>
    </div>
  </div>
);

export default ExperienceItem;
