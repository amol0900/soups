import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {mainColor} from '../Styles/colors';

const QuantityInputStyled = styled.input`
font-size: 14px;
width: 24px;
text-align:center;
border:none;
outline:none;
`

const IncrementContainer = styled.div`
display:flex;
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
    background-color: #ffe3e3;
  }
`;

export function QuantityInput({quantity}){

    return (
    <IncrementContainer>
        {/* <div>Quantity:</div> */}
        <IncrementButton>-</IncrementButton>
        <QuantityInputStyled {...quantity}/>
        <IncrementButton>+</IncrementButton>
    </IncrementContainer>
    );
}