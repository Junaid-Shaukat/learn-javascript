//  reduce method is used to reduce the value of the array to a single one

const myNums = [1,2,3,4]
/*
reduce value also accept the callback 
it also have an accumulator 
*/
const total = myNums.reduce((acc,currval) => {
    console.log(`acc: ${acc} and current Value : ${currval}`);
    
   return  acc+currval
},0 // this value assigns to the accmulator
)

// console.log(total);


const shoppingCart = [
    {
        item:"js course",
        price:399
    },
    {
        item:"c++ course",
        price:1099
    },
    {
        item:"java course",
        price:299
    },
    {
        item:"c# course",
        price:599
    },
    {
        item:"python course",
        price:199
    },
]


const price = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(price);
