import styled from 'styled-components';
import { buttonColor } from '../Styles/colors';


export const FoodGrid = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
width:850px;
`

export const FoodWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;

`
export const Food = styled.div`
display:flex;
box-sizing:border-box;
width:270px;
height:570px;
margin-bottom:30px;
background-image: ${({ img }) => `url(${img});`} 
background-position:center;
background-size:cover;
background-repeat:no-repeat;

@media screen and (max-width: 500px) { min-height: -webkit-fill-available;
width: 100vw;
/* margin-left:0;
margin-right:0;  */
background-size:cover;}
`

export const FoodLabel = styled.div`
flex-direction:column;
align-self:flex-end;
background: /* rgba(255,255,255, 0.3) */ none;
background-size:cover;
padding:15px;
width:100%;

`

export const MyButton = styled.div`
display:flex;
background-color: ${buttonColor}; 
color:white;
padding:10px;
width:90%;
font-size:11px;
/* align-self:center; */
justify-content:center; 
`