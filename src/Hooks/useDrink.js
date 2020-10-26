import { useState } from "react";

export function useDrink(defaultDrink) {
  const [value, setValue] = useState(defaultDrink);

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange
  };
}
