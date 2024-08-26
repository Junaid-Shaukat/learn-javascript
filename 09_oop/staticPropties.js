class User{
    constructor(username){
        this.username = username

    }

    LogMe(){
        console.log(`Username: ${this.username}`);
        
    }
// by using the static keyword it restrict access of this method without static we can use it
//    static createId(){
//         return `123`
//     }
   static createId(){
        return `123`
    }
}


const user1 = new User("junaid")

// console.log(user1.createId());

class Teacher extends User {
    constructor(username,password) {
       super(username)
        this.password = password
    }
}
 const testingUser = new Teacher("testing",'testingUser@gmail.com')

 console.log(Teacher.createId());
 