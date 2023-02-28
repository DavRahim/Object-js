// create object using  object literals

const player = {};
player.name = 'small Nirob';
player.specialty = 'batsman';
// console.log(player)
player.bat = function (){
    // console.log('swing your bat')
}
// console.log(player);
// player.bat()

const student = {
 name: 'Pandy', 
job: 'Boerker', 
ball: function(){
    // console.log('thorow the ball')
},
salary: 10000
}

// 2. object constructor
const person = new Object();
// console.log(person);

//3. object create method;
const item = Object.create(null);
const atel = Object.create(student);

// console.log(atel.name);
// console.log(atel.friend)


//4. class

class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age
    }
}

const person1 = new Person(56);
// console.log(person1);

//5. function

function car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new car('elon', 32);
console.log(tesla)

