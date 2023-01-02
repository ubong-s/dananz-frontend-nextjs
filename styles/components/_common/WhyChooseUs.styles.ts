import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';
import misc from '../../misc';

export const WhyChooseUsRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5.6rem 0;
  }
`;

export const WhyChooseUsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const WhyChooseUsGridItem = styled.div`
  text-align: center;
  padding: 1.7rem;
  box-shadow: ${misc.shadowAlt};

  h4 {
    padding: 0.625rem 0;
  }

  ${mediaQueries.desktop} {
    h4 {
      font-size: 1rem;
    }
  }
`;
