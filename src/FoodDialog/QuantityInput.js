import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const QuantityInputStyled = styled.input`
font-size:14px;
`

export function QuantityInput({quantity}){

    const [value, setValue] = useState(0);

    return <div>
        <div>Quantity:</div>
        <QuantityInputStyled {...quantity}/>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <p>{value}</p>

    </div>;
}