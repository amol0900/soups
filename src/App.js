import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import './font/AdobeClean/stylesheet.css';
import { Navbar } from './Navbar/Navbar'; 
import { FoodDialog } from './FoodDialog/FoodDialog';
import { CartDialog } from './CartDialog/CartDialog';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOpenCart } from './Hooks/useOpenCart';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import {  useAuthentication } from './Hooks/useAuthentication';
import { AdressDialog } from './Order/AdressDialog';
import { PayDialog } from './Order/PayDialog';
import { SummaryDialog } from './Order/SummaryDialog';
import { ConfirmDialog } from './Order/ConfirmDialog';
import { useAdressDialog } from './Hooks/useAdressDialog';
import { usePayDialog } from './Hooks/usePayDialog';
import { useSummaryDialog } from './Hooks/useSummaryDialog';
import { useConfirmDialog } from './Hooks/useConfirmDialog';
import { useHomeDialog } from './Hooks/useHomeDialog';
import { HomeDialog } from './HomeDialog';
import { Menu } from './Menu/Menu';
import { useLocalStorage } from './Hooks/useLocalStorage';
import { AddressContext } from "./AddressContext";


function App() {
const openFood = useOpenFood();
const openCart = useOpenCart();
const orders = useOrders();
const auth = useAuthentication();
const homeDialog = useHomeDialog();
const payDialog = usePayDialog();
const adressDialog = useAdressDialog();
const summaryDialog = useSummaryDialog();
const confirmDialog = useConfirmDialog();
const [adress, setAdress] = useLocalStorage('adress', '');
const [name, setName] = useLocalStorage('name', '');


useTitle ({...openFood, ...orders});


return (

<AddressContext.Provider value={{ adress, setAdress, name, setName }}>
  <GlobalStyle/>
  <HomeDialog {...homeDialog} {...auth}/>
  <FoodDialog {...openFood} {...orders} />
  <CartDialog {...openCart} {...orders} {...openFood} {...auth} {...adressDialog} {...payDialog}/>
  <Navbar onClick={() => openCart.setOpenCart(true)} {...orders} {...auth}/>  
  <Menu {...openFood} />
  <AdressDialog {...openCart} {...adressDialog} {...orders} {...auth} {...payDialog}/>
  <PayDialog {...adressDialog} {...payDialog} {...summaryDialog} />
  <SummaryDialog {...payDialog} {...summaryDialog} {...orders} {...confirmDialog} {...auth} />
  <ConfirmDialog {...confirmDialog} {...orders} {...auth} />
  </AddressContext.Provider>

  );
};

export default App;
