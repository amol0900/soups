import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../Styles/colors';
import Logo from '../images/LogoInverted.svg';
import '../App.css';


const NavbarStyled = styled.div`
background-color: ${mainColor}; 
padding:15px;
display:flex;
justify-content:center;
`

export function Navbar(){
    return <NavbarStyled>
        <img src={Logo} alt="logo" className="logo" />
    </NavbarStyled>;
}