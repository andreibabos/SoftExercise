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

    bookRouter.use("/:bookId", function (req, res, next) {
        Book.findById(req.params.bookId, function (err, books) {//books e referinta la colectia de la .model("name",schema,collecti
            if (err)
                res.status(500).send(err);
            else if (books) { //daca exista cartea cu acest id
                req.books = books; // adaug requestului proprietatea books cu cartea gasita
                //console.log("!!!!" + req.books);
                next(); //continua catre alt middleware sau catre .get/.post
            }
            else {
                res.status(404).send("no book found");
            }
        });
    })
    bookRouter.route("/:bookId")
        .get(function (req, res) {
            res.json(req.books);
        })
        .put(function (req, res) {
            //console.log("Req.books " + req.books);
            ///console.log("Req.body " + req.body);
            req.books.title = req.body.title;
            req.books.author = req.body.author;
            req.books.genre = req.body.genre;
            req.books.read = req.body.read;

            req.books.save(function (err) {
                if (err)
                    res.send(500).send(err)
                else {
                    res.json(req.books);
                }
            });
            res.json(req.books);
        })
        .patch(function (req, res) {
            if (req.books._id)
                delete req.body._id;

            for (var p in req.body) {
                req.books[p] = req.body[p]; ///conteaza ordinea proprietatilor cand trimit un json cu postman?!!!!
            }

            req.books.save(function (err) {
                if (err)
                    res.send(500).send(err)
                else {
                    res.json(req.books);
                }
            });
        })
        .delete(function (req, res) {
            req.books.remove(function (err) {
                if (err)
                    res.send(500).send(err)
                else {
                    res.status(204).send("Removed");
                }
            })
        })
    return bookRouter;
};

module.exports = routes;