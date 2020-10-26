
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
