import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import skills from '../../../../models/Skill';
import SkillsItemList from '../skills/SkillsItemList';
import SectionHead from '../home/SectionHead';
import { useI18n } from '../../../../i18n/useI18n';
import type { Key } from '../../../../i18n/locales/en';

const categories = [
  { key: 'Programming Languages', label: 'skills.languages' as Key },
  { key: 'Framework', label: 'skills.framework' as Key },
  { key: 'Tools', label: 'skills.tools' as Key },
].map((category) => ({
  ...category,
  items: skills.filter((skill) => skill.category === category.key),
}));

const SkillsTabs = () => {
  const { t } = useI18n();
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((category) => category.key === active)!;

  return (
    <section className="about-section">
      <SectionHead title={t('skills.title')} />

      <div className="project-filter" role="tablist" aria-label={t('skills.aria')}>
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
                {t(category.label)}
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
          <i className="skills-level__dot is-on" /> {t('level.Beginner')}
        </span>
        <span>
          <i className="skills-level__dot is-on" />
          <i className="skills-level__dot is-on" /> {t('level.Intermediate')}
        </span>
        <span>
          <i className="skills-level__dot is-on" />
          <i className="skills-level__dot is-on" />
          <i className="skills-level__dot is-on" /> {t('level.Professional')}
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
