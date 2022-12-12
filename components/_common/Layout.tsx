import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/globalStyles';
import { myTheme } from '../../styles/my-theme';

const LayoutRoot = styled.div`
  min-height: 100vh;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <LayoutRoot>
        <GlobalStyle />
        <main>{children}</main>
      </LayoutRoot>
    </ThemeProvider>
  );
};
