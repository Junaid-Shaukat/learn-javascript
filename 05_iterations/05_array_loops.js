const coding = ["js", "ruby", "typescript", "cpp", "kotlin"];
// For each loop
// function -> callback
// there is no name of the callback so we pass item and other name as a parameter
coding.forEach(function (item) {
  // console.log(item);
});

// we can also use the arrow function for the call back

coding.forEach((item) => {
  // console.log(item);
});

// we can also define the fuction outside of the For each and pass the refrence in for each loop.
// -> note we dont add () because we have no to executer the function
function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe)

// for each also have other parameters

coding.forEach((item, index, arr) => {
//   console.log(item,index,arr);
});
// array of the object 
const myCoding = [
    {
        name:"javascript",
        file:"js"
    },
    {
        name:"C++",
        file:"cpp"
    },
    {
        name:"Typescript",
        file:"ts"
    },
]


myCoding.forEach((item)=>{
console.log(item.name);// access the name propertie of the array of the oject

})