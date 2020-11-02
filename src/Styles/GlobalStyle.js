import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

body, html {
    margin:0;
    padding:0;
    font-family: 'Adobe Clean';
    font-size:12px;
    font-weight:normal;
    color:#242424;
    scroll-behavior: smooth;


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
    /* border-top: 1px solid #ccc; */
    padding:10px;
    margin-top:35px;

/*     @media screen and (max-width: 500px) { 
        font-size:24px;
        
       } */
  }

  h4 {
    font-size:16px;
    font-weight:normal;
    margin:20px 0px 10px 0px;
  }

  h5 {
    font-size:14px;
    font-weight:normal;
    /* margin:10px; */
    margin:0;
    padding:0;
  }

  .buttonText {
    font-size:13px;
}

  p {
    margin:0px;
    padding-top:3px;
    
    @media screen and (max-width: 500px) { 
        font-size:16px;
        
       }
    }

    .bold {
      font-weight:bold;
    }

    .empty-div {width:250px;}

    .logo {
      width:130px;
      height:89px;
  }

  .biglogo {
    width:300px;
    height:auto;
}

  .soup {
    width:45px;
    height:auto;
}

.card {
  width:30px;
  margin-right:10px;
}
  
  .item {
      width:250px;
      /* height:570px; */
      border-radius:2px;
    
  }

  @media screen and (max-width: 500px) { 
    .item {width: 300px; 
     height: auto;  }
     /* .logo {display:none;} */
   }

  .price {
    font-weight:bold;
    font-size:15px;
  }


`

