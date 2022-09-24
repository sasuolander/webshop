'use strict';
const http = require('http');
const Router = require("./router/router")
const mongoose = require("mongoose")
require('dotenv').config()
const userController = require("./controller/userController")
const loginController = require("./controller/loginController")
const productController = require("./controller/productController")
const orderController = require("./controller/orderController")
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
mongoose.connect(process.env.DATABASE).then(r => console.log("connected"))
const router = new Router();

userController()
loginController()
productController()
orderController()

const server = http.createServer(async (req, res) => {

    const {headersCors} = require("./headersCors");
    if (req.method === "OPTIONS") {
        res.writeHead(204, headersCors);
        res.end();
        return res;
    } else {
        await router.main(req, res)
    }

});

try {
    server.listen(port, hostname, () => {
        console.log(`Server is running on http://${hostname}:${port}`);
    })
} catch (err) {
    console.error(`Could not start server: ${err}`);
    process.exit(1);
}
module.exports = router
