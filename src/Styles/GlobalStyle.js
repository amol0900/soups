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
    font-size:18px;
    font-weight:normal;
    margin:0;

    @media screen and (max-width: 500px) { 
        font-size:24px;
        
       }
  }

  h2 {
    font-size:18px;
    margin-top:10px;

    @media screen and (max-width: 500px) { 
        font-size:24px;
        
       }
  }

  h3 {
    font-size:30px;
    font-weight:300;
    margin-bottom:0px;
    border-top: 1px solid #ccc;
    padding-top:40px;
    margin-top:25px;

/*     @media screen and (max-width: 500px) { 
        font-size:24px;
        
       } */
  }

  h4 {
    font-size:16px;
    font-weight:normal;
  }

  .buttonText {
    font-size:12px;
}

  p {
    margin:0px;
    padding-top:3px;
    
    @media screen and (max-width: 500px) { 
        font-size:16px;
        
       }
    }

    .empty-div {width:250px;}

    .logo {
      width:150px;
      height:109px;
  }
  
  .item {
      width:250px;
      /* height:570px; */
  }

  @media screen and (max-width: 500px) { 
    .item {width: 300px; 
     height: auto;  }
   }

  .price {
    font-weight:bold;
  }


`

