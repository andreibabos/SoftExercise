let persoana = {
    name:'John',
    male : true,
    wifi:false,
    hobbies: ['inot','fotbal'],
};

let json = JSON.stringify(persoana);

console.log(json);

let parse = JSON.parse(json);
console.log(parse.name);