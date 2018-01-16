let user = {
    name:"John",
    surname:"bla",

    get fullName(){
        return `${this.name} ${this.surname}`;
    },

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.fullName);

user.fullName = "Andrei Babos";

console.log(user.fullName);