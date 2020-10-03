import React from 'react';
import { createGlobalStyle } from 'styled-components'
import './font/AdobeClean/stylesheet.css';
import { Navbar } from './Navbar/Navbar'; 
import { Menu } from './Menu/Menu';


const GlobalStyle = createGlobalStyle`
body {
    margin:0;
    font-family: 'Adobe Clean';
    font-size:0.7em;
    font-weight:normal;
    color:#242424;
  }

  h1 {
    font-family: 'Adobe Clean';
    font-size:1.6em;
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
    padding-top:2px;
    }
`

function App() {
  return (
<>
  <GlobalStyle/>
  <div>
    <Navbar />
    <Menu />
    </div>
</>
  );
}

export default App;
