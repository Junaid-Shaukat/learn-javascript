const myObj = {
    js:"Javascript",
    cpp:"C++",
    rb: 'ruby',
    py:"python"
}

// for in loop

for (const key in myObj) {
 console.log(`${key} shortform of ${myObj[key]}`);
 
}

const programming = ["c++","java","ruby","js"]

for (const key in programming) {
    console.log(programming[key]);
    
}

// For in loop is not used in the maps because the map is not the irterateable and have no iterations


