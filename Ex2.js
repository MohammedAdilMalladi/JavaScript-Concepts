let adjective = {
    "name1": "Crazy",
    "name2": "Amazing",
    "name3": "Fire"
}

let shop = {
    "shopname1":"Engine",
    "shopname2":"Foods",
    "shopname3": "Garments"
}

let another = {
    "another1": "Bros",
    "another2": "Limited", 
    "another3": "Hub"
}

const randomadjective = adjective[`name${Math.ceil(Math.random() * 3)}`];
const randomshop = shop[`shopname${Math.ceil(Math.random() * 3)}`];
const randomanother = another[`another${Math.ceil(Math.random() * 3)}`];

console.log(`${randomadjective} ${randomshop} ${randomanother}`);

