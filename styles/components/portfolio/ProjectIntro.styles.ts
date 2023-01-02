import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const ProjectIntroRoot = styled.section`
  padding: 3.125rem 0;
  display: grid;
  gap: 1rem;

  h2,
  h3 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .project_overview {
      display: grid;

      .date {
        margin-bottom: 0;
      }
    }

    h2,
    h3 {
      font-size: 1.5rem;
    }
  }
`;
