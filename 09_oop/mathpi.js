// getOwnPropertyDescriptor -> gives the hiden things
// Object.getOwnPropertyDescriptor


// console.log(Math.PI);
// Math.PI = 5 // we cannot change the value of the constant

// For details 
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);


const myNewObj = {
    name:"first",
    email:"first@email.com",
    isLoggedIn:true
}
// for more description and details
console.log(Object.getOwnPropertyDescriptor(myNewObj,"name"));


// for defining the own properties

Object.defineProperty(myNewObj,'name',{
    writable:false,
    enumerable:false

})

console.log(Object.getOwnPropertyDescriptor(myNewObj,"name"));

// the gives error becausr the myNewObj is not irrtrateable

// for (const [key,value] of myNewObj) {
//     console.log(`Key: ${key}, Value: ${value}`);
    
// }

// COrrect Code

for (const [key,value] of Object.entries(myNewObj)) {
    console.log(`Key: ${key}, Value: ${value}`);
    
}