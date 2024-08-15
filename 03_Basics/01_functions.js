function sayName() {
  console.log("J");
  console.log("U");
  console.log("N");
  console.log("A");
  console.log("I");
  console.log("D");
}

// sayName -> its is the refrence
// sayName(); // This is the execution

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(3, 45);// 3 and 45 are the arguments
// parameters are in the function definition and arguments are declared at the function call


function addTwoNumbers(number1, number2) {
   let result = number1 + number2;
   return result;
  }
const result = addTwoNumbers(3,5);
//   console.log(result);


function loginUserMessage(username ){
    if(!username){
        // console.log("Please enter a username");
        return;
        
    }
return `${username} just logged in`
}

// console.log(loginUserMessage("junaid"));
// console.log(loginUserMessage());

  

function calculatePrice(...num1){
    return num1
}

// console.log(calculatePrice(4,6,8));

// ... is called spread operator and rest operator depends upon its use case

const user = {
    username : "junaid",
    id : 2133
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and the id is ${anyObj.id}`);
    
}
// handleObject(user);
 handleObject({
    username:"a",
    id:3212331
 });


 const newArr = [200,300,500,600,400]

 function returnArrayVal(getArray){
    return getArray[1]
 }

 console.log(returnArrayVal(newArr));
 