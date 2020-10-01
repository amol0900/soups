import styled from 'styled-components';

export const FoodGrid = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
`
export const Food = styled.div`
box-sizing:border-box;
width:240px;
height:520px;
padding:10px;
margin-bottom:10px;
margin-left:10px;
background-image: ${({ img }) => `url(${img});`} 
background-position:center;
background-size:cover;
`