import React, { useContext } from "react";
import styled from 'styled-components';
import { OrderContent, OrderContainer, OrderTitle, Wizard, WizardItems } from "../Order/Order";
import { Dialog, DialogShadow, DialogFooter, getPrice, } from '../FoodDialog/FoodDialog';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { IoMdBicycle } from 'react-icons/io';
import { Exit, Button } from '../FoodDialog/FoodDialog';
import { Wrap } from '../Order/SummaryDialog';
import { IoIosCloseCircle } from 'react-icons/io';


const DialogBanner = styled.div`
min-height:100px;
background-image:url('/img/3m.jpg');
background-position:center;
background-size:cover;

`

const PriceContainer = styled.div`
padding:10px 0px;
`

const OrderItem = styled.div`
padding: 10px 0px;
display:grid;
grid-template-columns:20px 170px 5px 60px;
justify-content:space-between;
font-size:14px;
color:#4e4e4e;
`

const DetailItem = styled.div`
color:gray;
font-size:11px;
/* padding-bottom:25px; */
padding-top:0px;
display:grid;
grid-template-columns:20px 170px 20px 60px; 

`

const EditItem = styled.div`
color:gray;
font-size:10px;
/* padding-bottom:20px; */
padding-top:0px;
display:grid;
grid-template-columns:20px 170px 35px 20px;
border-bottom: 1px solid #ccc;
padding-bottom:25px;

`
const PriceItem = styled.div`
padding: 10px 0px;
display:grid;
grid-template-columns:30px 170px 0px 60px;
justify-content:space-between;
align-items:center;
font-size:14px;
`

/* export const Wrap = styled.div`
background-color:#F5F5F5;
padding:10px 25px 10px;
margin-bottom: -5px;
` */

const Courier = styled.div`
display:flex;
align-items:center;
`
const Logo = styled.div`
display:flex;
justify-content:center;
`

export function ConfirmDialog({ openAdressDialog,
    setOpenAdressDialog,
    orders,
    order,
    setOrders,
    loggedIn,
    setOpenFood,
    displayName,
    openPayDialog,
    setOpenPayDialog,
    openSummaryDialog,
    setOpenSummaryDialog,
    closeMe, login,
    openConfirmDialog,
setOpenConfirmDialog }) {

        function close() {
            setOpenConfirmDialog();
            setOrders([]);
        }
        if (!openConfirmDialog) return null;


    return openConfirmDialog ? <>
        <DialogShadow />
        <Dialog>
            {/* <DialogBanner /> */}
            <OrderContent>
                <Exit>
                <IoIosCloseCircle onClick={close} style={{color:'#DB91AD'}}/>
                </Exit>
                <Logo><img src="/img/LogoP.png" alt="logo" className="logo" /></Logo>
                <OrderTitle>
                    <h5>Din beställning är påväg!</h5>
                </OrderTitle>
                <Wrap style={{ display: 'flex', alignItems: 'center', }}><AiOutlineFieldTime style={{ width: '25px', height: '25px', marginRight: '5px' }} />
                    <h5><span className="bold">Estimerad leveranstid</span></h5></Wrap>
                <OrderContainer>
                    <span style={{ fontSize: '30px', color: '#91DBB7' }}>12:20</span>
                </OrderContainer>
                <Wrap style={{ display: 'flex', alignItems: 'center', }}><IoMdBicycle style={{ width: '25px', height: '25px', marginRight: '5px' }} />
                    <h5><span className="bold">Din kurir</span></h5></Wrap>


                <OrderContainer>
                    <Courier>
                        <FaUserCircle style={{
                            width: '30px',
                            height: '50px',
                            color: '#91DBB7',
                            marginRight: '10px'
                        }} /> <p>David levererar din order på cykel</p>
                    </Courier>
                </OrderContainer>





            </OrderContent>

        </Dialog>
    </> : <div />
}


{/* <span className="bold">{formatPrice(total)}</span> */ }


{/* <span className="bold">Namn</span>
<Name defaultValue={loggedIn ? `${loggedIn.displayName}.` : ""}  type="text" />
<span className="bold">Adress</span>
<Name defaultValue="Adress" type="text" /> */}