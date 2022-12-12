// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends myTheme {
    colors: {
      main: {
        primary100: string;
        primary200: string;
        primary300: string;
        primary400: string;
        primary500: string;
        primary600: string;
      };
      grayScale: {
        black: string;
        gray70: string;
        gray50: string;
        gray30: string;
        gray10: string;
        lightGray: string;
        white: string;
      };
    };
  }
}
