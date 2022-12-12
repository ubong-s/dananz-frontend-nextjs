import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, myTheme } from '../../styles/';
import { Nav } from '../nav/Nav';
import { Container } from './Container';

const LayoutRoot = styled.div`
  min-height: 100vh;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <LayoutRoot>
        <GlobalStyle />
        <Container>
          <Nav />
          <main>{children}</main>
        </Container>
      </LayoutRoot>
    </ThemeProvider>
  );
};
