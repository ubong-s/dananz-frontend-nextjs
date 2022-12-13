import React from 'react';
import styled from 'styled-components';
import { typography } from '../../styles';

interface SectionHeadingProps {
  title: string;
}

const SectionHeadingRoot = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 600px;

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
`;

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <SectionHeadingRoot>
      <h2>{title}</h2>

      <span className='line'></span>
    </SectionHeadingRoot>
  );
};