// console.log(2<3);
// console.log(2>1);
// console.log(2<=3);
// console.log(4>=3);
// console.log(3!=4);

//String automatically converted into Numbers

// console.log("2">1);
// console.log("02">1);
// console.log("2"<1);


// confusion in null 
console.log(null>0)
console.log(null==0)
console.log(null<0)
console.log(null<=0)
console.log(null>=0)
//The reson is that an equality check == and comarisons > < >= <= work differenly.
//Comparisons conver null to a number, treatin it as 0.
//That's why null>=0 is true and null>0 is false


console.log(undefined>0)
console.log(undefined<0)
console.log(undefined==0)

// Strict check  ===

console.log("2"==2) // true
console.log("2"===2) // false 