import React from 'react';
import styled from 'styled-components';

const DrinkGrid = styled.div`
display:grid;
grid-tempalte-columns: repeat (3, 1fr);
padding:0px 24px; 

`
const DrinkCheckbox = styled.input`
margin-right:10px;
cursor:pointer;

`

const CheckboxLabel = styled.label`
cursor:pointer;
`

export function Drink({breads, checkBread}){
    return (
    <DrinkGrid>
    {breads.map((bread, i) => (<CheckboxLabel>
    <DrinkCheckbox type="checkbox"
    checked={bread.checked}
     onClick={() => {
        checkBread(i);
    }}/>
    Drink
    </CheckboxLabel>))}
    </DrinkGrid>
    );
}