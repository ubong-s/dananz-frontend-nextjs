import { ContainerRoot } from '../../styles/components/_common';

export const Container: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <ContainerRoot>{children}</ContainerRoot>;
};
