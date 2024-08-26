function setUsername(username){
    // complex db calls
    this.username = username;
    console.log("Called");
    
}

function createUser(username,email,password){
    // setUsername(username)// not giving the username because it is the refrence. It is not calling
// we use the this with username to get the name. It use the our given this instead of his this in setUsername (this)
    setUsername.call(this,username) // for calling we use the call keyword

    this.email =email
    this.password = password
}

const a = new createUser("name","name@gmail.com","1234")


console.log(a);
