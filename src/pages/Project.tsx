import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import ProjectFilter from '../components/ui/v1/portofolio/ProjectFilter';
import HTML from '../components/ui/shared/HTML';
import projects from '../models/Project';

const ALL = 'All';

const types = [
  { name: ALL, count: projects.length },
  ...Array.from(new Set(projects.map((project) => project.type))).map(
    (name) => ({
      name,
      count: projects.filter((project) => project.type === name).length,
    })
  ),
];

const Project: React.FC = () => {
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
    [keyword, type]
  );

  return (
    <>
      <HTML
        title="Portfolio - Farhan"
        description="Selected frontend and DevOps projects by Farhan, built with React, Vue, Flutter, Docker, Jenkins and Kubernetes."
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <div className="portofolio-container ">
        <MyComponentInstance.Heading title="Project" />
        <p className="project-lead">
          Kumpulan proyek yang pernah saya kerjakan, dari frontend sampai
          DevOps.
        </p>
        <hr className="text-secondary" />

        <MyComponentInstance.ProjectSearchInput
          placeholder="Cari proyek atau teknologi..."
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
            {items.length} proyek
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
