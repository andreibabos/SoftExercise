const User = require('./class.js').User_f;

class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    run(speed){
        this.speed += speed;
        console.log(`${this.name} runs with the speed ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log("Base class stop");
    }
}

class Rabbit extends Animal {
    constructor(name,earLenght){
        super(name);
        this.earLenght = earLenght;
    }
    
    hide(){
        console.log("hide");
    }
    stop(){
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit("White",10);

console.log(rabbit.earLenght);
rabbit.stop();

///just some randome test
let user = new User("Johnsdf");
console.log(user.name);