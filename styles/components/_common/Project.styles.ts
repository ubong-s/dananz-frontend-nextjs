import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';
import misc from '../../misc';

export const ProjectRoot = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;

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
      font-size: 1rem;
    }

    p {
      margin: 0;
    }
  }

  ${mediaQueries.desktop} {
    align-items: center;
    grid-template-areas: 'image content';
    grid-template-columns: 2.5fr 1fr;
    gap: 5.9rem;

    &:nth-of-type(even) {
      grid-template-areas: 'content image';
      grid-template-columns: 1fr 2.5fr;
    }
  }

  ${mediaQueries.large} {
    grid-template-columns: 880px auto;

    .profile {
      bottom: unset;
      top: 1.69rem;
      right: -200px;
    }

    &:nth-of-type(even) {
      .profile {
        bottom: unset;
        left: -200px;
        right: unset;
      }
    }
  }
`;

export const ImageRoot = styled.div`
  position: relative;

  .img {
    height: 300px;
    object-fit: cover;
  }

  ${mediaQueries.desktop} {
    grid-area: image;
    .img {
      height: 525px;
    }
  }
`;

export const TextContent = styled.div`
  h3 {
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 1.875rem;
  }

  ${mediaQueries.desktop} {
    grid-area: content;
    h3 {
      font-size: 1.5rem;
    }
  }

  ${mediaQueries.large} {
    padding-top: 5rem;

    p {
      margin-bottom: 2.5rem;
    }
  }
`;
