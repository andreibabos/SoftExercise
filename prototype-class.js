function User(name,birthday){
    this._name = name;
    this._birthday = birthday;
}

User.prototype._calcAge = function(){
    return "date";
}

User.prototype.sayHi = function(){
    console.log(this._name);
    console.log(`age: ${this._calcAge()}`);
}

let user = new User("John","Date");

user.sayHi();