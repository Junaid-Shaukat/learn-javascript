//  for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

//  Maps  -> stores unique values

const map = new Map()
map.set("PK","Pakistan")
map.set("UAE","United Arab Emirates")
map.set("SA","Suadi Arabia")
 
// console.log(map);


for (const [key,value] of map) {
    // console.log(key,":-",value);
    
}

// -> forof loop is not for the objects
// const myObject = {
//     game1:'NFS',
//     game2:'gta'
// }

// for (const element of object) {
    
// }
