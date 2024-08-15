// This keyword refers to the current context
const user = {
  username: "junaid",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    // console.log(this);
    
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // the global object in the browser is the global object, In the browser the output of this line is the window object

// function chai(){
//     let username = " Junaid"
//     console.log(this.username);// It only work on the object
    
// }

// chai()



// const func = function(){
//     let username = " Junaid"
//         console.log(this.username)
// }

// Arrow Functions //

const chai = () =>{
    let username = "Junaid"
    console.log(this);
    
}

// chai()


// () => {} //basic arrow func

// const addThree = (num1,num2) => {
//     return num1+num2+3
// }

// console.log(addThree(3,4));

// Impicit return if it has one line 

// const addTwo = (num1,num2) => num1 + num2


// const addTwo = (num1,num2) => (num1 + num2) // If we use the () then there is no need of return 


const addTwo = (num1,num2) => ({
    name : "abc"
}) // retrun objects

// const myArray = [2,3,4,5,6]
// myArray.forEach(()=>())
