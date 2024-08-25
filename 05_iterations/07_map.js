const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The `map` method accepts a callback function that is applied to each element in the array.
// If you use curly braces `{}`, you need to include a `return` statement in the callback function.

// Example using `map` without curly braces:
// const newNums = nums.map((num) => num + 10);
// console.log(newNums); // Outputs: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining Methods:
// JavaScript allows chaining of array methods, which means you can apply multiple methods in succession.
// For example, you can chain `map`, `filter`, `reduce`, and other array methods.
// You can chain multiple methods, even up to 100 or more, without any errors.

const newNums = nums
  .map((num) => num * 10) // Multiplies each element by 10
  .map((num) => num + 1)  // Adds 1 to each element from the previous step (results: 11, 21, 31, ...)
  .filter((num) => num < 50); // Filters out elements that are 50 or greater

console.log(newNums); // Outputs: [11, 21, 31, 41]
