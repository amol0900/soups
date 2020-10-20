import React from 'react';
import styled from 'styled-components';

const MyOrderStyled = styled.div `
position:fixed;
right:0;
top:50px;
width:340px;
height:100%;
background-color:green;

`

const OrderContent = styled.div`
padding:20px;
height:100%;
`

export function Order({orders}) {
    return (
    <MyOrderStyled>
       {orders.length === 0 ? (
       <OrderContent>Your order is empty</OrderContent>
       ) : ( 
       <OrderContent>Found {orders.length} orders</OrderContent>
        )}
        </MyOrderStyled>
    );
}