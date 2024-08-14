let score = "21";

// console.log(typeof score);
// console.log(typeof score);
// conversion of string into number
const scoreInNumber = Number(score);

// console.log(typeof scoreInNumber);

// console.log(scoreInNumber);

// "123" => 33
//"33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;

//conversion into boolean

let booleanIsLoogedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoogedIn);

// 1 => true; 0=> false
//"abc" => true;
//"" => false

let num = 323;
//Conversion in to string from number
let numInString = String(num);
// console.log(typeof numInString);
// console.log(numInString);


// ************************  Operation *********************

 let value =23;
 let negValue = -value;
//  console.log(negValue);


// console.log(2+5);
// console.log(2-5);
// console.log(2**5);
// console.log(2*5);
// console.log(2/5);
// console.log(2%5);



 //concatination of strings
let str1 = "Junaid"
let str2 = " Shaukat";

let str3 = str1 + str2
// console.log(str3);


//string -> number confusion

// for more details visit https://tc39.es/ecma262/#sec-normative-references

console.log("1"+2); //12
console.log(1+"2"); // 12
console.log("1"+"2"); // 12
console.log("1"+2+2); // 122 because the first element is string
console.log(2+2+"1"); // 41  because the first element is number

console.log(true)
console.log(+true)
console.log(+"")

//prefix and postfix increment and decrement

let inc = 2
inc++;
console.log(inc);
++inc;
console.log(inc);



