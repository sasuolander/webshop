const {models} = require("mongoose");

console.log("controller pages loaded")

function addUser(req, res) {
    console.log("hi")
    res.writeHead(200);
    res.end("Hi");
}

function deleteUser(req, res) {
    /*console.log("hi")
    res.writeHead(200);
    res.end("Hi")*/
}

function findUser(req, res) {
    /*console.log("hi")
    res.writeHead(200);
    res.end("Hi")*/
}

function updateUser(req, res) {
    /* console.log("hi")
     res.writeHead(200);
     res.end("Hi")*/
}

module.exports = {
    addUser: addUser,
    updateUser: updateUser,
    findUser: findUser,
    deleteUser: deleteUser,
}
