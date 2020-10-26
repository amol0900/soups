
import { useState } from "react";

export function useDrinks(defaultDrink) {
  const [drinks, setDrinks] = useState(
    defaultDrink || getDefaultDrinks()
  );

  function checkDrink(index) {
    const newDrinks = [...drinks];
    newDrinks[index].checked = !newDrinks[index].checked;
    setDrinks(newDrinks);
  }

  return {
    checkDrink,
    drinks
  };
}

const drinksList = [
    'San Pellegrino',
    'Kokosvatten',
    'Cola Zero'
];

function getDefaultDrinks() {
  return drinksList.map(drink => ({
    name: drink,
    price:25,
    checked: false
  }));
}