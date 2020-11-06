import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useQuantity } from '../Hooks/useQuantity';
import { useBreads } from '../Hooks/useBreads';
import { useDrinks } from '../Hooks/useDrinks';
import { Order } from '../Order/Order'
import { useOpenFood } from '../Hooks/useOpenFood';
import { AdressDialog } from '../Order/AdressDialog';
import { SummaryDialog } from '../Order/SummaryDialog';
import { useAuthentication } from '../Hooks/useAuthentication';
import { useAdressDialog } from '../Hooks/useAdressDialog';
import { fadeIn } from 'react-animations';


const fader = keyframes`${fadeIn}`;


export const Dialog = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
background-color:white;
width:300px;
position:fixed;
top:75px;
z-index:5;
min-height: calc(100% - 100px);
max-height: calc(100% - 100px);
left: calc(50% - 150px);
margin-top:0;
animation: 1s ${fader};  


`
export const DialogShadow = styled.div`
position:fixed;
width:100%;
height:100%;
top:0px;
background-color:black;
opacity:0.7;
z-index:4;
`

const pricePerDrink = 25;

export function getPrice(order) {
    console.log(order)
    return (
        order.quantity *
        (order.price +
            order.drinks.filter(d => d.checked).length * pricePerDrink)
    );
}

function hasBread(food) {
    return food.section === "soup";
}

function hasDrink(food) {
    return food.section === "soup";
}

function CartDialogContainer({ openCart,
    setOpenCart,
    setOrders,
    orders,
    setOpenFood,
    login, loggedIn,
    setOpenAdressDialog,
    setOpenPayDialog,
    setOpenSummaryDialog,
    setOpenConfirmDialog }) {
    
    const quantity = useQuantity(openCart && openCart.quantity);
    const breads = useBreads(openCart.breads);
    const drinks = useDrinks(openCart.drinks);
    const openFood = useOpenFood();
    const auth = useAuthentication();
    const adressDialog = useAdressDialog();


    function close() {
        setOpenCart();
    }
    if (!openCart) return null;

    const order = {
        ...openCart,
        quantity: quantity.value,
        breads: breads.breads,
        drinks: drinks.drinks
    }

    function addToOrder() {
        setOrders([...orders, order])
        close();
    }


    return (
        <>
            <DialogShadow />
            <Dialog>
                <Order closeMe={() => close()} {...openFood} orders={orders}
                    setOrders={setOrders} setOpenFood={setOpenFood} openCart={openCart} setOpenCart={setOpenCart}
                    setOpenAdressDialog={setOpenAdressDialog} />

                <AdressDialog  {...auth} />

                <SummaryDialog {...openFood} orders={orders}
                    setOrders={setOrders} setOpenFood={setOpenFood}  setOpenPayDialog={setOpenPayDialog} 
                    setOpenConfirmDialog={setOpenConfirmDialog} {...auth} />

            </Dialog>
        </>
    );
}

export function CartDialog(props) {
    return (props.openCart) ? <CartDialogContainer {...props} /> : null;
}