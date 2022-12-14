import React from 'react';
import styled from 'styled-components';
import { typography } from '../../styles';
import { breakpoints } from '../../styles/globalStyles';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subtitleDesc?: string;
  subtitleType?: 'full' | 'half' | 'grid';
}

const SectionHeadingRoot = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${breakpoints.desktop}) {
  }
`;

const SectionHeadingTop = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  width: 100%;

  h2 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: ${typography.weight.medium};
    line-height: 24px;
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  .line {
    height: 2px;
    background-color: ${(props) => props.theme.colors.grayScale.black};
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 600px;
  }
`;

const SectionHeadingBottom = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
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
  title,
  subtitle,
  subtitleDesc,
  subtitleType,
}) => {
  return (
    <SectionHeadingRoot>
      <SectionHeadingTop>
        <h2>{title}</h2>
        <span className='line'></span>
      </SectionHeadingTop>
      {subtitle && (
        <SectionHeadingBottom className={subtitleType}>
          <h3>{subtitle}</h3>
          {subtitle && <p>{subtitleDesc}</p>}
        </SectionHeadingBottom>
      )}
    </SectionHeadingRoot>
  );
};
