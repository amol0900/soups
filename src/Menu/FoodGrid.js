import styled from 'styled-components';
import { buttonColor } from '../Styles/colors';

export const FoodGrid = styled.div`
display:flex;
flex-direction:column;
/* align-items:center; */
width:/* 810px; */1050px;
height:auto;
`

export const FoodWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;

 @media screen and (max-width: 500px) { 
    justify-content:center;
    }
    `

export const Food = styled.div`
display:flex;
flex-direction:column;
box-sizing: border-box;
width:250px;
margin-top:30px;


@media screen and (max-width: 500px) { 
 width: 300px; 
 /* height: 600px; */ 
}
`

export const FoodLabel = styled.div`
margin-top:15px;
box-sizing: border-box;
`

export const MyButton = styled.div`
display:flex;
background-color: ${buttonColor}; 
color:white;
padding:8px;
font-size:11px;
justify-content:center; 
cursor:pointer;
`