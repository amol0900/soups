import React, {useState} from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import './font/AdobeClean/stylesheet.css';
import { Navbar } from './Navbar/Navbar'; 
import { Menu } from './Menu/Menu';
import {FoodDialog} from './FoodDialog/FoodDialog';
import {CartDialog} from './CartDialog/CartDialog';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOpenCart } from './Hooks/useOpenCart';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import {  useAuthentication } from './Hooks/useAuthentication';

function App() {
const openFood = useOpenFood();
const openCart = useOpenCart();
const orders = useOrders();
const auth = useAuthentication();
useTitle ({...openFood, ...orders});

  return (
<>
  <GlobalStyle/>
  <FoodDialog {...openFood} {...orders}/>
  <CartDialog {...openCart} {...orders} {...openFood} {...auth}/>
     <Navbar onClick={() => openCart.setOpenCart(true)} {...orders} {...auth}/>  
     {/* <Order {...orders} /> */}
     {/* <Order /> */}
    <Menu {...openFood} />
</>
  );
}

export default App;
