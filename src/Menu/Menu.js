import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel, FoodWrapper, MyButton} from './FoodGrid';
import {formatPrice} from '../Data/FoodData';

const MenuStyled = styled.div`
display:flex;
/* justify-content:center; */
 margin-left:50px; 

@media screen and (max-width: 500px) { 
    
    `

export function Menu({setOpenFood}) {

    return <MenuStyled>
        {Object.entries(foods).map(([sectionName, foods]) => (
            <>
            {/* <h1>{sectionName}</h1> */}
        <FoodGrid>
        <h3>Meny</h3>
            <FoodWrapper>
        {foods.map(food => (
            <Food>
               <img src={food.img} className="item" />
                <FoodLabel>
                <h1>{food.name}</h1>
                <p>{food.description}</p>
                <h2>{formatPrice(food.price)}</h2>
                <MyButton onClick={() => {
                    setOpenFood(food);
                }}>
                    <p className="buttonText">Lägg till</p>
                </MyButton>
                
                </FoodLabel>
                
                </Food>
                
        ))}
        <div className="empty-div"></div>
        <div className="empty-div"></div>
        </FoodWrapper>
        </FoodGrid>
        </>
                
                ))}
    </MenuStyled>
}