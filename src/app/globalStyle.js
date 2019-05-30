import { createGlobalStyle } from 'styled-components';
// import { fluidTypography, defaultFont, color } from 'utils';
import { fluidTypography, color } from 'utils';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    ${fluidTypography({ minFontSize: 16, maxFontSize: 20 })};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'EB Garamond', serif;
    line-height: 1.6;
    background: ${color.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button:focus, input:focus, a:focus {
    outline: ${color.secondary} solid 2px;
  }
  
`;

export default GlobalStyle;
