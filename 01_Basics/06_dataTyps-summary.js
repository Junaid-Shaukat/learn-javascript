// In JavaScript there are only two catagoried of data types  (1)  Primitibe    (2) Non- Premitive

// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 25;
const scoreValue = 34.4;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false

const bigNumber = 324243243243432n; //n at last show that it is the big int

// Refrence (Non primitive)

// Array, Objects, Function

const heros = ["hero1", "hero2", "hero3"];

const myObj = {
  name: "Junaid",
  age: 19,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof bigNumber);

// datatype of null
// null -> object

//datatype of functio is object function

// For more

// https://262.ecma-international.org/5.1/#sec-11.4.3
