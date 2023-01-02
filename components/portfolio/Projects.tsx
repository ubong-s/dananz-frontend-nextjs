import { Project, SectionHeading } from '../_common/';
import { ProjectProps } from '../../types/global';
import { ProjectsList, ProjectsRoot } from '../../styles/components/portfolio';

export const Projects: React.FC<{ projects: ProjectProps[] }> = ({
  projects,
}) => {
  return (
    <ProjectsRoot>
      <SectionHeading heading='Projects' />

      <ProjectsList>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </ProjectsList>
    </ProjectsRoot>
  );
};
