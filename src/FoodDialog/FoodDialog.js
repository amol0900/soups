import React from 'react';
import { MyButton} from '../Menu/FoodGrid';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import {Bread} from './Bread';
import {Drink} from './Drink';
import {useBreads} from '../Hooks/useBreads';
import {useDrinks} from '../Hooks/useDrinks';
import { IoIosCloseCircle } from 'react-icons/io'
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fader = keyframes`${fadeIn}`;


export const Dialog = styled.div`
display:flex;
flex-direction:column;
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

export const DialogContent = styled.div`
overflow:scroll;
height:100vh;
min-height:100px;
padding-bottom:80px;
`
const DialogContainer=styled.div`
padding:25px;
`
export const DialogFooter = styled.div`
/* box-shadow: 0px 2px 20px 0px grey; */
margin-bottom:0px;

`

export const Exit=styled.div`
cursor:pointer;
font-size:18px;
display:flex;
justify-content:space-between;
align-items:center;
padding:15px;
`

const FoodExit=styled.div`
cursor:pointer;
font-size:18px;
display:flex;
padding:10px;
flex-direction:column;
align-items:flex-end;
`
const Wrap = styled.div`
background-color:/* rgba(145, 219, 183, 0.3) */ #F5F5F5;
padding:10px 25px 10px;
`


const pricePerDrink = 25;

export function getPrice(order){
    console.log(order)
   /* return order.quantity * (order.price); */ 
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

function FoodDialogContainer({onClick, openFood, setOpenFood, setOrders, orders}) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const breads = useBreads(openFood.breads);
    const drinks = useDrinks(openFood.drinks);
    const isEditing = openFood.index > - 1;

    function close() {
        setOpenFood();
    }
    if (!openFood) return null;

    const order = {
        ...openFood,
        quantity: quantity.value,
        breads: breads.breads,
        drinks: drinks.drinks
    }

    function editOrder(newOrder){
        const newOrders = [...orders];
        newOrders[openFood.index] = order;
        setOrders(newOrders);
        close();
    }

    function addToOrder () {
        setOrders([...orders, order])
        close();
    }


    return (
     <>
        <DialogShadow onClick={close} />
        <Dialog>
         <DialogBanner img={openFood.minImg}>
         <FoodExit>
         <div><IoIosCloseCircle onClick={close} /></div>
         </FoodExit>
         </DialogBanner>
        <DialogTitle>
            <h4>{openFood.name}</h4>
            <h4><span className="price">{formatPrice(openFood.price)}</span></h4>
        </DialogTitle>

        <DialogContent>
        <QuantityInput quantity={quantity}/>
            <Wrap><h5><span className="bold">Välj tillbehör</span> (obligatorisk)</h5></Wrap>
            <DialogContainer>
            <Bread {...breads}/>
            </DialogContainer>
            <Wrap><h5><span className="bold">Välj dryck</span></h5></Wrap>
            <DialogContainer>
            <Drink {...drinks}/>
            </DialogContainer>
            
        </DialogContent>

        <DialogFooter>
            <MyButton onClick={isEditing ? editOrder : addToOrder}>
                <p className="buttonText">{isEditing ? `Uppdatera varukorgen`: `Lägg till i varukorgen`} {formatPrice(getPrice(order))}</p> 
            </MyButton>
        </DialogFooter>
    </Dialog>
    </>
    );
}

export function oldFoodDialog(props){
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />;  
}
export function FoodDialog(props){
    return (props.openFood) ?  <FoodDialogContainer {...props} /> : null; 
}

