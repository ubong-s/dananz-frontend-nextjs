import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const ServicesListRoot = styled.section`
  padding: 3.125rem 0 1.6rem;

  ${mediaQueries.desktop} {
    padding: 5.6rem 0 3.5rem;
  }
`;

export const ServicesListing = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
`;

export const ServicesListItem = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;

  img {
    height: 200px;
    object-fit: cover;
  }

  h4 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  ${mediaQueries.tablet} {
    img {
      width: 100%;
      height: 300px;
    }
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 2fr 1fr;
    gap: 7.5rem;

    img {
      height: 100%;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;
