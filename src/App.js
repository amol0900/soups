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
    <h1>Roasted tomato & quinoa</h1>
    <p>Tomatsoppa med quinoa, vitlök och lök toppas<br /> med färsk basilika och krispiga krutonger.</p>
    </div>
</>
  );
}

export default App;
