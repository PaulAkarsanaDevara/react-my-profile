import * as React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useI18n } from '../../../../i18n/useI18n';

type ProjectSearchInputProps = {
  keyword: string;
  keywordChange: (value: string) => void;
  placeholder: string;
};

const ProjectSearchInput: React.FC<ProjectSearchInputProps> = ({
  placeholder,
  keyword,
  keywordChange,
}) => {
  const { t } = useI18n();

  return (
    <div className="portofolio-search-container">
      <div className="project-search">
        <FiSearch className="project-search__icon" size={18} aria-hidden />
        <input
          type="text"
          value={keyword}
          onChange={(e) => keywordChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="project-search__input"
        />
        {keyword && (
          <button
            type="button"
            className="project-search__clear"
            onClick={() => keywordChange('')}
            aria-label={t('portfolio.clearSearch')}
          >
            <FiX size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectSearchInput;
