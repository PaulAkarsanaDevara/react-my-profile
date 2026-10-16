import * as React from 'react';
import { motion } from 'framer-motion';

type ProjectFilterProps = {
  types: { name: string; count: number }[];
  active: string;
  onChange: (type: string) => void;
};

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  types,
  active,
  onChange,
}) => (
  <div className="project-filter" role="tablist" aria-label="Filter proyek">
    {types.map((type) => {
      const isActive = type.name === active;
      return (
        <button
          key={type.name}
          type="button"
          role="tab"
          aria-selected={isActive}
          className={`project-filter__chip${isActive ? ' is-active' : ''}`}
          onClick={() => onChange(type.name)}
        >
          {isActive && (
            <motion.span
              layoutId="project-filter-pill"
              className="project-filter__pill"
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
          <span className="project-filter__label">
            {type.name}
            <span className="project-filter__count">{type.count}</span>
          </span>
        </button>
      );
    })}
  </div>
);

export default ProjectFilter;
