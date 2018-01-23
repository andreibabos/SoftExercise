const should = require("should"),
    sinon = require("sinon");

describe("Book Controller tests", function () {
    describe("Post", function () {
        it("shoult not allow a empty title");
        let book = function (Book) { this.save = function () { } }

        let req = {
            body: {
                author: "Jon"
            }
        }

        let res = {
            status: sinon.spy(),
            send : sinon.spy()
        }

        let bookController = require("../Controllers/bookController")(book);

        bookController.post(req,res);

        res.status.calledWith(400).should.equal(true,"Bad status" + res.status.args[0][0])
        res.send.calledWith("Title is required").should.equal(true);
    })
})