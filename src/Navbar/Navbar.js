import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../Styles/colors';

const NavbarStyled = styled.div`
background-color: white; 

display:flex;
justify-content:center; 
/* position: -webkit-sticky;
position:sticky; */
top:0;
/* height:120px; */


`

export function Navbar(){
    return <NavbarStyled>
        <img src="/img/LogoN.png" alt="logo" className="logo" />
    </NavbarStyled>;
}