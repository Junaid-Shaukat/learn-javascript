const appUser = new Object(); // Singleton object -> gives empty object

const myAppUser = {}; // non-singleton object

// Adding values to object
myAppUser.id="322sa"
myAppUser.name="User 1"
myAppUser.isloggedIn = false

// console.log(myAppUser); -> print object


// Nesting of the objects
const regularUser = {
    email : "abc@google.com",
    fullname : {
        firstname : "Junaid",
        userfullname :{
        lastname : "Shaukat",
        },
    }
}
// Printing of the nested objects

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname);
// console.log(regularUser.fullname.userfullname);
 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) // merging the objects

// Bet to use the spread operator for merging 
const obj3 = {...obj1,...obj2}
console.log(obj3);

// Methods //

console.log(Object.keys(regularUser)); // gives the key in array
console.log(Object.values(regularUser)); // gives the values in array
console.log(Object.entries(regularUser)); 
console.log(regularUser.hasOwnProperty('isLoggeIn')); // Check the if the object the project has property or key value

