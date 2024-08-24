const userEmail = "j@headstart.ai"

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}

//          falsy values       //

// 0 , -0, BigInt 0n, "", null, undefined, NaN

//          Truthy values       //

//  "0", 'false', " ", [], {}, function(){} 
// any value in string even space is alos truthy


const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
    
}

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true



// Nullish coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 -> 5
// val1 = null ?? // 10 -> 10

// val1 = undefined ?? 15; -> 15

// val1 = null ?? 10 ?? 25 -> 10


//  Terniary Operator   //

// condition ? true : false

const num = 5;

num <=4 ? console.log("less then 4") : console.log("greater then 4");




console.log(val1);
