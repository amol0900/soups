import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

const MyOrderStyled = styled.div `
position:fixed;
right:0;
margin-right:50px;
top:150px;
width:340px;
height:100%;



`
const OrderContent = styled.div`
padding:20px;
height:100%;
`

const OrderContainer = styled.div`
padding:10px 0px;
border-bottom: 1px solid #ccc;
`

const OrderItem = styled.div`
padding: 10px 0px;
display:grid;
grid-template-columns:20px 150px 20px 60px;
justify-content:space-between;
`

export function Order({orders}) {
    return (
    <MyOrderStyled>
       {orders.length === 0 ? (
       <OrderContent>Your order is empty</OrderContent>
       ) : ( 
       <OrderContent>
           <OrderContainer>
               <h1>Din varukorg</h1>
           </OrderContainer>{" "}
           {orders.map( order => (
               <OrderContainer>
                   <OrderItem>
                       <div>{order.quantity}</div>
                       <div>{order.name}</div>
                       <div></div>
                       <div>{formatPrice(getPrice(order))}</div>
                   </OrderItem>
               </OrderContainer>

           ))}
        </OrderContent>
        )}
        </MyOrderStyled>
    );
}