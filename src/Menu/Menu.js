import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel, FoodWrapper, MyButton} from './FoodGrid';
import {formatPrice} from '../Data/FoodData';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdLocalShipping } from 'react-icons/md';


const MenuStyled = styled.div`
display:flex;
justify-content:center;
background-color:rgb(243,246,246);
 /* margin-left:50px;  */

@media screen and (max-width: 500px) { 
    
    `
const Wrapper=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Delivery=styled.div`
display:flex;
align-items:center;
`
    

export function Menu({setOpenFood}) {

    

    return <MenuStyled>
        {Object.entries(foods).map(([sectionName, foods], index) => (
            <>
            {/* <h1>{sectionName}</h1> */}
        <FoodGrid>
        <h3>Meny</h3>
            <FoodWrapper>
        {foods.map((food, index) => (
            <Food key={index}>
               <img src={food.img} className="item" />
                <FoodLabel>
                <h1>{food.name}</h1>
                <p>{food.description}</p>
            <Wrapper>
                <h2>{formatPrice(food.price)}</h2>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Delivery>
                <MdLocalShipping style={{width:'15px', height:'15px',marginRight:'3px'}}/> <p>39kr</p>
                </Delivery>
                <Delivery>
                <AiOutlineFieldTime style={{width:'15px', height:'15px' /* color:'#91DBB7' */, marginRight:'3px'}}/> <p>25-30min</p>
                </Delivery>
                </Wrapper>
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

export default Menu;