import React from 'react';
import styled from 'styled-components';
import { typography } from '../../styles';
import { mediaQueries } from '../../styles';
import { SectionHeadingProps } from '../../types/global';

const SectionHeadingRoot = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const SectionHeadingTop = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  width: 100%;

  h2 {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: ${typography.weight.medium};
    line-height: 1.5rem;
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  .line {
    height: 0.125rem;
    background-color: ${(props) => props.theme.colors.grayScale.black};
    width: 100%;
  }

  ${mediaQueries.desktop} {
    max-width: 600px;
  }
`;

const SectionHeadingBottom = styled.div`
  ${mediaQueries.desktop} {
    &.half {
      h3 {
        max-width: 740px;
      }

      p {
        max-width: 470px;
      }
    }

    &.grid {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 2rem;

      h3 {
        max-width: 337px;
      }

      p {
        max-width: 475px;
      }
    }
  }
`;

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subheading,
  description,
  type,
}) => {
  return (
    <SectionHeadingRoot>
      <SectionHeadingTop>
        <h2>{heading}</h2>
        <span className='line'></span>
      </SectionHeadingTop>
      {subheading && (
        <SectionHeadingBottom className={type}>
          <h3>{subheading}</h3>
          {subheading && <p>{description}</p>}
        </SectionHeadingBottom>
      )}
    </SectionHeadingRoot>
  );
};
