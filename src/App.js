import React, {useState} from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import './font/AdobeClean/stylesheet.css';
import { Navbar } from './Navbar/Navbar'; 
import { Menu } from './Menu/Menu';
import {FoodDialog} from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { useDrink } from './Hooks/useDrink';


function App() {
const openFood = useOpenFood();
const orders = useOrders();
const drinks = useDrink();
useTitle ({...openFood, ...orders});

  return (
<>
  <GlobalStyle/>
  <FoodDialog {...openFood} {...orders} {...drinks}/>
     <Navbar />  
     <Order {...orders} />
     {/* <Order /> */}
    <Menu {...openFood} />
</>
  );
}

export default App;
