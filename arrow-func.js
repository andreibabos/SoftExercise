let group = {
    title:"A group",
    students:["john","alex","ion"],

    showList(){
        this.students.forEach(element => {
            console.log(this.title+ " " + element)
            
        });
    }
};

group.showList();