import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const AchievementRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5rem 0;
  }
`;

export const AchievementBottom = styled.div`
  display: grid;
  gap: 1rem;

  img {
    height: 300px;
    object-fit: cover;
    width: 100%;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 3.5fr 1fr;
    gap: 3rem;

    img {
      height: 100%;
    }
  }
`;
