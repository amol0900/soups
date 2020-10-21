import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const QuantityInputStyled = styled.input`
font-size:14px;
`

export function QuantityInput({quantity}){


    return <div>
        <div>Quantity:</div>
        <QuantityInputStyled {...quantity}/>

    </div>;
}