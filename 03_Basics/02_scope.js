// {} is the scope

//Global
let a = 459;

//block scope
if (true) {
  let a = 10; //
  const b = 20;
  // console.log("Inner -> ", a);

  // var c = 30
}

// console.log(a);//error
// console.log(b);//error
// console.log(c);// print 30

// console.log("Outer -> ", a);

// Global scope in browser is other then the scope in node

//   Nested Scope   //

function one() {
  const username = "Junaid";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  // console.log(website); -> website is not accesable because it is the local variable of two

  two();
}

// one() -> call of function one

if (true) {
  const username = "Junaid";
  if (username === "Junaid") {
    const website = "Google";
    console.log(username + website);
  }

  // console.log(website);
}

// console.log(username); error because the username is in the local if block scope

// ++++++++++++++++++++++  Intresting  +++++++++++++++

console.log(addone(3));
function addone(num) {
  return num + 1;
}

console.log(addTwo(3)); // gives error because the function is in the variable
const addTwo = function (num) {
  return num + 2;
};
