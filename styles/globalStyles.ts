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
    ease: 'all 0.5s ease-in-out',
    linear: 'all 0.5s linear',
  },
  shadow: '10px 10px 40px rgba(0, 0, 0, 0.05)',
  shadowAlt: ' 0px 0px 5px 1px rgba(0, 0, 0, 0.1)',
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
    color: ${(props) => props.theme.colors.grayScale.gray50};

    @media screen and (min-width: ${breakpoints.desktop}) {
      line-height: 60px;
    }
  }

  h3 {
    font-size: 25px;
    margin-bottom: 1rem;

    @media screen and (min-width: ${breakpoints.desktop}) {
      font-size: 36px;
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 1rem;

    @media screen and (min-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
      font-size: 18px;
    }
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

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${(props) => props.theme.colors.main.primary100};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.main.primary100},
      0 0 5px ${(props) => props.theme.colors.main.primary100};
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${(props) => props.theme.colors.main.primary100};
    border-left-color: ${(props) => props.theme.colors.main.primary100};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
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
