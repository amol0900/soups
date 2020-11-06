import React from 'react';
import styled from 'styled-components';

const BreadGrid = styled.div`
display:grid;
grid-tempalte-columns: repeat (3, 1fr);

`
const BreadCheckbox = styled.input`
margin-right:10px;
cursor:pointer;
background-color:white;

`

const CheckboxLabel = styled.label`
cursor:pointer;
font-size:14px;
`

export function Bread({breads, checkBread}){
    return (
    <BreadGrid>
    {breads.map((bread, i) => (
    <CheckboxLabel key={i}>
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