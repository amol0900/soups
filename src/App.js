import React from 'react';
import { createGlobalStyle } from 'styled-components'
import './font/AdobeClean/stylesheet.css'
import { Navbar } from './Navbar/Navbar'; 

const GlobalStyle = createGlobalStyle`
body {
    margin:0;
    font-family: 'Adobe Clean';
    font-size:0.8em;
    font-weight:normal;
    color:#242424;
  }

  h1 {
    font-family: 'Adobe Clean';
    font-size:1.7em;
    font-weight:normal;
    color:#242424;
  }
`

function App() {
  return (
<>
  <GlobalStyle/>
  <div>
    <Navbar />
    <h1>Roasted tomato & quinoa</h1>
    <p>Tomatsoppa med quinoa, vitlök och lök toppas<br /> med färsk basilika och krispiga krutonger.</p>
    </div>
</>
  );
}

export default App;
