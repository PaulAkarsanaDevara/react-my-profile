import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

type ExperienceItemProps = Experience & {
  /** Short version for Home: intro + top bullets, no details, link to Resume. */
  compact?: boolean;
  /** Whether grouped bullets start expanded (Resume page). */
  defaultOpen?: boolean;
};

type BulletItem = { text: string; children: string[] };

const TOP_PREFIX = '- ';
const CHILD_PREFIX = '  - ';
const COMPACT_BULLETS = 4;

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
  compact = false,
  defaultOpen = true,
}) => {
  const { paragraph, bullets } = splitDescription(description);
  const groupIndexes = bullets
    .map((item, index) => (item.children.length > 0 ? index : -1))
    .filter((index) => index >= 0);

  const [open, setOpen] = useState<Set<number>>(
    () => new Set(defaultOpen ? groupIndexes : [])
  );

  const toggle = (index: number) =>
    setOpen((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  const allOpen = groupIndexes.every((index) => open.has(index));
  const toggleAll = () => setOpen(new Set(allOpen ? [] : groupIndexes));

  const visibleBullets = compact ? bullets.slice(0, COMPACT_BULLETS) : bullets;
  const hasMore =
    bullets.length > COMPACT_BULLETS ||
    visibleBullets.some((item) => item.children.length > 0);

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

        {!compact && groupIndexes.length > 1 && (
          <div className="timeline-card__tools">
            <button
              type="button"
              className="timeline-card__tool-btn"
              onClick={toggleAll}
            >
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
        )}

        {visibleBullets.length > 0 && (
          <ul className="timeline-card__list">
            {visibleBullets.map((item, index) => {
              const isGroup = item.children.length > 0;
              const isOpen = open.has(index);

              if (!isGroup) return <li key={index}>{item.text}</li>;

              if (compact) {
                return (
                  <li key={index} className="has-children">
                    <span className="timeline-card__list-head">{item.text}</span>
                  </li>
                );
              }

              return (
                <li key={index} className="has-children">
                  <button
                    type="button"
                    className="timeline-card__list-toggle"
                    aria-expanded={isOpen}
                    onClick={() => toggle(index)}
                  >
                    <span className="timeline-card__list-head">{item.text}</span>
                    <span className="timeline-card__list-count">
                      {item.children.length}
                    </span>
                    <FiChevronDown
                      size={16}
                      className={`timeline-card__chevron${isOpen ? ' is-open' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        key="details"
                        className="timeline-card__sublist"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>{child}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        )}

        {compact && hasMore && (
          <Link to="/resume" className="timeline-card__more">
            Lihat selengkapnya <FaArrowRight size={11} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
