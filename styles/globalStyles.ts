import { createGlobalStyle, css } from 'styled-components';

const misc = {
  rounded: {
    xs: '8px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    full: '999px',
  },
  transition: {
    ease: 'all 0.3s ease-in-out',
  },
};

const typography = {
  type: {
    primary: `'Poppins', sans-serif`,
  },
  weight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  large: '1100px',
  hd: '1440px',
};

const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  color: ${(props) => props.theme.colors.grayScale.gray10};
  line-height: 1.6;
  max-width: 1600px;
  font-weight: 400;
  margin: auto;
  transition: ${misc.transition.ease};
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.75em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
    /* outline: 1px solid slategrey; */
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 18px;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${typography.type.primary};
  }

  main {
    min-height: 100vh;
  }

  h1 {
    font-weight: ${typography.weight.bold};
    letter-spacing: 0.5px;
    line-height: 60px;
    color: ${(props) => props.theme.colors.main.primary100};

    @media screen and (min-width: ${breakpoints.desktop}) {
      line-height: 100px;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.semibold};
    line-height: 40px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.main.primary100};

    @media screen and (min-width: ${breakpoints.desktop}) {
      line-height: 60px;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    letter-spacing: 0.5px;
  }

  input {
    font-size: 14px;
    outline: none;

    @media screen and (min-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  button {
    cursor: pointer;
    font-size: 13px;

    @media screen and (min-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
   html {
      scroll-behavior: smooth;
   }
   body {
      ${bodyStyles}
   }
`;

export { GlobalStyle, breakpoints, typography, misc };
