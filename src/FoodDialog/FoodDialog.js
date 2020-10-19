import React from 'react';
import styled from 'styled-components';
import { MyButton} from '../Menu/FoodGrid';

const Dialog = styled.div`
display:flex;
flex-direction:column;
background-color:white;
width:300px;
/* height:2000px; */
position:fixed;
top:75px;
z-index:5;
max-height: calc(100% - 100px);
left: calc(50% - 150px);
margin-top:0;
`
const DialogShadow = styled.div`
position:fixed;
width:100%;
height:100%;
top:0px;
background-color:black;
opacity:0.7;
z-index:4;
`

const DialogBanner = styled.div`
min-height:100px;
${({img}) => `background-image:url(${img});`}
background-position:center;
background-size:cover;

`
const DialogTitle = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
width:100%;
`

const DialogContent = styled.div`
overflow:auto;
min-height:100px;

`

const DialogFooter = styled.div`
box-shadow: 0px 2px 20px 0px grey;
height:60px;

`

export function FoodDialog({openFood, setOpenFood}) {
    function close() {
        setOpenFood();
    }
    if (!openFood) return null;
    return (
        openFood ? (
     <>
     <DialogShadow onClick={close} />
    <Dialog>
        <DialogBanner img={openFood.minImg} />
        <DialogTitle>
            <h4>{openFood.name}</h4>
            <h4><span className="price">{openFood.price}</span></h4>
        </DialogTitle>

        <DialogContent></DialogContent>

        <DialogFooter>
            <MyButton>
                <p className="buttonText">Lägg till</p>
            </MyButton>
        </DialogFooter>
    </Dialog>
    </>
    ) : null
);
}