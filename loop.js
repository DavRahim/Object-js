// array loop in javaScript

const numbers = [2, 54, 65, 3, 54];
for(const number of numbers){
    // console.log(number)
}
//for of can not used with objects 
//object loop in javascript;

const bottle = {
    color: 'red',
    price: 50,
    isCleaned: true,
    capacity: 1
}
//  1. first option to loop through an object

const keys = Object.keys(bottle)

// 3 ways to read object properties
// bottle.color
//bottle['color']
//bottle[key]


// for(const key in bottle){
//     console.log(key)
// }

for(const key of keys){
    // console.log(key, bottle[key])
}


//for in loop;
for(const key in bottle){
    const value = bottle[key]
    // console.log(key, bottle[key])
}

//advance

const pair = Object.entries(bottle);
console.log(pair);
for(const[key, value] of Object.entries(bottle)){
    console.log(key, value)
}
