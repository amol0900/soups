import React from 'react';

import { MyButton } from '../Menu/FoodGrid';
import { formatPrice } from '../Data/FoodData';
import { getPrice, Dialog, DialogFooter } from '../FoodDialog/FoodDialog';
import { TiDelete } from 'react-icons/ti';
import { AiTwotoneEdit } from 'react-icons/ai';
import { buttonColor } from '../Styles/colors';
import ProgressBar from "./progress-bar.component";
import { AiFillShopping } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { GoCreditCard } from 'react-icons/go';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Exit, Button } from '../FoodDialog/FoodDialog';
import { IoIosArrowBack, IoIosCloseCircle } from 'react-icons/io'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { AnimateOnChange } from 'react-animation'


const fader = keyframes`${fadeIn}`;

const database = window.firebase.database();


export const OrderContent = styled.div`
/* padding:25px; */
height:100vh;
overflow:auto;
color:#4e4e4e;
background-color:white;
animation: 1s ${fader}; 

`

export const OrderTitle = styled.div`
display:flex;
justify-content:center;
padding-bottom: 35px;
padding-top: 10px;
`

export const OrderContainer = styled.div`
/* padding:25px; */
font-size:14px;
padding:0px 25px 25px 25px;
`

const PriceContainer = styled.div`
padding:10px 0px;
`

const OrderItem = styled.div`
display:grid;
grid-template-columns:20px 170px 5px 60px;
justify-content:space-between;
font-size:14px;
color:#4e4e4e;
`

const DetailItem = styled.div`
color:gray;
font-size:11px;
padding-bottom:25px;
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
border-bottom: 1px solid #e0e0de;
padding-bottom:25px;

`
const PriceItem = styled.div`
padding: 10px 0px;
display:grid;
grid-template-columns:20px 170px 5px 60px;
justify-content:space-between;
font-size:14px;
text-align:right;
`
export const Wizard = styled.div`

`
export const WizardItems = styled.div`
color:#91DBB7;
padding-bottom:20px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-left:5px;
margin-right:5px;
`

const testData = [
    { bgcolor: "#91DBB7", completed: 33 },
];



export function Order({
    openCart,
    setOpenCart,
    orders, setOrders,
    setOpenFood,
    closeMe,
    setOpenAdressDialog }) {
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    function close() {
        setOpenCart();
    }
    if (!openCart) return null;

    const deliveryFee = 39;
    const total = subtotal + deliveryFee;

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    return (
        <>
            {orders.length === 0 ? (

                <OrderContent>
                    <Exit>
        
                        <IoIosCloseCircle onClick={close} style={{color:'#DB91AD'}}/>
                    </Exit>
                    <OrderContainer>
                        <OrderTitle>
                            <h1>Din varukorg är tom</h1>
                        </OrderTitle>
                    </OrderContainer>
                </OrderContent>

            ) : (   
                    <Dialog>
                        <OrderContent>
                        <Exit>
                        <IoIosArrowBack onClick={close} />
                        <IoIosCloseCircle onClick={close} style={{color:'#DB91AD'}}/>
                    </Exit>
                            <OrderContainer>
                                <OrderTitle><h1>Din varukorg</h1></OrderTitle>
                                <Wizard>
                                    <WizardItems>
                                        <AiFillShopping style={{ width: '25px', height: '25px' }} />
                                        <MdLocationOn style={{ width: '25px', height: '25px', color: '#9E9E9E' }} />
                                        <GoCreditCard style={{ width: '25px', height: '25px', color: '#9E9E9E' }} />
                                    </WizardItems>
                                    {testData.map((item, idx) => (
                                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                    ))}
                                </Wizard>
                            </OrderContainer>{" "}
                            {orders.map((order, index) => (

                                <OrderContainer key={index}>
                                    <OrderItem style={{ paddingBottom: '0px', cursor: 'pointer' }}>
                                        <div>{order.quantity}</div>
                                        <div>{order.name}</div>
                                        <div></div>

                                        <div>{formatPrice(getPrice(order))}</div>
                                    </OrderItem>
                                    <DetailItem>
                                        <div></div>
                                        <div>{order.breads
                                            .filter(b => b.checked)
                                            .map(bread => bread.name)
                                        } {" "} {order.drinks.filter(d => d.checked).map(drink => drink.name)}
                                            {" "}{order.drinks.filter(d => d.checked).map(drink => formatPrice(drink.price))} </div>
                                        {/*                                     <div>{order.drinks.filter(d => d.checked).length === 0 ? null
                                     : order.drinks.filter(d => d.checked).length}</div> */}
                                        <div></div>
                                        <div></div>
                                    </DetailItem>
                                    <EditItem>
                                        <div></div>
                                        <div style={{
                                            cursor: 'pointer',
                                            color: '#91DBB7'
                                        }} onClick={() => {
                                            closeMe(); setOpenFood({ ...order, index })
                                        }}>
                                            <AiTwotoneEdit style={{ width: '20px', height: '20px' }} />
                                        </div>
                                        <div></div>
                                        <div style={{
                                            cursor: 'pointer',
                                            color: '#e7002b'
                                        }} onClick={() => { deleteItem(index) }} >
                                            <TiDelete style={{ width: '20px', height: '20px' }} />
                                        </div>
                                    </EditItem>
                                </OrderContainer>

                            ))}
                            <OrderContainer>
                                <PriceContainer>
                                    <PriceItem>
                                        <div>Delsumma</div>
                                        <div />
                                        <div>
                                            {formatPrice(subtotal)}
                                        </div>
                                    </PriceItem>
                                    <PriceItem>

                                        <div>Leveransavgift</div>
                                        <div />
                                        <div>
                                            {formatPrice(deliveryFee)}
                                        </div>
                                    </PriceItem>
                                    <PriceItem>

                                        <div><span className="bold">Totalbelopp</span></div>
                                        <div />
                                        <div>
                                            <span className="bold">{formatPrice(total)}</span>
                                        </div>
                                    </PriceItem>
                                </PriceContainer>
                            </OrderContainer>

                        </OrderContent>
                        <DialogFooter>
                            <MyButton onClick={() => { close();
                                setOpenAdressDialog(true);
                    
                            }}>
                                <p className="buttonText">Bekräfta adress</p> &nbsp;
                             <FaLongArrowAltRight style={{ color: '#242424', width: '20px', height: '20px' }} /></MyButton>
                        </DialogFooter>
                    </Dialog>
                    
                )}

        </>
    );
}

