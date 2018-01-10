var http = require('http');

var options = {
    host :'www.google.com',
    port : 80,
    path : '/',
    method: 'GET'
};
var req = http.request(options, function(res){
        console.log(res.statusCode);
        res.pipe(process.stdout);
});

req.end(); //to have actually the request invoke, closing the writeable stream