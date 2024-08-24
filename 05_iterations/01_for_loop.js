// for loop

let array = [1,3,5,4]

// condition -> i < array.length;

for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
        
}


//   Nested Loops

// for (let i = 0;i<=10; i++) {
//     console.log(`Outer loop i = ${i}`);

//     for(let j=0;j<=10;j++){
//         console.log(`Inner Loop value j = ${j} and inner loop i = ${i}`);
        
//     }    
// }


//  break and continue keywords

for (let i = 1; i <= 20; i++) 
    {
        if(i==5){
            console.log(`Detected 5`);
            // break; // terminate the code
            // continue -> skip one step 
        }
console.log(`Value of i is ${i}`);
    
}