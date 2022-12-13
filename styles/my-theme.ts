// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  colors: {
    main: {
      primary100: '#2C3878',
      primary200: '#566093',
      primary300: '#8088AE',
      primary400: '#ABAFC9',
      primary500: '#D5D7E4',
      primary600: '#EAEBF2',
    },
    grayScale: {
      black: '#000000',
      gray70: '#141414',
      gray50: '#333333',
      gray30: '#3C3C3C',
      gray10: '#9C9C9C',
      lightGray: '#D9D9D9',
      white: '#FFFFFF',
    },
  },
};

export { myTheme };
