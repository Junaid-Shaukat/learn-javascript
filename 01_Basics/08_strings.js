const name = "Junaid";
const count = 3;
console.log(name + count + " value"); //This is the outdated method of concatination

console.log(`Hello my name is ${name} and count is ${count}`); // The is the best way to write and the back ticks and other synatx is called template literals

const gameName = new String("gta 5"); // this make the new object

console.log(gameName[1]); //index
console.log(gameName.__proto__); // all method can view in the browser console

console.log(gameName.length);
console.log(gameName.toUpperCase()); // to upper case the string
console.log(gameName.charAt(2)); // to view the characte at index

console.log(gameName.indexOf("t"));

// slice
const anotherString = gameName.slice(-3, 4);
// substring
const anotherString1 = gameName.substring(0, 4);

//trim removes white spaces
const newString = "     junaid    ";
console.log(newString.trim());



const url = "https://abc.com/First%20last"

console.log(url.replace('%20','-'));

console.log(url.includes('myname')); // false

let str = "this-is-a-split-method-of-string"
//split
console.log(str.split('-'));
