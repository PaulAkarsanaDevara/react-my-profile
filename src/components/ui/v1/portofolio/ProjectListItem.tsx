import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MyComponentInstance } from '../../shared/MyComponent';
import { useI18n } from '../../../../i18n/useI18n';
import LogoSearchEmpty from '/icons/hand-drawn-no-data-illustration.webp';

type ProjectListItemProps = { items: Project[] };

const ProjectListItem: React.FC<ProjectListItemProps> = ({ items }) => {
  const { t } = useI18n();

  return (
  <>
    {items?.length ? (
      <motion.div className="portofolio-list" layout>
        <AnimatePresence mode="popLayout">
          {items?.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              className="portofolio-list__cell"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: Math.min(index, 8) * 0.05, duration: 0.45 },
              }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            >
              <MyComponentInstance.ProjectItem {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    ) : (
      <MyComponentInstance.ProjectSearchEmpty
        text={t('portfolio.empty')}
        image={LogoSearchEmpty}
      />
    )}
  </>
  );
};

export default ProjectListItem;
