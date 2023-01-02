import { ButtonRoot } from '../../styles/components/_common';
import { ButtonProps } from '../../types/global';

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <ButtonRoot variant={variant}>{children}</ButtonRoot>;
};
