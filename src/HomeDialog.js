import React, { useContext } from "react";
import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';
import { AddressContext } from "./AddressContext";
import { DialogShadow } from './FoodDialog/FoodDialog';
import { FcGoogle } from 'react-icons/fc';


export const Dialog = styled.div`
display:flex;
flex-direction:column;
width:1000px;
background-color:white;
position:fixed;
border-radius:5px;
top:75px;
z-index:5;
min-height: calc(100% - 100px);
max-height: calc(100% - 100px);
left: calc(50% - 500px);
margin-top:0;
background-image:url('/img/homeImgO.png');


@media screen and (max-width: 500px) { 
    display:flex;
    width:100vw;
    left:0%;
    min-height:-webkit-fill-available;
    max-height:-webkit-fill-available;
    top:0px;
    }
`

const Wrapper = styled.div`
background:rgba(145, 219, 183, 0.3);
bacgkround-size:contain;
background-position:center;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
height:100vh;


`

const ContentWrap = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center; 
height:100%;
height:75vh;
margin-top:-30px;

@media screen and (max-width: 500px) { 
 flex-direction:column;
 margin-top:-80px;
}

`

const BigLogo = styled.div`
justify-content:center;
`

export const InputWrapper = styled.div`
position:relative;`

export const Adress = styled.input`
/* background:rgba(145, 219, 183, 0.3); */
background-color:#91dbb7;
color:#222222;
padding:20px;
padding-top: 1em;
padding-bottom: 1em;
border:none;
border-radius:5px;
outline:none;
min-width:250px;
margin-left:-12px;
text-indent:15px;
::placeholder {
    color:#222222;
}
&:focus::placeholder {
    color:transparent;
}

   @media screen and (max-width: 500px) { 
      font-size:14px;
      
     }
`
const RowWrapper = styled.div`
display:flex;
flex-direction:row;

@media screen and (max-width: 500px) { 
    font-size:14px;
    flex-direction:column;
   }

`

const Button = styled.button`
background-color:#313131;
color:rgb(145, 219, 183);
border-radius:5px;
margin-left:5px;
font-size:14px;
padding:10px;
text-align:center;
display:flex;
flex-direction:row;
align-items:center;
outline:none;
border:none;
cursor:pointer;

 @media screen and (max-width: 500px) { 
    margin:0px;
    width:50%;
    justify-content:center;
    align-self:center;
    margin-top:30px;
    } 

`

export const GoogleButton = styled.div`
cursor:pointer;
background:white;
display:flex;
flex-direction:row;
font-family:'Roboto';
font-weight:500;
font-size:14px;
color: #888;
width:196px;
box-shadow: 1px 1px 1px grey;
border:none;
border-radius:5px;
align-items:center;
padding: 10px;
padding-left: 12px;
padding-right: 12px;
margin-top:-50px;

`

export function HomeDialog({ openHomeDialog, setOpenHomeDialog, login, loggedIn }) {
    const { adress, setAdress } = useContext(AddressContext);

    function close() {
        setOpenHomeDialog(false);
    }
    if (!openHomeDialog) return null;

    const something = (event) => {
        if (event.keyCode === 13) {
            close();
        }
    }



    return openHomeDialog ? <>
        <DialogShadow />

        <Dialog>
            <Wrapper>
                <ContentWrap>
                    <BigLogo>
                        <img src="/img/LogoP.png" alt="logo" className="biglogo" />
                    </BigLogo>
                    <RowWrapper>
                        <InputWrapper>
                            <Adress value={adress}
                                onfocus={(e) => e.target.value = ""}
                                placeholder='Ange din adress'
                                onChange={e => {
                                    setAdress(e.target.value);
                                }}
                                onKeyDown={(e) => something(e)}
                                type="text"
                            />
                            <MdLocationOn style={{
                                width: '20px', height: '20px',
                                position: 'absolute', top: '10px', left: '1px'
                            }} />
                        </InputWrapper>
                        <Button onClick={close}>Hitta soppor</Button>
                    </RowWrapper>
                </ContentWrap>
                <GoogleButton onClick={() => {
                    login();
                    close();
                }}><FcGoogle style={{ width: '25px', height: '25px', marginRight: '20px' }} />Logga in med Google</GoogleButton>
            </Wrapper>
        </Dialog>

    </> : <div />



}

export default HomeDialog;