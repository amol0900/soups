import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel, FoodWrapper } from './FoodGrid';

const MenuStyled = styled.div`
display:flex;
margin-top:30px;
justify-content:center;
`

export function Menu() {
    return <MenuStyled>
        <FoodGrid>
            <FoodWrapper>
        {foods.map(food => (
            <Food img={food.img}>
                <FoodLabel>
                <h1>{food.name}</h1>
                <p>{food.description}</p>
                <h2>{food.price}</h2>
                </FoodLabel>
                </Food>
                
        ))}
        </FoodWrapper>
        </FoodGrid>
    </MenuStyled>
}