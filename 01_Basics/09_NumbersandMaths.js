// It can be string or number
const score = 343
// console.log(score);


// It is must Number and console also show the number
const balance = new Number(100)
// console.log(balance);

//Convert number to string
// console.log(balance.toString());
// console.log(balance.toString().length);

// To pricise the value
// console.log(balance.toFixed(1));

const otherNumber = 23.4232
// console.log(otherNumber.toPrecision(4))

// For view the standard number cal.
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-PK'))



// ++++++++++++++++++++  Maths +++++++++++++++++

console.log(Math);// Contains all the value 
console.log(Math.abs(-4));// convet negative numbers to positive

console.log(Math.round(5.6));// roundof the number
console.log(Math.ceil(4.1));// round of to 4

console.log(Math.floor(4.7));// give the minimum value

console.log(Math.min(3,2,6,8))//gives min number

console.log(Math.max(3,2,6,8))//gives maximum number

console.log(Math.random()); //Gives random values from 0 to 1

console.log(Math.random()*10 + 1); // confirm that the value must be greater than 1

console.log(Math.floor(Math.random()*10)+ 1); // give one random number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+ min);
