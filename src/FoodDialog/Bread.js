import React from 'react';
import styled from 'styled-components';

const BreadGrid = styled.div`
display:grid;
grid-tempalte-columns: repeat (3, 1fr);
/* padding:0px 24px;  */

`
const BreadCheckbox = styled.input`
margin-right:10px;
cursor:pointer;

`

const CheckboxLabel = styled.label`
cursor:pointer;
`

export function Bread({breads, checkBread}){
    return (
    <BreadGrid>
    {breads.map((bread, i) => (
    <CheckboxLabel>
    <BreadCheckbox type="checkbox" 
    checked={bread.checked} 
    onClick={() => {
        checkBread(i);
    }}/>
    {bread.name}
    </CheckboxLabel>
    ))}
    </BreadGrid>
    );
}