import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

/* const MyOrderStyled = styled.div`
position:fixed;
right:0;
margin-right:50px;
top:150px;
width:340px;
height:100%;

` */
const OrderContent = styled.div`
padding:20px;
height:100%;
`

const OrderTitle=styled.div`
display:flex;
justify-content:center;
`

const OrderContainer = styled.div`
padding:10px 0px;
/* border-bottom: 1px solid #ccc; */
`

const PriceContainer = styled.div`
padding:10px 0px;
`

const OrderItem = styled.div`
padding: 10px 0px;
display:grid;
grid-template-columns:20px 150px 20px 60px;
justify-content:space-between;
`

const DetailItem = styled.div`
color:gray;
font-size:10px;
padding: 0px 25px;
`

export function Order({ orders, setOrders }) {
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    const deliveryFee = 39;
    const total = subtotal + deliveryFee;
    
    return (
        <>
            {orders.length === 0 ? (
                <OrderContent>Your order is empty</OrderContent>
            ) : (
                    <OrderContent>
                        <OrderContainer>
                            <OrderTitle><h1>Din varukorg</h1></OrderTitle>
                        </OrderContainer>{" "}
                        {orders.map((order, index) => (
                            
                            <OrderContainer key={index}>
                                <OrderItem>
                                    <div>{order.quantity}</div>
                                    <div>{order.name}</div>
                                    <div></div>
                                    <div>{formatPrice(getPrice(order))}</div>
                                </OrderItem>
                                <DetailItem>
                                    <div>{order.breads
                                        .filter(b => b.checked)
                                        .map(bread => bread.name)
                                    }</div>

                                </DetailItem>
                                <OrderItem>
                                    <div>{order.drinks.filter(d => d.checked).length === 0 ? null : order.drinks.filter(d => d.checked).length}</div>
                                    <div>{order.drinks.filter(d => d.checked).map(drink => drink.name)}</div>
                                    <div></div>
                                    <div>{order.drinks.filter(d => d.checked).map(drink => formatPrice(drink.price))}
                                    </div>
                                </OrderItem>
                            </OrderContainer>

                        ))}
                        <PriceContainer>
                            <OrderItem>
                                <div />
                                <div>Delsumma</div>
                                <div />
                                <div>
                                    {formatPrice(subtotal)}
                                </div>
                            </OrderItem>
                            <OrderItem>
                                <div />
                                <div>Leveransavgift</div>
                                <div />
                                <div>
                                    {formatPrice(deliveryFee)}
                                </div>
                            </OrderItem>
                            <OrderItem>
                                <div />
                                <div><span className="bold">Totalbelopp</span></div>
                                <div />
                                <div>
                                    <span className="bold">{formatPrice(total)}</span>
                                </div>
                            </OrderItem>
                        </PriceContainer>
                    </OrderContent>
                )}
        </>
    );
}