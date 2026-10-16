import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

type ExperienceItemProps = Experience;

type BulletItem = { text: string; children: string[] };

const TOP_PREFIX = '- ';
const CHILD_PREFIX = '  - ';

/**
 * Description format:
 * - lines starting with "- " are bullets
 * - lines starting with "  - " (two spaces) are details under the bullet above
 * - every other line is joined into one intro paragraph (older descriptions
 *   wrap mid-sentence on purpose)
 */
const splitDescription = (description: string) => {
  const paragraphLines: string[] = [];
  const bullets: BulletItem[] = [];

  description.split('\n').forEach((line) => {
    if (line.startsWith(CHILD_PREFIX)) {
      const parent = bullets[bullets.length - 1];
      const text = line.slice(CHILD_PREFIX.length).trim();
      if (parent) parent.children.push(text);
      else bullets.push({ text, children: [] });
    } else if (line.startsWith(TOP_PREFIX)) {
      bullets.push({ text: line.slice(TOP_PREFIX.length).trim(), children: [] });
    } else {
      paragraphLines.push(line);
    }
  });

  return { paragraph: paragraphLines.join(' ').trim(), bullets };
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
            {bullets.map((item, index) => (
              <li
                key={index}
                className={item.children.length > 0 ? 'has-children' : undefined}
              >
                {item.children.length > 0 ? (
                  <span className="timeline-card__list-head">{item.text}</span>
                ) : (
                  item.text
                )}
                {item.children.length > 0 && (
                  <ul className="timeline-card__sublist">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>{child}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
