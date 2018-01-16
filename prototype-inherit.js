let animal = {
    eats:true,
    walk: function(callback){
        
        callback(" mananca si se plimba" );
        
    },
    jumps: function(callback){
       callback(this.eats);
    }
};
 let rabbit = {
     jumps: true,
 };

 rabbit.__proto__ = animal;

 console.log(rabbit.jumps + " " + rabbit.eats);

rabbit.walk(function(action) {    ///cand termini tu functia walk de parcurs, apeleaza-mi
                                  /// functia de pe care ti-o trimit ca parametru
    console.log(action)
});

rabbit.jumps( (a) => console.log(a +  "jumps"));