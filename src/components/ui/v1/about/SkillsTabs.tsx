import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import skills from '../../../../models/Skill';
import SkillsItemList from '../skills/SkillsItemList';
import SectionHead from '../home/SectionHead';

const categories = [
  { key: 'Programming Languages', label: 'Languages' },
  { key: 'Framework', label: 'Framework' },
  { key: 'Tools', label: 'Tools' },
].map((category) => ({
  ...category,
  items: skills.filter((skill) => skill.category === category.key),
}));

const SkillsTabs = () => {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((category) => category.key === active)!;

  return (
    <section className="about-section">
      <SectionHead title="Skills" />

      <div className="project-filter" role="tablist" aria-label="Kategori skill">
        {categories.map((category) => {
          const isActive = category.key === active;
          return (
            <button
              key={category.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`project-filter__chip${isActive ? ' is-active' : ''}`}
              onClick={() => setActive(category.key)}
            >
              {isActive && (
                <motion.span
                  layoutId="skills-tab-pill"
                  className="project-filter__pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="project-filter__label">
                {category.label}
                <span className="project-filter__count">
                  {category.items.length}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="skills-legend" aria-hidden="true">
        <span>
          <i className="skills-level__dot is-on" /> Beginner
        </span>
        <span>
          <i className="skills-level__dot is-on" />
          <i className="skills-level__dot is-on" /> Intermediate
        </span>
        <span>
          <i className="skills-level__dot is-on" />
          <i className="skills-level__dot is-on" />
          <i className="skills-level__dot is-on" /> Professional
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <SkillsItemList skills={current.items} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SkillsTabs;
