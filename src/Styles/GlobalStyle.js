import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin:0;
    font-family: 'Adobe Clean';
    font-size:0.6em;
    font-weight:normal;
    color:#242424;
  }

  h1 {
    font-family: 'Adobe Clean';
    font-size:16px;
    font-weight:normal;
    color:#242424;
    margin:0;
  }

  h2 {
    font-family: 'Adobe Clean';
    font-size:1.3em;
    font-weight:bold;
    color:#242424;
    margin-top:5px;
  }

  p {margin:0px;
    padding-top:1px;
    }
`