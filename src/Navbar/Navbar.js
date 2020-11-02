import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../Styles/colors';
import { useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { MdLocationOn } from 'react-icons/md';
import { AnimateOnChange } from 'react-animation'


const NavbarStyled = styled.div`
background-color: white; 
display:grid;
grid-template-columns:5fr 2fr 2fr 2fr;
position: -webkit-sticky;
position:sticky; 
top:0;
padding-bottom:20px;
width:100%;

@media screen and (max-width: 500px) { 

    grid-template-columns:4fr 4fr 1fr 3fr;
   }

`

const Logo = styled.div`

`

const Cart = styled.div`
cursor:pointer;
align-self:center;
position: relative;
text-align: center;
${({ disabled }) =>
        disabled &&
        `opacity: 0.5; 
 pointer-events: none; 
 `}

`
const Number = styled.div`
cursor:pointer;
align-self:center;
position:absolute;
top:65%;
left:51%;
font-weight:bold;
transform: translate(-50%, -50%);
font-size:16px; 
`
const UserStatus = styled.div`
font-size:14px;
align-self:center;
`
const LoginButton = styled.span`
cursor:pointer;
`

export function Navbar({ onClick, orders, setOrders, login, loggedIn, logout }) {
    const [adress, setAdress] = useLocalStorage('adress', 'Ange din adress');


    return <NavbarStyled>

        <div></div>
        <Logo><img src="/img/LogoP.png" alt="logo" className="logo" /></Logo>
        <div></div>
{/*         <UserStatus>
            {loggedIn !== 'loading' ? (
                <>
                    <FaRegUserCircle /> {loggedIn ? `Hej ${loggedIn.displayName}.` : ""}

                    {loggedIn ? (
                        <LoginButton onClick={logout}>Logga ut</LoginButton>
                    ) : (
                            <LoginButton onClick={login}> Logga in / Registrera</LoginButton>
                        )}
                </>
            ) : (
                    "Laddar..."
                )}
        </UserStatus> */}
        <Cart disabled={orders.length === 0}>{orders.length === 0 ? <img src="/img/gsoup.png" alt="soup" className="soup" onClick={() => onClick()} />
            : <img src="/img/soupP.svg" alt="soup" className="soup" onClick={() => onClick()} />}
            <AnimateOnChange>
            <Number onClick={() => onClick()}>{orders.length <= 0 ? null : orders.length}</Number>
            </AnimateOnChange>
            </Cart>
    </NavbarStyled>;
}
{/* <img src="/img/soup.png" alt="soup" className="soup" onClick={() => onClick()}/> */ }

/* ${loggedIn.displayName} */

{/* <LoginButton onClick={logout}>Logga ut</LoginButton> */ }