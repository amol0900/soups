import React from 'react';
import styled from 'styled-components';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';


const QuantityInputStyled = styled.input`
font-size: 14px;
width: 24px;
text-align:center;
border:none;
outline:none;
background-color:white;
`

const IncrementContainer = styled.div`
display:flex;
align-items:center;
height:24px;
padding-left: 25px;
padding-bottom: 15px;
`

const IncrementButton = styled.div`
  color: #656565;
  text-align: center; 
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    color:green;};
  }
`;

export function QuantityInput({ quantity }) {

  return (
    <IncrementContainer>
      <IncrementButton onClick={() => {
        quantity.setValue(quantity.value - 1);
      }}
        disabled={quantity.value === 1}>
        <AiOutlineMinusCircle style={{ width: '17px', height: '17px' }} />
      </IncrementButton>

      <QuantityInputStyled {...quantity} />

      <IncrementButton onClick={() => {
        quantity.setValue(quantity.value + 1);
      }}>
        <AiOutlinePlusCircle style={{ width: '17px', height: '17px' }} />
      </IncrementButton>
    </IncrementContainer>
  );
}