import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {mainColor} from '../Styles/colors';

const QuantityInputStyled = styled.input`
font-size: 14px;
font-weight:bold;
width: 24px;
text-align:center;
border:none;
outline:none;
`

const IncrementContainer = styled.div`
display:flex;
align-items:center;
height:24px;
`

const IncrementButton = styled.div`
  width:15px;
  height:15px;
  color: #656565;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  line-height: 18px;
  /* margin: 0px 10px; */
  border-radius:50px;
  border: 1px solid #656565;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    background-color: rgba(154, 181, 74);
    color:white;
    border: 1px solid rgba(154, 181, 74);};
  }
`;

export function QuantityInput({quantity}){

    return (
    <IncrementContainer>
        {/* <div>Quantity:</div> */}
        <IncrementButton onClick={() => {
          quantity.setValue(quantity.value - 1);
        }} disabled={quantity.value === 1}>-</IncrementButton>

        <QuantityInputStyled {...quantity}/>

        <IncrementButton onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}>+</IncrementButton>
    </IncrementContainer>
    );
}