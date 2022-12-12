import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerRoot = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1200px;
`;

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerRoot>{children}</ContainerRoot>;
};
