import React from 'react';
import styled from 'styled-components';
import { MyButton} from '../Menu/FoodGrid';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from '../FoodDialog/QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import {Bread} from '../FoodDialog/Bread';
import {Drink} from '../FoodDialog/Drink';
import {useBreads} from '../Hooks/useBreads';
import {useDrinks} from '../Hooks/useDrinks';
import { Order } from  '../Order/Order'
import { useOpenFood } from '../Hooks/useOpenFood';


const Dialog = styled.div`
display:flex;
flex-direction:column;
background-color:white;
width:300px;
/* height:2000px; */
position:fixed;
top:75px;
z-index:5;
max-height: calc(100% - 100px);
left: calc(50% - 150px);
margin-top:0;



`
const DialogShadow = styled.div`
position:fixed;
width:100%;
height:100%;
top:0px;
background-color:black;
opacity:0.7;
z-index:4;
`

const DialogBanner = styled.div`
min-height:100px;
${({img}) => `background-image:url(${img});`}
background-position:center;
background-size:cover;

`
const DialogTitle = styled.div`
display:grid;
grid-template-columns: 200px 50px;
justify-content:space-between;
padding: 0px 20px 0px 20px;
padding-bottom:0px;
margin-bottom:0px;
`

const DialogContent = styled.div`
overflow:auto;
min-height:100px;
padding:0px 24px;
padding-bottom:80px;
`
const DialogFooter = styled.div`
box-shadow: 0px 2px 20px 0px grey;
height:60px;

`

 const pricePerDrink = 25;

export function getPrice(order){
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
 
function CartDialogContainer({openCart, setOpenCart, setOrders, orders, setOpenFood}) {
     const quantity = useQuantity(openCart && openCart.quantity);
    const breads = useBreads(openCart.breads);
    const drinks = useDrinks(openCart.drinks);
    const openFood = useOpenFood();

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

    function addToOrder () {
        setOrders([...orders, order])
        close();
    }
    

    return (
     <>
        <DialogShadow onClick={close} />
        <Dialog>
         <Order closeMe={() => close()} {...openFood} orders={orders} setOrders={setOrders} setOpenFood={setOpenFood} />
    </Dialog>
    </>
    );
}


export function CartDialog(props){
    return (props.openCart) ?  <CartDialogContainer {...props} /> : null; 
}