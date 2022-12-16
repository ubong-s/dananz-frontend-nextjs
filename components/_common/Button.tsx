import styled, { css } from 'styled-components';
import { misc } from '../../styles';

interface ButtonProps {
  variant: 'nav' | 'button' | 'button-alt';
  children?: React.ReactElement | string;
}

export const ButtonRoot = styled.button<ButtonProps>`
  border: ${(props) =>
    props.variant === 'button-alt'
      ? `1px solid ${props.theme.colors.grayScale.black}`
      : 'none'};
  padding: ${(props) => (props.variant === 'nav' ? '0' : '1rem 2rem')};
  background-color: ${(props) =>
    props.variant === 'nav'
      ? 'transparent'
      : props.variant === 'button-alt'
      ? props.theme.colors.grayScale.white
      : props.theme.colors.main.primary100};
  color: ${(props) =>
    props.variant === 'button'
      ? props.theme.colors.grayScale.white
      : props.theme.colors.grayScale.black};
  transition: ${misc.transition};

  &:hover {
    opacity: 0.85;
    transition: ${misc.transition.ease};
  }
`;

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <ButtonRoot variant={variant}>{children}</ButtonRoot>;
};
