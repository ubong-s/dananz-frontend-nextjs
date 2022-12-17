import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { SectionHeading } from '../_common';
import { projects } from '../../lib/portfolio/index';
import { ImageTextLayout } from '../_common/ImageTextLayout';

const ProjectsRoot = styled.section`
  padding: 50px 0;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 80px 0;
  }
`;

const ProjectsList = styled.div`
  display: grid;
  gap: 2rem;
`;

export const Projects = () => {
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
