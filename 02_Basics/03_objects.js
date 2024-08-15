// singleton -> object with constructors
// Object.create


// object literals 
const mySym = Symbol("key1")

// Creating the object
const user = {
    name:"Junaid",
    "Full Name":"M Junaid",
    [mySym]:"mykey1", //acts as symbol
    age:"20",
    location:"Lahore",
    email:"abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}


//Accessing the object

console.log(user.email);
console.log(user["email"]);
console.log(user["Full Name"]);
console.log(user[mySym]);

// changing the values 
user.email = "123@gmail.com"
// Object.freeze(user) // It freeze the object and does not changes
user.email = "123@microsoft.com"

//Adding the function 

user.greet = function(){
    console.log("Hello user");
}
user.greet = function(){
    console.log(`Hello user ${this.email}`);// this keyword gives access to all key values of the objects
}


console.log(user.greet);// it gives the refrence of function
console.log(user.greet());// it gives the executed function or output