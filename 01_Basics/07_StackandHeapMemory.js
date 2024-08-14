/*

Stack -> ( Premitive )
Heap ->  ( Non-Premitive )

*/

let firstName = "FName"
let secondName = firstName
firstName="LastName"

console.log(firstName);
console.log(secondName);


let user1 = {
    email:"abc@gmail.com",
    id:"1"
}
// name are in stack and the key value pairs of the objects are in heap
let user2 = user1

user2.email = "123@gmail.com"
//value is changed of both because the object refrence is in heap
console.log(user1.email);
console.log(user2.email);
