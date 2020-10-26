import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../Styles/colors';
import {useEffect} from'react';


const NavbarStyled = styled.div`
background-color: white; 
display:grid;
grid-template-columns: 1fr 4fr 5fr 1fr;
 position: -webkit-sticky;
position:sticky; 
top:0;
/* height:120px; */
border-bottom: 1px solid #ccc;
margin-left:50px;
margin-right:50px;
padding-bottom:20px;

@media screen and (max-width: 500px) { 
    display:flex;
    flex-direction:row;
    justify-content:space-between;
   }

`

/* const Wrapper=styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
` */

const Logo=styled.div`

`

const Cart = styled.div`
cursor:pointer;
align-self:center;
position: relative;
text-align: center;

`
const Number = styled.div`
cursor:pointer;
align-self:center;
position:absolute;
top:65%;
left:52%;
font-weight:bold;
transform: translate(-50%, -50%);
font-size:17px; 
`


export function Navbar({ onClick, orders, setOrders } ){

   /*  function cartColor() {
       return orders.length === 0 ? <img src="/img/soup.png" alt="soup" className="soup" onClick={() => onClick()}/> : <img src="/img/gsoup.png" alt="soup" className="soup" onClick={() => onClick()}/>
    } */


    return <NavbarStyled>  
        <div></div>
        <div></div>
        <Logo><img src="/img/LogoN.png" alt="logo" className="logo" /></Logo>
        <Cart>{orders.length === 0 ? <img src="/img/gsoup.png" alt="soup" className="soup" onClick={() => onClick()}/> : <img src="/img/soup.png" alt="soup" className="soup" onClick={() => onClick()}/>}
        <Number onClick={() => onClick()}>{orders.length <= 0 ? null : orders.length}</Number></Cart>
    
    </NavbarStyled>;
}
{/* <img src="/img/soup.png" alt="soup" className="soup" onClick={() => onClick()}/> */}