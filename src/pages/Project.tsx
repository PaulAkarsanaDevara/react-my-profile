import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import ProjectFilter from '../components/ui/v1/portofolio/ProjectFilter';
import HTML from '../components/ui/shared/HTML';
import { useI18n } from '../i18n/useI18n';
import { useContent } from '../i18n/useContent';

const ALL = 'All';

const Project: React.FC = () => {
  const { t } = useI18n();
  const { projects } = useContent();
  const types = useMemo(
    () => [
      { name: ALL, count: projects.length },
      ...Array.from(new Set(projects.map((project) => project.type))).map(
        (name) => ({
          name,
          count: projects.filter((project) => project.type === name).length,
        })
      ),
    ],
    [projects]
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search') || '';
  const requestedType = searchParams.get('type') || ALL;
  const type = types.some((t) => t.name === requestedType)
    ? requestedType
    : ALL;

  const updateParams = (next: { search?: string; type?: string }) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value && value !== ALL) params.set(key, value);
      else params.delete(key);
    });
    setSearchParams(params, { replace: true });
  };

  const items: Project[] = useMemo(
    () =>
      projects.filter(
        (project) =>
          (type === ALL || project.type === type) &&
          [project.name, ...(project.tech ?? [])].some((text) =>
            text.toLowerCase().includes(keyword.toLowerCase())
          )
      ),
    [keyword, type, projects]
  );

  return (
    <>
      <HTML
        title="Portfolio - Farhan"
        description={t('meta.portfolio')}
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <div className="portofolio-container ">
        <MyComponentInstance.Heading title={t('portfolio.heading')} />
        <p className="project-lead">
          {t('portfolio.lead')}
        </p>
        <hr className="text-secondary" />

        <MyComponentInstance.ProjectSearchInput
          placeholder={t('portfolio.search')}
          keyword={keyword}
          keywordChange={(value) => updateParams({ search: value })}
        />

        <div className="project-toolbar">
          <ProjectFilter
            types={types}
            active={type}
            onChange={(next) => updateParams({ type: next })}
          />
          <div className="project-toolbar__count" aria-live="polite">
            {t('portfolio.count', { n: items.length })}
          </div>
        </div>

        <Suspense fallback={null}>
          <MyComponentInstance.ProjectListItem items={items} />
        </Suspense>
      </div>
    </>
  );
};

export default Project;
