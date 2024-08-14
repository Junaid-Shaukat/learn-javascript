// https://tc39.es/proposal-temporal/docs/

let myDate = new Date();
console.log(myDate.toString());//retruns time and date
console.log(myDate.toDateString());//return only date
console.log(myDate.toLocaleString());//A Locale object represents a specific geographical, political, or cultural region. 


let myCreatedDate = new Date(2025,0,14)//return date according to the set 
// console.log(myCreatedDate.toDateString());

let myDate2 = new Date("08-14-2024")
console.log(myDate2.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myDate2.getTime());

console.log(Date.now());// Give the current value in miliseconds

console.log(Math.floor(Date.now()/1000));//convert it into seconds


let Date2 = new Date();
console.log(Date2.getDay());
console.log(Date2.getMonth()+1)


console.log(Date2.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
}))