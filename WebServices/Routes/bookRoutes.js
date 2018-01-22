const express = require('express');

let routes = function (Book) {

    let bookRouter = express.Router();

    bookRouter.route("/")
        .post(function (req, res) {
            let book = new Book(req.body);

            //console.log(book);
            book.save();
            res.status(201).send(book);
        })
        .get(function (req, res) {
            let query = {};

            if (req.query.genre) {
                query.genre = req.query.genre;
                console.log(query.genre + " " + req.query.genre);
            }
            Book.find(query, function (err, books) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books);
            });
        });


    bookRouter.route("/:bookId")
        .get(function (req, res) {

            Book.findById(req.params.bookId, function (err, books) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books); //books e referinta la colectia de la .model("name",schema,collection)?DA
            });
        })
        .put(function (req, res) {
            Book.findById(req.params.bookId, function (err, books) {
                if (err)
                    return res.status(500).send(err);

                books.title = req.body.title;
                books.author = req.body.author;
                books.genre = req.body.genre;
                books.read = req.body.read;
                books.save();
                res.json(books);
            });
        })
    return bookRouter;
};

module.exports = routes;