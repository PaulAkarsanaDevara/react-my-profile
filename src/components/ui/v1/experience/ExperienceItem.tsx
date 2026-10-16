import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

type ExperienceItemProps = Experience;

/**
 * Lines starting with "- " become a bullet list; everything else is joined
 * into one paragraph (older descriptions wrap mid-sentence on purpose).
 */
const splitDescription = (description: string) => {
  const lines = description.split('\n');
  const bullets = lines
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2).trim());
  const paragraph = lines
    .filter((line) => !line.startsWith('- '))
    .join(' ')
    .trim();
  return { paragraph, bullets };
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  job,
  location,
  startDate,
  endDate,
  description,
}) => {
  const { paragraph, bullets } = splitDescription(description);

  return (
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
      <p className="timeline-card__description">{paragraph}</p>
      {bullets.length > 0 && (
        <ul className="timeline-card__list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
  );
};

export default ExperienceItem;
