import styled from 'styled-components';
import { mediaQueries } from '../../styles';
import { SectionHeading } from '../_common';
import { projects } from '../../lib/portfolio/index';
import { ImageTextLayout } from '../_common/ImageTextLayout';

const ProjectsRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5rem 0;
  }
`;

const ProjectsList = styled.div`
  display: grid;
  gap: 2rem;
`;

export const Projects: React.FC = () => {
  return (
    <ProjectsRoot>
      <SectionHeading title='Projects' />

      <ProjectsList>
        {projects.map((project) => {
          return <ImageTextLayout key={project.id} project={project} />;
        })}
      </ProjectsList>
    </ProjectsRoot>
  );
};
