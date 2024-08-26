// Promise is also a object
// Q and BlueBird are the libraries are used before ES6 for promises to fetch data

const promiseOne = new Promise((resolve,reject)=>{
// Do an async task
// DB Calls, cryptography, Network work
        setTimeout(()=>{
            console.log('Async Task is completed');
            resolve()// when we call resolve then the promise.then() works
            
        },1000)// if we add 2000 then the second one will executed first as his time out is the 1000
})

// the conection of the resolve is with then
promiseOne.then(()=>console.log("promised Comsumed")
)

// Promises can be declared without storing it in any variable 
// second syntax of the uper one
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Task 2 ");
        resolve()
    }, 1000);// wait one second 
}).then(()=>{
    console.log("async 2 resolved");
    
})


const promiseThree = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({  // passing data -> usually in object but can be pass in other format
            name:"Junaid",mail:"testing@abc.com"
        })
    },1000)
}).then((data=>{ // callback
    console.log(data);// getting the data 
    
}))



const promiseFour = new Promise((res,rej)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            res({
                username:"junaid",
                password:1232
            })

        } else {
            rej("Error Something went wrong")
        }
    }, 1000);
})
// we can use unlimited .then
// chaining     


promiseFour
.then((user=>{
    console.log(user);
    return user.username
    
}))
.then((username)=>{
        console.log(username);
        
})
.catch((err)=>{
    console.log(err);
    
}).finally(()=> console.log("The promise is either resolved or rejected")
)
// .finally() -> it also accept the callback it is always executed 

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username:"js",
                password:1232
            })

        } else {
            reject("Error JS went wrong")
        }
    }, 1000);
})
// we can use the async and await insted of then and catch 
// for async and await we have to wrap to try and catch block instead of .then and .catch
async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()

//    Getting data from api using fetch   //


// +++++++++   Without using .then    ++++++

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/")
//     const data = await response.json() // strinf -> json
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
    
//   }
    
// }

// getUsers()



// ++++++++ with .then and .catch  ++++++++

fetch('https://jsonplaceholder.typicode.com/users/').then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
}
)
.catch((err)=>console.log(err)
)