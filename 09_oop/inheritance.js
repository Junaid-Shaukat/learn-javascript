class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Usernmae is ${this.username}`);
        
    }
}

// we have all the functionality of the user class
class Teacher extends User {
        constructor(username,email,password){
            // super keyword is automatically read username
            super(username)
            this.emai=email
            this.password=password
 
        }

        addCourse(){
            console.log(`A new course is added by ${this.username} `);
            
}
}

const myUserObj = new Teacher ('user1','username@gmail.com',"123")

myUserObj.addCourse()
const Obj2 = new User("User 2")

Obj2.logMe()

console.log(myUserObj instanceof Teacher ); // checking the instance 
