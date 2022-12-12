import styled, { css } from 'styled-components';
import { misc } from '../../styles';

interface ButtonProps {
  variant: 'nav' | 'button' | 'button-alt';
  children?: React.ReactElement | string;
}

const ButtonRoot = styled.button<ButtonProps>`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  padding: ${(props) => (props.variant === 'nav' ? 'none' : '1rem 2rem')};
  background-color: ${(props) =>
    props.variant === 'nav'
      ? 'transparent'
      : props.theme.colors.main.primary100};
  color: ${(props) =>
    props.variant === 'nav'
      ? props.theme.colors.grayScale.black
      : props.theme.colors.grayScale.white};
  transition: ${misc.transition};

  &:hover {
    opacity: 0.85;
    transition: ${misc.transition};
  }
`;

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <ButtonRoot variant={variant}>{children}</ButtonRoot>;
};
