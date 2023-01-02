import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const MaterialsRoot = styled.section`
  padding: 3.125rem 0 5rem;

  ${mediaQueries.desktop} {
    padding: 4.7rem 0 7.8rem;
  }
`;

export const MaterialsContent = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;

  ${mediaQueries.desktop} {
    grid-template-columns: 0.8fr 1fr;
    align-items: center;
    gap: 5.125rem;
  }
`;

export const MaterialsContentLeft = styled.div`
  ${mediaQueries.desktop} {
    h3 {
      max-width: 348px;
    }
  }
`;

export const MaterialsContentRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.1fr;
  grid-template-rows: 95px 130px 180px 45px;
  gap: 2rem;
  margin-top: -3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:nth-of-type(1) {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
    }

    &:nth-of-type(2) {
      grid-column: 2 / 4;
      grid-row: 1 / 3;
    }
    &:nth-of-type(3) {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    }
  }
`;
