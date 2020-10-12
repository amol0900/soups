import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin:0;
    font-family: 'Adobe Clean';
    font-size:12px;
    font-weight:normal;
    color:#242424;
  }

  h1 {
    font-family: 'Adobe Clean';
    font-size:18px;
    font-weight:normal;
    color:#242424;
    margin:0;

    @media screen and (max-width: 500px) { 
        font-size:24px;
        
       }
  }

  h2 {
    font-family: 'Adobe Clean';
    font-size:18px;
    font-weight:bold;
    color:#242424;
    margin-top:10px;

    @media screen and (max-width: 500px) { 
        font-size:24px;
        
       }
  }

  h3 {
    font-family: 'Adobe Clean';
    font-size:30px;
    font-weight:300;
    color:#242424;
    margin-bottom:0px;

/*     @media screen and (max-width: 500px) { 
        font-size:24px;
        
       } */
  }

  p {
    margin:0px;
    padding-top:3px;
    
    @media screen and (max-width: 500px) { 
        font-size:16px;
        
       }
    }
`

