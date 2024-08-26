class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    //getter
    get password(){
        return this._password.toLowerCase()
    }
    //setter
    set password(value){
        this._password=value
    }
}

const user1 = new User("user@u.ai","123ABC")

console.log(user1.password);


// The uper syntax is the modern syntax
