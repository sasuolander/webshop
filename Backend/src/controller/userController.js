const Router = require("../router/router");
const UserService = require("../service/userService");
const {headersCors} = require("../headersCors");
const Role = require("../model/role");
const UserClass = require("../model/user");

module.exports = function register() {
    console.log("user controller pages loaded")
}

Router.get("user", async function getUser(req, res) {
    const body = req.body.username;
    const response = await UserService.getUserByName(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(new UserClass().createUser(response.id,response.username,new Role(response.role))));
})

Router.get("users", async function getUser(req, res) {
    const response = await UserService.getUsers()
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response.map(r=>{return new UserClass().createUser(r.id,r.username,new Role(r.role))})));
})

Router.post("user", async function addUser(req, res) {
    const body = req.body;
    const saved = await UserService.createUser(body)
    const data = saved._doc
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(new UserClass().createUser(data.id,data.username,new Role(data.role))));
})

Router.delete("user", async function deleteUser(req, res) {
    const body = req.body;
    console.log(body)
    const response = await UserService.deleteUserById(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(new UserClass().createUser(response.id,response.username,new Role(response.role))));
})

Router.post("user/update", async function update(req, res) {
    const body = req.body;
    const response = await UserService.updateUser(body.id, body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(new UserClass().createUser(response.id,response.username,new Role(response.role))));
})


