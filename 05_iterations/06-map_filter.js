// const coding = ["js","typscript",'ruby',"cpp",'java']
// Problem with for each loop

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item // gives undefined -> not return any value
// })

// console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter
// filter -> also accept the callback

// const newNums = nums.filter((num)=> num>4)
// console.log(newNums);

// when we add the {} scope we have to use the return keyword
// if we use the () we dont need the return keyword to return the value

// const newNums = nums.filter((num)=>( num>4))
// console.log(newNums);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    edition: "1st Edition",
    date: 1993,
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    edition: "2nd Edition",
    date: 1923,
  },
  {
    title: "Book Three",
    genre: "Science",
    edition: "1st Edition",
    date: 1998,
  },
  {
    title: "Book Four",
    genre: "History",
    edition: "3rd Edition",
    date: 2000,
  },
  {
    title: "Book Five",
    genre: "Fantasy",
    edition: "2nd Edition",
    date: 1923,
  },
];
// filtering the books
let userBooks = books
// userBooks = books.filter((book) => book.genre === "History");
//   console.log(userBooks);

userBooks = userBooks.filter((book) => book.date > 1900);

console.log(userBooks);

