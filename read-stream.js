var request = require('request');
var fs = require('fs');

var s = request('http://www.pluralsight.com/');

s.pipe(fs.createWriteStream('pluralsight.html'));

/*s.on('data',function(chunk){
    console.log(">>>Data>>" + chunk);
});
s.on('end',function(){
    console.log(">>>Done");
});*/