import styled from 'styled-components';
import { mediaQueries } from '../../styles';
import { SectionHeading } from '../_common';
import { projects } from '../../lib/portfolio/index';
import { Project } from '../_common/Project';
import strapiService from '../../lib/api/strapiService';
import { ProjectProps } from '../../types/portfolio';

const ProjectsRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5rem 0;
  }
`;

const ProjectsList = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
`;

interface ProjectsProps {
  projects: ProjectProps[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
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
