export function formatPrice(price){
    return new Intl.NumberFormat('sv-SE', { style:'currency', currency:'SEK'}
    ).format(price);
}


export const foodItems = [
{
    name: 'Roasted tomato & quinoa',
    description:'Tomatsoppa med quinoa, vitlök och lök toppas med färsk basilika och krispiga krutonger.',
    price: 69,
    img: '/img/1x.jpg',
    minImg: '/img/1m.jpg',
    section:'soup'
},

{
    name: 'Sweet potato & coconut',
    description:'Sötpotatis, kokosnötmjölk, jordnötssmör toppas med jordnötter och koriander.',
    price:79,
    img: '/img/2x.jpg',
    minImg: '/img/2m.jpg',
    section:'soup'
},

{
    name: 'Green goddess soup',
    description: 'Grönkål. spenat, ärtor, broccoli, potatis, vitlök toppat med pumpakärnor och havregrädde.',
    price: 99,
    img: '/img/3x.jpg',
    minImg: '/img/3m.jpg',
    section:'soup'
},

{
    name: 'Roast carrot & coriander',
    description:'Morötter, koriander, lök, och ingefära toppat med rostad lök och creme fraiche',
    price: 85,
    img: '/img/4x.jpg',
    minImg: '/img/4m.jpg',
    section:'soup'
},

{
    name: 'Curried butternut squash',
    description:'Butternutpumpa, curry, ingefära, koriander, och linser toppat med lime.',
    price: 69,
    img: '/img/5x.jpg',
    minImg: '/img/5m.jpg',
    section:'soup'
},

{
    name: 'Thai coconut noodle',
    description:'Röd curry, kokosnötmjölk, risnudlar, paprika toppat med koriander och sesamfrön.',
    price: 89,
    img: '/img/6x.jpg',
    minImg: '/img/5m.jpg',
    section:'soup'
}
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
      res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
  }, {});