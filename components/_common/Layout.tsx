import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, myTheme } from '../../styles/';
import { Footer } from '../footer/Footer';
import { Nav } from '../nav/Nav';
import { Container } from './Container';

const LayoutRoot = styled.div`
  min-height: 100vh;
`;

export const Layout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: any;
}) => {
  return (
    <ThemeProvider theme={myTheme}>
      <LayoutRoot>
        <GlobalStyle />
        <Nav />
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </LayoutRoot>
    </ThemeProvider>
  );
};
