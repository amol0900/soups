/* import {useState} from 'react';

export function useBreads(defaultBread) {
    const [breads, setBreads ] = useState(
    defaultBread || getDefaultBreads()
     );

function checkBread(index){
    const newBreads = [...breads];
    newBreads[index].checked = !newBreads[index].checked;
    setBread(newBreads)
}

return {
    checkBread,
    breads
    };
}

const breadList = [
    'Surdegsbröd',
    'Mörkt bröd',
    'Foccacia'
];

function getDefaultBreads(){
    return breadList.map(bread = ({
        name: bread,
        checked:false
    }));

}

 */

import { useState } from "react";

export function useBreads(defaultBread) {
  const [breads, setBreads] = useState(
    defaultBread || getDefaultBreads()
  );

  function checkBread(index) {
    const newBreads = [...breads];
    newBreads[index].checked = !newBreads[index].checked;
    setBreads(newBreads);
  }

  return {
    checkBread,
    breads
  };
}

const breadsList = [
    'Surdegsbröd',
    'Mörkt bröd',
    'Foccacia'
];

function getDefaultBreads() {
  return breadsList.map(bread => ({
    name: bread,
    checked: false
  }));
}
