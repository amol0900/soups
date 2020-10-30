import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { GlobalStyle } from './Styles/GlobalStyle';
import './font/AdobeClean/stylesheet.css';
import { Navbar } from './Navbar/Navbar'; 
import {FoodDialog} from './FoodDialog/FoodDialog';
import {CartDialog} from './CartDialog/CartDialog';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOpenCart } from './Hooks/useOpenCart';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import {  useAuthentication } from './Hooks/useAuthentication';
import {AdressDialog} from './Order/AdressDialog';
import {PayDialog} from './Order/PayDialog';
import {SummaryDialog} from './Order/SummaryDialog';
import { useAdressDialog } from './Hooks/useAdressDialog';
import { usePayDialog } from './Hooks/usePayDialog';
import { useSummaryDialog } from './Hooks/useSummaryDialog';
import { Home } from './Home';
import { Menu } from './Menu/Menu';




function App() {
const openFood = useOpenFood();
const openCart = useOpenCart();
const orders = useOrders();
const auth = useAuthentication();
const payDialog = usePayDialog();
const adressDialog = useAdressDialog();
const summaryDialog = useSummaryDialog();

useTitle ({...openFood, ...orders});


  return (
<>

  <GlobalStyle/>
  <Home/>
  <FoodDialog {...openFood} {...orders} />
  <CartDialog {...openCart} {...orders} {...openFood} {...auth} {...adressDialog} {...payDialog}/>
     <Navbar onClick={() => openCart.setOpenCart(true)} {...orders} {...auth}/>  
     {/* <Order {...orders} /> */}
     {/* <Order /> */}
    <Menu {...openFood} />
    {/* <Order {...orders} {...openFood} {...auth} {...adressDialog} /> */}
    <AdressDialog {...adressDialog} {...orders} {...auth} {...payDialog}/>
    <PayDialog {...payDialog} {...summaryDialog} />
    <SummaryDialog {...summaryDialog} {...orders} {...auth} />
</>
  );
}

export default App;
