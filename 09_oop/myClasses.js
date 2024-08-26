// ES6 
// constructer is automatically called when object is created 
class User {
    constructor(username,email,password) {
        this.username = username;
        this.emai = email;
        this.password = password
    }
    encryptedPassword(){
        return `${this.password}abc`
    }
}


const myUser = new User("abcdedn","name@mail.com","pass")

console.log(myUser.encryptedPassword());

console.log(myUser);


