import React from 'react';
import styled from 'styled-components';
import { OrderContent, OrderContainer, OrderTitle, Wizard, WizardItems } from "../Order/Order";
import ProgressBar from "./progress-bar.component";
import { Dialog, DialogShadow, DialogFooter } from '../FoodDialog/FoodDialog';
import { AiFillShopping } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { GoCreditCard } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { InputWrapper } from '../HomeDialog';
import { FaLongArrowAltRight, FaCcVisa } from 'react-icons/fa';
import { MyButton } from '../Menu/FoodGrid';
import { usePayDialog } from '../Hooks/usePayDialog';
import { Wrap } from './SummaryDialog';
import { Exit, Button } from '../FoodDialog/FoodDialog';
import { IoIosArrowBack, IoIosCloseCircle } from 'react-icons/io'



export const YourName = styled.input`
background:rgba(145, 219, 183, 0.3);
color:#4e4e4e;
padding:20px;
padding-top: 1em;
padding-bottom: 1em;
border:none;
border-radius:5px;
outline:none;
width:83%;
text-indent:15px;
`


export const YourAdress = styled.input`
background:rgba(145, 219, 183, 0.3);
color:#4e4e4e;
padding:20px;
padding-top: 1em;
padding-bottom: 1em;
border:none;
border-radius:5px;
outline:none;
width:83%;
text-indent:15px;
`
const Separator = styled.div`
margin-top:30px;
`

const Payment = styled.div`
display:flex;
flex-direction:row;
align-items:center;
cursor:pointer;
border-top: 1px solid #e0e0de;
border-bottom: 1px solid #e0e0de;
padding-top: 10px;
padding-bottom: 10px;
margin-top:12px;

`

const testData = [
  { bgcolor: "#91DBB7", completed: 100 },
];

export function PayDialog({ openAdressDialog,
  setOpenAdressDialog,
  setOrders,
  loggedIn,
  displayName,
  openPayDialog,
  setOpenPayDialog,
  openSummaryDialog,
  setOpenSummaryDialog }) {

  const [adress, setAdress] = useLocalStorage('adress', 'Ange din adress');
  const [name, setName] = useLocalStorage('namn', 'Skriv ditt namn');

  function close() {
    setOpenPayDialog();
  }
  if (!openPayDialog) return null;


  return openPayDialog ? <>
    <DialogShadow />
    <Dialog>
      <OrderContent>
        <Exit>
          <IoIosArrowBack onClick={() => {
            close();
            setOpenAdressDialog(true);
          }} tyle={{width:'20px', height:'20px'}}/>
          <IoIosCloseCircle onClick={close} style={{color:'#DB91AD'}}/>
        </Exit>
        <OrderContainer >
          <OrderTitle><h1>Betalning</h1></OrderTitle>
          <Wizard>
            <WizardItems>

              <AiFillShopping style={{ width: '25px', height: '25px' }} />
              <MdLocationOn style={{ width: '25px', height: '25px' }} />
              <GoCreditCard style={{ width: '25px', height: '25px' }} />

            </WizardItems>
            {testData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </Wizard>
        </OrderContainer>

        <OrderContainer>
          <span className="bold">Betalningsmetod</span>
          <Payment onClick={() => {
            close();
            setOpenSummaryDialog(true);
          }}>
            <FaCcVisa style={{ width: '25px', height: '25px', marginRight: '8px', color: '#1a1e71' }} />
            <p>Betala med kort</p>
          </Payment>

        </OrderContainer>
      </OrderContent>

    </Dialog>
  </> : <div />
}



{/* <span className="bold">Namn</span>
<Name defaultValue={loggedIn ? `${loggedIn.displayName}.` : ""}  type="text" />
<span className="bold">Adress</span>
<Name defaultValue="Adress" type="text" /> */}