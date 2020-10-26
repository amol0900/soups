import React from 'react';
import styled from 'styled-components';
import {formatPrice} from '../Data/FoodData';

const DrinkGrid = styled.div`
display:grid;
grid-tempalte-columns: repeat (3, 1fr);
/* padding:0px 24px; */ 

`
const DrinkCheckbox = styled.input`
margin-right:10px;
cursor:pointer;

`

const CheckboxLabel = styled.label`
cursor:pointer;
`

export function Drink({drinks, checkDrink}){
    return (
    <DrinkGrid>
    {drinks.map((drink, i) => (
    <CheckboxLabel>
    <DrinkCheckbox type="checkbox"
    checked={drink.checked}
     onClick={() => {
        checkDrink(i);
    }}/>
    {drink.name} {formatPrice(drink.price)}
    </CheckboxLabel>
    ))}
    </DrinkGrid>
    );
}