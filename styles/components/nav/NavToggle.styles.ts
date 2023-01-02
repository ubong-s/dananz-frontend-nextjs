import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const NavToggleRoot = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  font-size: 2rem;

  svg {
    stroke: ${(props) => props.theme.colors.grayScale.black};
    height: 1.25em !important;
    width: 1.25em !important;
  }

  ${mediaQueries.desktop} {
    display: none;
  }
`;
