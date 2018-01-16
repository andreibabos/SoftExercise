class User {
    constructor(name) {
        this._nume = name;
    }
    sayHi() {
        console.log("Hi from User");
    }
    get name() {
        return this._nume;
    }
}
  
let user = new User("John");
//console.log(user.name);
user.sayHi();


module.exports.User_f = User;