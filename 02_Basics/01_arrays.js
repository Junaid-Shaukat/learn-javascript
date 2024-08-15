// Arrays -> each element in array is element
// Array can be different dataTypes
// JS arrays are resizable -> Dymanically

//Methods of Declaration of Array
let arr = [2, 3, 5, 7, 4];
const myHeros = ["a", "b"];
const arr1 = new Array(1, 2, 3, 4);

// Shallow & Deep copies

//    Array Mehods   //

arr.push(9);
arr.push(1); // add element to array
console.log(arr);

arr.pop(); // Remove Last element
arr.unshift(9); // adding element to first
arr.shift(); // remove the first element

console.log(arr.indexOf(2)); // gives the index

const newArr = arr.join(); // converts array in string

console.log(arr);
console.log(newArr);

// slice , splice
// important for interview
// splice -> changes the original array

// for more methods and other array related visit mdn docs
