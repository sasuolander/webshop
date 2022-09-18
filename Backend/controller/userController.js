const Router = require("../router/router");
const UserService = require("../service/userService");
const {headersCors} = require("../headersCors");

module.exports = function register() {
    console.log("user controller pages loaded")
}

Router.get("user", async function getUser(req, res) {
    const body = req.body;
    const response = await UserService.getUserByName(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})

Router.post("user", async function addUser(req, res) {
    const body = req.body;
    const saved = await UserService.createUser(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(saved));
})

Router.delete("user", async function deleteUser(req, res) {
    const body = req.body;
    const response = await UserService.deleteUser(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})

Router.post("user/update", async function update(req, res) {
    const body = req.body;
    const response = await UserService.updateUser(body.id, body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})


