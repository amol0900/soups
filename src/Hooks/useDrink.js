import { useState } from 'react';

export function useDrink() {
    const [drink, setDrink] = useState ();
    return {
        drink,
        setDrink
    }
}