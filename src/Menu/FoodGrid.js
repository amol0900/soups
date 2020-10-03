import styled from 'styled-components';


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
width:260px;
height:540px;
margin-bottom:30px;
background-image: ${({ img }) => `url(${img});`} 
background-position:center;
background-size:cover;
background-repeat:no-repeat;

@media screen and (max-width: 500px) { min-height: -webkit-fill-available;
    width: 100vw;
margin-left:0;
margin-right:0; 
background-size:cover;}
`
export const FoodLabel = styled.div`
display:flex;
flex-direction:column;
align-self:flex-end;
background: rgba(255,255,255, 0.3);
padding:10px;

`