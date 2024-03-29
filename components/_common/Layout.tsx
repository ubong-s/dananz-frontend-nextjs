import { ThemeProvider } from 'styled-components';
import { GlobalStyle, myTheme } from '../../styles/';
import { LayoutRoot } from '../../styles/components/_common';
import { Footer } from '../footer';
import { Nav } from '../nav';
import { Container } from '.';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
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
