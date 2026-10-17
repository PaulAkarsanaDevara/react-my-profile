import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import techIcons from './techIcons';
import { useI18n } from '../../../../i18n/useI18n';
import type { Key } from '../../../../i18n/locales/en';

type IProps = Skills;

const LEVELS: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Professional: 3,
};

const SkillsItem: React.FC<IProps> = ({ title, description, image }) => {
  const { t } = useI18n();
  const icon = techIcons[title];
  const level = LEVELS[description] ?? 0;
  const levelLabel = level > 0 ? t(`level.${description}` as Key) : description;

  return (
    <div className="skills-items">
      <div className="skills-items__info">
        <div className="skills-items__info-name">{title}</div>
        <div className="skills-items__info-status">{levelLabel}</div>
        {level > 0 && (
          <div
            className="skills-level"
            role="img"
            aria-label={t('skills.level', { level: levelLabel })}
          >
            {[1, 2, 3].map((dot) => (
              <i
                key={dot}
                className={`skills-level__dot${dot <= level ? ' is-on' : ''}`}
              />
            ))}
          </div>
        )}
      </div>
      {icon ? (
        <icon.Icon
          className="skills-items__icon"
          size={44}
          color={icon.color}
          aria-label={title}
        />
      ) : image ? (
        <LazyLoadImage
          src={image}
          alt={title}
          loading="lazy"
          effect="blur"
          className="skills-items__image"
        />
      ) : (
        <span className="skills-items__initial" aria-hidden="true">
          {title.charAt(0)}
        </span>
      )}
    </div>
  );
};

export default SkillsItem;
