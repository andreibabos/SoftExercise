const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost/bookAPI');

const Book = require('./models/bookModel');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

bookRouter = require("./Routes/bookRoutes")(Book);

app.use("/api/books", bookRouter);

app.get('/', function(req, res){
    res.send("Hello guys");
}).listen(port, function(){
    console.log("I listen on port " + port);
});
