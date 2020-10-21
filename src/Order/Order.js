import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../Data/FoodData';

const MyOrderStyled = styled.div `
position:fixed;
right:0;
top:50px;
width:340px;
height:100%;
background-color:white;

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
                       <div>1</div>
                       <div>{order.name}</div>
                       <div></div>
                       <div>{formatPrice(order.price)}</div>
                   </OrderItem>
               </OrderContainer>

           ))}
        </OrderContent>
        )}
        </MyOrderStyled>
    );
}