import styled from 'styled-components';

interface ButtonProps {
  variant: 'nav' | 'button' | 'button-alt';
  children: React.ReactElement | string;
}

const ButtonRoot = styled.button``;

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <ButtonRoot>{children}</ButtonRoot>;
};
