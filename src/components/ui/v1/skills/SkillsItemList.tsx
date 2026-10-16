import React from 'react';
import SkillsItem from './SkillsItem';
import Reveal from '../../shared/motion/Reveal';

type IProps = { skills: Skills[] };

const SkillsItemList: React.FC<IProps> = ({ skills }) => (
  <>
    <div className="skills-items-list pt-3">
      {skills.map((skill, index) => (
        <Reveal key={+index} delay={(index % 3) * 0.08} className="skills-items-reveal">
          <SkillsItem {...skill} />
        </Reveal>
      ))}
    </div>
  </>
);

export default SkillsItemList;
