import React, { useContext } from "react";
import styled from 'styled-components';
import { OrderContent, OrderContainer, OrderTitle, Wizard, WizardItems } from "../Order/Order";
import ProgressBar from "./progress-bar.component";
import { Dialog, DialogShadow, DialogFooter } from '../FoodDialog/FoodDialog';
import { AiFillShopping } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { GoCreditCard } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { InputWrapper } from '../HomeDialog';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MyButton } from '../Menu/FoodGrid';
import { AddressContext } from "../AddressContext";
import { Exit } from '../FoodDialog/FoodDialog';
import { IoIosArrowBack, IoIosCloseCircle } from 'react-icons/io'


export const YourName = styled.input`
background:rgba(145, 219, 183, 0.3);
padding:20px;
padding-top: 1em;
padding-bottom: 1em;
border:none;
border-radius:5px;
outline:none;
width:83%;
text-indent:15px;
::placeholder {
  color:#222222;
}
&:focus::placeholder {
  color:transparent;
}
`

export const YourAdress = styled.input`
background:rgba(145, 219, 183, 0.3);
padding:20px;
padding-top: 1em;
padding-bottom: 1em;
border:none;
border-radius:5px;
outline:none;
width:83%;
text-indent:15px;
::placeholder {
  color:#222222;
}
&:focus::placeholder {
  color:transparent;
}
`
const Separator = styled.div`
margin-top:30px;
`


const testData = [
  { bgcolor: "#91DBB7", completed: 66 },
];

export function AdressDialog({ openAdressDialog,
  setOpenAdressDialog,
  setOpenCart,
  loggedIn,
  setOpenPayDialog }) {

  const { adress, setAdress, name, setName } = useContext(AddressContext);

  function close() {
    setOpenAdressDialog();
  }
  if (!openAdressDialog) return null;


  return openAdressDialog ? <>
    <DialogShadow />
    <Dialog>
      <OrderContent >
        <Exit>
          <IoIosArrowBack onClick={() => {
            close();
            setOpenCart(true);
          }} style={{ width: '20px', height: '20px' }} />
          <IoIosCloseCircle onClick={close} style={{ color: '#DB91AD' }} />
        </Exit>
        <OrderContainer >
          <OrderTitle><h1>Adress</h1></OrderTitle>
          <Wizard>
            <WizardItems>

              <AiFillShopping style={{ width: '25px', height: '25px' }} />
              <MdLocationOn style={{ width: '25px', height: '25px' }} />
              <GoCreditCard style={{ width: '25px', height: '25px', color: '#9E9E9E' }} />

            </WizardItems>
            {testData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </Wizard>
        </OrderContainer>

        <OrderContainer>
          <span className="bold">Namn</span>
          <InputWrapper>
            <YourName value={loggedIn ? `${loggedIn.displayName}` : `${name}`}
              placeholder="Skriv ditt namn"
              onChange={e => {
                setName(e.target.value);
              }}
              type="text"
            />
            <FaUserCircle style={{
              width: '20px', height: '20px',
              position: 'absolute', top: '10px', left: '7px'
            }} />
          </InputWrapper>

          <Separator />
          <span className="bold">Adress</span>
          <InputWrapper>
            <YourAdress value={adress}
              placeholder='Ange din adress'
              onChange={e => {
                setAdress(e.target.value);
              }}
              type="text"
            />
            <MdLocationOn style={{
              width: '20px', height: '20px',
              position: 'absolute', top: '10px', left: '7px'
            }} />
          </InputWrapper>
        </OrderContainer>

      </OrderContent>
      <DialogFooter>
        <MyButton onClick={() => {
          close();
          setOpenPayDialog(true);
        }}>
          <p className="buttonText">Betalning</p> &nbsp;
                             <FaLongArrowAltRight style={{ color: '#242424', width: '20px', height: '20px' }} /></MyButton>
      </DialogFooter>
    </Dialog>
  </> : <div />
}

