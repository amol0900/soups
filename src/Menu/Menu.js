import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel, FoodWrapper, MyButton} from './FoodGrid';

const MenuStyled = styled.div`
display:flex;
justify-content:center;

@media screen and (max-width: 500px) { 
    
    `

export function Menu() {
    return <MenuStyled>
        <FoodGrid>
        <h3>Vilken soppa blir det idag?</h3>
            <FoodWrapper>
        {foods.map(food => (
            <Food>
               <img src={food.img} className="item" />
                <FoodLabel>
                <h1>{food.name}</h1>
                <p>{food.description}</p>
                <h2>{food.price}</h2>
                <MyButton>
                    <p className="buttonText">Lägg till</p>
                </MyButton>
                </FoodLabel>
                
                </Food>
                
        ))}
        <div className="empty-div"></div>
        <div className="empty-div"></div>
        </FoodWrapper>
        </FoodGrid>
    </MenuStyled>
}