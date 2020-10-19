import React, {useState} from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import './font/AdobeClean/stylesheet.css';
import { Navbar } from './Navbar/Navbar'; 
import { Menu } from './Menu/Menu';
import {FoodDialog} from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { MyOrder } from './MyOrder/MyOrder';



function App() {
const [openFood, setOpenFood] = useState();

  return (
<>
  <GlobalStyle/>
  <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
     <Navbar />  
     <MyOrder />
     {/* <Order /> */}
    <Menu setOpenFood={setOpenFood}/>
</>
  );
}

export default App;
