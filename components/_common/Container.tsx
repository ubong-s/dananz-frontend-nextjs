import styled from 'styled-components';

// styles
const ContainerRoot = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1200px;
`;

// types
interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerRoot>{children}</ContainerRoot>;
};
