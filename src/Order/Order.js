import React from 'react';
import styled from 'styled-components';

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
padding: 10px 0 px;
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
                       {order.name}
                   </OrderItem>
               </OrderContainer>

           ))}
        </OrderContent>
        )}
        </MyOrderStyled>
    );
}