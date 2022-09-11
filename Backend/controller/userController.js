const {models} = require("mongoose");
const Router = require("../router/router");
const UserService = require("../service/userService");

module.exports = function register() {
    console.log("controller pages loaded")
}

Router.get("user", function getUser(req, res) {
    const body = req.body;

    console.log("data", body)
    res.writeHead(200);
    res.end("Hi");
})


Router.post("user",
    async function addUser(req, res) {
        const body = req.body;
        const saved = await UserService.createUser(body)
        res.writeHead(200);
        res.end(JSON.stringify(saved));
    })

Router.delete("user",
    function deleteUser(req, res) {
        console.log("hi")
        res.writeHead(200);
        res.end("Hi");
    })

Router.post("user",
    function update(req, res) {
        console.log("hi")
        res.writeHead(200);
        res.end("Hi");
    })


