import React, { useContext } from "react";
import styled from 'styled-components';
import { OrderContent, OrderContainer, OrderTitle, Wizard, WizardItems } from "../Order/Order";
import { Dialog, DialogShadow, DialogFooter, getPrice } from '../FoodDialog/FoodDialog';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { InputWrapper } from '../HomeDialog';
import { FaLongArrowAltRight, FaCcVisa } from 'react-icons/fa';
import { MyButton } from '../Menu/FoodGrid';
import { formatPrice } from '../Data/FoodData';
import { TiDelete } from 'react-icons/ti';
import { AiTwotoneEdit } from 'react-icons/ai';
import { AddressContext } from "../AddressContext";
import { Exit, Button } from '../FoodDialog/FoodDialog';
import { IoIosArrowBack, IoIosCloseCircle } from 'react-icons/io'



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

export const Wrap = styled.div`
background-color:/* rgba(145, 219, 183, 0.3) */ #F5F5F5;
padding:10px 25px 10px;
margin-bottom: 10px;
`

const database = window.firebase.database();

function sendOrder(orders) {
    var newOrderRef = database.ref("orders").push();
    const newOrders = orders.map(order => {
        return Object.keys(order).reduce((acc, orderKey) => {
            if (!order[orderKey]) {
                // undefined value
                return acc;
            }
            if (orderKey === "breads" || orderKey === "drinks") {
                return {
                    ...acc,
                    [orderKey]: order[orderKey]
                        .filter(({ checked }) => checked)
                        .map(({ name }) => name)
                };
            }
            return {
                ...acc,
                [orderKey]: order[orderKey]
            };
        }, {});
    });
    newOrderRef.set({
        order: newOrders
    });
}

export function SummaryDialog({ openAdressDialog,
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
    closeMe, login, openConfirmDialog, setOpenConfirmDialog }) {

    const { adress, name } = useContext(AddressContext);


    function close() {
        setOpenSummaryDialog();
    }
    if (!openSummaryDialog) return null;


    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);


    const deliveryFee = 39;
    const total = subtotal + deliveryFee;

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }


    return openSummaryDialog ? <>
        <DialogShadow />
        <Dialog>
            <OrderContent>
                <Exit>
                    <IoIosArrowBack onClick={() => {
                        close();
                        setOpenPayDialog(true);
                    }} style={{width:'20px', height:'20px'}} />
                    <IoIosCloseCircle onClick={close} style={{color:'#DB91AD'}}/>
                </Exit>
                <OrderTitle><h1>Summering</h1></OrderTitle>
                <Wrap><h5><span className="bold">Din beställning</span></h5></Wrap>

                {" "}
                {orders.map((order, index) => (

                    <OrderContainer key={index}>
                        <OrderItem style={{ paddingBottom: '0px', cursor: 'pointer' }}>
                            <div>{order.quantity}</div>
                            <div>{order.name}</div>
                        </OrderItem>
                        <DetailItem>
                            <div></div>
                            <div>{order.breads
                                .filter(b => b.checked)
                                .map(bread => bread.name)
                            } {" "} {order.drinks.filter(d => d.checked).map(drink => drink.name)}
                            </div>
                            {/*                                     <div>{order.drinks.filter(d => d.checked).length === 0 ? null
                                     : order.drinks.filter(d => d.checked).length}</div> */}
                            <div></div>
                            <div></div>
                        </DetailItem>

                    </OrderContainer>

                ))}
                <Wrap><h5><span className="bold">Levereras till</span></h5></Wrap>
                <OrderContainer>
                    <p>{name}</p>
                    <p>{adress}</p>
                </OrderContainer>
                <Wrap><h5><span className="bold">Betalning</span></h5></Wrap>
                <OrderContainer>
                    <PriceItem>
                        <div><FaCcVisa style={{
                            width: '25px', height: '25px', marginRight: '8px',
                            color: '#1a1e71'
                        }} />
                        </div>
                        <div><p>••• 6702</p></div>
                        <div></div>
                        <div>
                            {formatPrice(total)}
                        </div>
                    </PriceItem>
                </OrderContainer>

            </OrderContent>


            <DialogFooter>
                <MyButton onClick={() => {
                    if (loggedIn) {
                        sendOrder(orders, loggedIn);
                        setOpenConfirmDialog(true);
                        close();
                    } else {
                        sendOrder(orders)
                        setOpenConfirmDialog(true);
                        close();
                    }

                }}>
                    <p className="buttonText">Beställ</p>
                </MyButton>
            </DialogFooter>
        </Dialog>
    </> : <div />
}


{/* <span className="bold">{formatPrice(total)}</span> */ }


{/* <span className="bold">Namn</span>
<Name defaultValue={loggedIn ? `${loggedIn.displayName}.` : ""}  type="text" />
<span className="bold">Adress</span>
<Name defaultValue="Adress" type="text" /> */}