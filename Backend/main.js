'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const Router = require("./router/router")
const userController = require("./controller/userController")
const mongoose = require("mongoose")
require('dotenv').config()
//mongoose.connect(process.env.DATABASE).then(r => console.log("connected"))
const router = new Router();

Router.get("user",userController.addUser)
const server = http.createServer((req, res) => {
    console.log("server")
    router.main(req,res)
});

try {
    server.listen(port, hostname, () => {
        console.log(`Server is running on http://${hostname}:${port}`);
    })
} catch(err) {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
}
module.exports = router
