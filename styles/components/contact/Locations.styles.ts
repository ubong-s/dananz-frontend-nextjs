import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const LocationsRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5rem 0;
  }
`;

export const LocationsBody = styled.div`
  display: grid;
  align-items: flex-start;

  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
`;

export const LocationsInfo = styled.div`
  display: grid;

  h4 {
    font-size: 1.25rem;
  }

  ${mediaQueries.desktop} {
    gap: 2rem;

    h4 {
      font-size: 1.5rem;
      margin-bottom: 0.625rem;
    }
  }
`;

export const LocationsGrid = styled.div`
  display: grid;
  gap: 1rem;

  h4 {
    font-size: 1.25rem;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: -5.5rem;

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1.875rem;
    }
  }
`;
