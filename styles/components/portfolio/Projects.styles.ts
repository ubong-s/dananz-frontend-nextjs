import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const ProjectsRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5rem 0;
  }
`;

export const ProjectsList = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
`;
