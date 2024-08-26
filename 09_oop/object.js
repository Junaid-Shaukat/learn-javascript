//  Everthing in the JS is object

function func(nums) {
  return nums * 5;
}
func.power = 5;


console.log(func(3));
console.log(func.power);
console.log(func.prototype);


function createUser(username,score)
{
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    console.log(`Name is ${this.username}`);
    
}
// without new keyword we get error
const a = new createUser("abc",26)
const b = new createUser("abcd",26)

a.printMe();

// ------------------ Complete Details of 'new' keyword ------------------


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


/*


## Theoretical Details of the `new` Keyword in JavaScript

The `new` keyword in JavaScript is used to create instances of objects that have a particular constructor function. Here's a detailed breakdown of how it works:

### 1. Object Creation
- When you use `new`, JavaScript creates a new object. This object inherits from the constructor function's prototype.

### 2. Constructor Function Execution
- The constructor function is called with the `this` context bound to the newly created object. This means that inside the constructor, `this` refers to the new object being created.

### 3. Property and Method Assignment
- The constructor function can assign properties and methods to `this`. These properties and methods become part of the newly created object.

### 4. Prototype Inheritance
- The new object’s prototype is set to the constructor function’s `prototype` property. This allows the new object to access methods and properties defined on the constructor’s prototype.

### 5. Implicit Return
- If the constructor function does not explicitly return an object, the newly created object is implicitly returned. If a non-primitive value is returned explicitly (an object or array), that value will be returned instead of the newly created object.

### Example

Here's a simple example to illustrate these concepts:

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// Creating a new instance using `new`
const alice = new Person('Alice', 30);

// Accessing properties and methods
console.log(alice.name); // Alice
console.log(alice.age);  // 30
alice.greet();           // Hello, my name is Alice

*/