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

export function MyOrder() {
    return <MyOrderStyled>Your order is empty</MyOrderStyled>
    
}