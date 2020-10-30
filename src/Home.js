import React from 'react'
import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';
import { useLocalStorage } from './Hooks/useLocalStorage';
import { Link } from 'react-router-dom';




const BodyWrapper = styled.div`
background-color:rgba(243, 246, 246, 0.5);
bacgkround-size:contain;
background-position:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
/* margin:0;
padding:0; */
/* height:100vh; */
`
const Wrapper=styled.div`

background-image:url('/img/homeImgO.png');

/* margin-top:-60px; */
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

/* @media screen and (max-width: 500px) { 
    height:-webkit-fill-available
    } */

`

const ContentWrap=styled.div`
display:flex;
flex-direction:column;
margin-top:-60px;
justify-content:center;
align-items:center;
`

const BigLogo=styled.div`
justify-content:center;
`

export const InputWrapper=styled.div`
position:relative;`

export const Adress = styled.input`
background:rgba(145, 219, 183, 0.3);
color:#222222;
padding:20px;
padding-top: 1em;
padding-bottom: 1em;
border:none;
border-radius:5px;
outline:none;
min-width:250px;
text-indent:15px;

   @media screen and (max-width: 500px) { 
      font-size:14px;
      
     }
`
    

export function Home({key, defaultValue}) {
    const [adress, setAdress] = useLocalStorage('adress');

    const something=(event)=> {
        if (event.keyCode === 13) {
            window.scrollBy(0, 704);
            
        }}

    return <>
<BodyWrapper>
    <Wrapper>
        <ContentWrap>
    <BigLogo>
    <img src="/img/LogoP.png" alt="logo" className="biglogo" />
    </BigLogo>
    <InputWrapper>
    <Adress value={adress}
    placeholder='Ange adress'
    onChange={e => {
        setAdress(e.target.value);
    }} 
    onKeyDown={(e) => something(e)}
    type="text"
    />
    <MdLocationOn style={{ width: '20px', height: '20px', 
    position:'absolute', top:'10px', left:'7px'}} />
    </InputWrapper>
   
    </ContentWrap>
    </Wrapper>
</BodyWrapper>
    </>
}

export default Home;