import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';
import { TiDelete } from 'react-icons/ti';
import { AiTwotoneEdit } from 'react-icons/ai';
import { buttonColor } from '../Styles/colors';
import ProgressBar from "./progress-bar.component";
import { AiFillShopping } from 'react-icons/ai';


const OrderContent = styled.div`
padding:20px;
height:100%;
overflow:auto;
color:#4E4E4E;
`

const OrderTitle=styled.div`
display:flex;
justify-content:center;
padding-bottom:30px;
`

const OrderContainer = styled.div`
padding:15px 0px;

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
color:#4E4E4E;
`

const DetailItem = styled.div`
color:gray;
font-size:10px;
padding-bottom:25px;
padding-top:0px;
display:grid;
grid-template-columns:23px 170px 20px 60px; 

`

const EditItem = styled.div`
color:gray;
font-size:10px;
/* padding-bottom:20px; */
padding-top:0px;
display:grid;
grid-template-columns:23px 170px 35px 20px;
border-bottom: 1px solid #ccc;
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
const Wizard=styled.div`
`
const WizardItems=styled.div`
width:25px;
height:25px;
color:#9AB54A;
`

const testData = [
    { bgcolor: "#9AB54A", completed: 66 },
  ];

export function Order({ orders, setOrders, setOpenFood, closeMe, login, loggedIn }) {
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
    
    return (
        <>
            {orders.length === 0 ? (
                <OrderContent>Your order is empty</OrderContent>
                
            ) : (
                    <OrderContent>
                        <OrderContainer>
                            <OrderTitle><h1 style={{color:'#656565'}}>Leveransinformation</h1></OrderTitle>
                            <Wizard>
                                <WizardItems><AiFillShopping style={{width:'25px', height:'25px'}} /></WizardItems>
                            {testData.map((item, idx) => (
                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                            ))}
                            </Wizard>
                        </OrderContainer>{" "}
                        {orders.map((order, index) => (
                            
                            <OrderContainer key={index}>
                                <OrderItem style={{paddingBottom: '0px', cursor:'pointer'}}>
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
                                    color:'#9AB54A'
                                    }} onClick={() => { closeMe(); setOpenFood({...order, index})
                                    }}>
                                    <AiTwotoneEdit  style={{width:'20px', height:'20px'}}/>
                                    </div>
                                    <div></div>
                                     <div style={{
                                    cursor: 'pointer',
                                    color:'red'
                                    }} onClick={() => {deleteItem(index)}} >
                                    <TiDelete style={{width:'20px', height:'20px'}}/>
                                    </div>
                                     </EditItem>
                            </OrderContainer>

                        ))}
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

                    </OrderContent>
                )}
        </>
    );
}