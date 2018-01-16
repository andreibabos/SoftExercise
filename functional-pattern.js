function User(name){
    this.sayHi = function(){
        console.log(name);
    };
}

let user = new User("mama");

user.sayHi();