import React from 'react';
import styled from 'styled-components';
import {OrderContent, OrderContainer, OrderTitle, Wizard, WizardItems} from "../Order/Order";
import ProgressBar from "./progress-bar.component";
import { Dialog, DialogShadow, DialogFooter } from '../FoodDialog/FoodDialog';
import { AiFillShopping } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { GoCreditCard } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { InputWrapper } from '../Home';
import { FaLongArrowAltRight} from 'react-icons/fa';
import { MyButton } from '../Menu/FoodGrid';
import { usePayDialog } from '../Hooks/usePayDialog';



export const YourName = styled.input`
background:rgba(145, 219, 183, 0.3);
color:#222222;
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
color:#222222;
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

/* const WizardItems=styled.div`
display:flex;
justify-content:center;
padding-bottom:20px;
color:#9AB54A;
`; */

const testData = [
  { bgcolor: "#91DBB7", completed: 66 },
];

export function AdressDialog({openAdressDialog, setOpenAdressDialog, setOrders, loggedIn, displayName, openPayDialog, setOpenPayDialog}){
  const [adress, setAdress] = useLocalStorage('adress');
  const [name, setName] = useLocalStorage('namn', 'Skriv ditt namn' );
 
  
  const payDialog = usePayDialog();
  
 

  return  openAdressDialog ? <>
{/* <DialogShadow /> */}
  <Dialog>
    <OrderContent >
<OrderContainer >
          <OrderTitle><h1 style={{ color: '#656565' }}>Adress</h1></OrderTitle>
          <Wizard>
              <WizardItems>
                
              <AiFillShopping style={{ width: '25px', height: '25px'}} />
                <MdLocationOn style={{ width: '25px', height: '25px'}} />
                <GoCreditCard style={{ width: '25px', height: '25px', color:'#9E9E9E' }} />
                
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
          onChange={e => {
              setName(e.target.value);
          }} 
          type="text" 
          />
          <FaUserCircle style={{ width: '20px', height: '20px', 
          position:'absolute', top:'10px', left:'7px'}} />
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
          <MdLocationOn style={{ width: '20px', height: '20px', 
          position:'absolute', top:'10px', left:'7px'}} />
          </InputWrapper>
</OrderContainer>
      </OrderContent>
      <DialogFooter>
                        <MyButton onClick={() => { setOpenPayDialog(true);
                }}>
                            <p className="buttonText">Betalning</p> &nbsp;
                             <FaLongArrowAltRight style={{color:'#242424', width:'20px', height:'20px'}}/></MyButton>
                             </DialogFooter>
      </Dialog>
  </> : <div/>
}



{/* <span className="bold">Namn</span>
<Name defaultValue={loggedIn ? `${loggedIn.displayName}.` : ""}  type="text" />
<span className="bold">Adress</span>
<Name defaultValue="Adress" type="text" /> */}