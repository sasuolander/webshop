'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const Router = require("./router/router")
const userController = require("./controller/userController")
const loginController = require("./controller/loginController")
const productController = require("./controller/productController")
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.DATABASE).then(r => console.log("connected"))
const router = new Router();
userController()
loginController()
productController()

const server = http.createServer(async (req, res) => {

    const {headersCors} = require("./headersCors");
    //console.log("server")
    if (req.method === "OPTIONS") {
        //console.log("OPTION")
        res.writeHead(204, headersCors);
        res.end();
        return res;
    }else {
       await router.main(req, res)
    }

});

try {
    server.listen(port, hostname, () => {
        console.log(`Server is running on http://${hostname}:${port}`);
    })
} catch(err) {
        console.error(`Could not start server: ${err}`);
        process.exit(1);
}
module.exports = router
