import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import skillIcons from './skillIcons';

type IProps = Skills;

const SkillsItem: React.FC<IProps> = ({ title, description, image }) => {
  const icon = skillIcons[title];

  return (
    <div className="skills-items">
      <div className="skills-items__info">
        <div className="skills-items__info-name">{title}</div>
        <div className="skills-items__info-status">{description}</div>
      </div>
      {icon ? (
        <icon.Icon
          className="skills-items__icon"
          size={44}
          color={icon.color}
          aria-label={title}
        />
      ) : (
        <LazyLoadImage
          src={image}
          alt={title}
          loading="lazy"
          effect="blur"
          className="skills-items__image"
        />
      )}
    </div>
  );
};

export default SkillsItem;
