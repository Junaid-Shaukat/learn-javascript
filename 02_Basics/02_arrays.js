const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]


// marvel_heros.push(dc_heros)
//  console.log(marvel_heros);
 

//concat retrun the new array 
const AllHeros = marvel_heros.concat(dc_heros)
console.log(AllHeros);

// spread operater is best then concatination
const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros);

// flat -> gives new array with all elements of sub array of the array
const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const newArr1 = arr1.flat(Infinity)

console.log(newArr1);



console.log(Array.isArray("Junaid")); // check if it array or not
console.log(Array.from("Junaid"));// convert string into array
console.log(Array.from({name:"junaid"}));

let score1 = 100
let score2 = 200
let score3 = 300
// gives a new array form all numbers datatypes or sets
console.log(Array.of(score1,score2,score3))
