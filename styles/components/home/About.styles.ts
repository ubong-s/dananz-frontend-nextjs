import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';
import misc from '../../misc';

export const AboutRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 4.68rem 0;
  }
`;

export const AboutBottom = styled.div`
  display: grid;
  gap: 1rem;

  ${mediaQueries.desktop} {
    align-items: center;
    grid-template-columns: 2.5fr 1fr;
    gap: 5.875rem;
  }

  ${mediaQueries.large} {
    grid-template-columns: 880px auto;
  }
`;

export const AboutImage = styled.div`
  position: relative;

  .img {
    height: 300px;
    object-fit: cover;
  }

  .profile {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    box-shadow: ${misc.shadow};
    right: 1rem;
    bottom: 1.1rem;
    background-color: ${(props) => props.theme.colors.grayScale.white};
    min-width: 270px;

    h4 {
      margin-bottom: 0.25rem;
      line-height: 1;
      font-size: 16px;
    }

    p {
      margin: 0;
    }
  }

  ${mediaQueries.desktop} {
    .img {
      height: 100%;
    }
  }

  ${mediaQueries.large} {
    .profile {
      bottom: unset;
      top: 1.7rem;
      right: -200px;
    }
  }
`;

export const AboutContent = styled.div`
  p {
    margin-bottom: 1.875rem;
  }

  ${mediaQueries.large} {
    padding-top: 5rem;

    p {
      margin-bottom: 2.5rem;
    }
  }
`;
