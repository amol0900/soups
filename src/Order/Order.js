import React from 'react';
import styled from 'styled-components';

const FoodOrder = styled.div`
background-color:white;
width:300px;
height:2000px;
position:fixed;
top:75px;
z-index:5;
max-height: calc(100% - 100px);
left: calc(50% - 150px);
margin-top:0;
`
const OrderShadow = styled.div`
position:fixed;
width:100%;
height:100%;
top:0px;
background-color:black;
opacity:0.7;
z-index:4;
`

/* const DialogBanner = styled.div`
min-height:100px;
${({img}) => `background-image:url(${img});`}
background-position:center;
background-size:cover;

` */

const OrderTitle = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
width:100%;
`

/* export function Order() {
    return 
     <>
     <OrderShadow/>
    <FoodOrder>
        <OrderTitle>
        <h4>titel</h4>
        <h4><span className="price">pris</span></h4>
        </OrderTitle>
    </FoodOrder>
</>
 
} */

export function Order(){
    return <><OrderShadow/>
    <FoodOrder>
        <OrderTitle>
        <h4>titel</h4>
        <h4><span className="price">pris</span></h4>
        </OrderTitle>
    </FoodOrder></>
}