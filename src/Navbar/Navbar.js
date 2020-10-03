import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../Styles/colors';
import '../App.css';


const NavbarStyled = styled.div`
background-color: ${mainColor}; 
padding:10px;
display:flex;
justify-content:center;
position: -webkit-sticky;
position:sticky;
top:0;
/* width:100%; */
z-index:999;
`

export function Navbar(){
    return <NavbarStyled>
        <img src="/img/LogoInverted.svg" alt="logo" className="logo" />
    </NavbarStyled>;
}