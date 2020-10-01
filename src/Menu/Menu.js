import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid } from './FoodGrid';

const MenuStyled = styled.div`
display:flex;
justify-content:center;
`

export function Menu() {
    return <MenuStyled>
        <FoodGrid>
        {foods.map(food => (
            <Food img={food.img}>
                <h1>{food.name}</h1>
                <p>{food.description}</p></Food>
        ))}
        </FoodGrid>
    </MenuStyled>
}