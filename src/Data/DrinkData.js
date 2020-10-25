export function formatPrice(price){
    return new Intl.NumberFormat('sv-SE', { style:'currency', currency:'SEK'}
    ).format(price);
}

export const drinks = [

    {
        name: 'San Pellegrino',
        price: '25'
        
    },
    {
        name: 'Citronvatten',
        price: '10'

    },
    {
        name: 'Cola Zero',
        price: '25'
        
    }
];