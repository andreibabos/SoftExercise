function ask(question,yes,no){
    if(question) yes();
    else no();
}

ask(false,function(){console.log("yes")},()=>console.log("no"));
//................................................
let user = { name: "John",};
let admin = { name: "Alex",};

function hello(){
    console.log(this.name);
}

user.f = hello;
admin.f = hello;

user.f();
admin.f();
//....................