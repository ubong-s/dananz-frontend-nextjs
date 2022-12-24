import { createGlobalStyle, css } from 'styled-components';
import mediaQueries from './mediaQueries';
import typography from './typography';
import misc from './misc';

const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: 0.875rem;
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
    width: 0.75rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
    /* outline: 1px solid slategrey; */
  }

  ${mediaQueries.tablet} {
    font-size: 1rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.125rem;
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
    letter-spacing: 0.03rem;
    line-height: 3.75rem;
    color: ${(props) => props.theme.colors.main.primary100};

    ${mediaQueries.desktop} {
      line-height: 6.25rem;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.semibold};
    line-height: 2.5rem;
    letter-spacing: 0.03rem;
    color: ${(props) => props.theme.colors.grayScale.gray50};

    ${mediaQueries.desktop} {
      line-height: 3.75rem;
    }
  }

  h3 {
    font-size: 1.56rem;
    margin-bottom: 1rem;

    ${mediaQueries.desktop} {
      font-size: 2.25rem;
    }
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1rem;

    ${mediaQueries.tablet} {
      font-size: 1rem;
    }

    ${mediaQueries.desktop} {
      font-size: 1.125rem;
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
    letter-spacing: 0.03rem;
  }

  input,
  textarea {
    font-size: 0.875rem;
    outline: none;

    ${mediaQueries.tablet} {
      font-size: 1rem;
    }
  }

  button {
    cursor: pointer;
    font-size: 0.8rem;
    border: none;
    padding: 1rem 2rem;
    background-color: ${(props) => props.theme.colors.main.primary100};
    color: ${(props) => props.theme.colors.grayScale.white};
    transition: ${misc.transition};

    &:hover {
      opacity: 0.85;
      transition: ${misc.transition.ease};
    }

    ${mediaQueries.tablet} {
      font-size: 0.825rem;
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
    height: 0.3rem;
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

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: ${(props) => props.theme.colors.main.primary100};
    transform-origin: 0%;
    z-index: 1000;
  }
`;

const GlobalStyle = createGlobalStyle`
   html {
      scroll-behavior: smooth;
      font-size: 16px;

   }
   body {
      ${bodyStyles}
   }
`;

export default GlobalStyle;
