const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
}
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle)
// console.log(values);
const pair = Object.entries(bottle)
// console.log(pair)

// Object.seal(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12
// console.log(bottle)

Object.freeze(bottle);
console.log(bottle)

