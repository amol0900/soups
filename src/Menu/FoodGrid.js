import styled from 'styled-components';

export const FoodGrid = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:890px;
height:auto;
`

export const FoodWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
margin-top:20px;

 @media screen and (max-width: 500px) { 
    justify-content:center;
    }
    `

export const Food = styled.div`
display:flex;
flex-direction:column;
box-sizing: border-box;
align-items:center;
width:280px;
border-radius:2px;
padding:20px;
 padding-top:15px; 
/* margin-top:30px; */
margin-bottom:30px;
background-color:white;


@media screen and (max-width: 500px) { 
 width: 330px; 
}
`

export const FoodLabel = styled.div`
margin-top:15px;
box-sizing: border-box;
`

export const MyButton = styled.div`
display:flex;
background:rgba(145, 219, 183, 0.3);
color:#222222; !important;
padding:8px;
font-size:11px;
justify-content:center; 
cursor:pointer;
&:hover {
    background:rgba(145, 219, 183, 0.7);
    
    };
  }
`