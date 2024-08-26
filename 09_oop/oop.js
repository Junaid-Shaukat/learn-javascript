// Object literals
const user = {
  username: "junaid",
  loginCount: 3,
  signedIn: true,
  getUserDetails: function () {
    // console.log("User Found");
    // console.log(`UserName: ${this.username}`)
    // console.log(this);// -> current context
  },
  // The this keyword behaves differently in regular functions compared to arrow functions.we get undefined when use the arrow function

  // getUserDetails: () => console.log(`UserName: ${this.username}`)
};
// console.log(user["getUserDetails"]()); // access through square brackets

// console.log(user.getUserDetails());

// console.log(this); -> gives the empty object and can changed. In browser it gives the window object

// new keyword is the constructor function
// const promiseOne = new Promise()
// const date = new Date()

function user1(username, loginCount, IsLoggedIn) {
  // left one is the variable
  this.username = username;
  this.loginCount = loginCount;
  this.IsLoggedIn = IsLoggedIn;
  // not need to return but best to write
  // return this;
}
const a = user1("abc", 23, true);
console.log(a);

// Use 'new' to create an instance of the user1 object
// const userOne = new user1("js", 12, false);
// console.log(userOne); // Output: user1 { username: 'js', loginCount: 12, IsLoggedIn: false }


