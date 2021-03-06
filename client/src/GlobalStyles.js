import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333;
    font-size: 16px;
  }
`;

export default GlobalStyles;