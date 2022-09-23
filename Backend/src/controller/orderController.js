const OrderClass = require("../model/order");

const Router = require("../router/router");
const OrderService = require("../service/orderService");
const {headersCors} = require("../headersCors");

module.exports = function register() {
    console.log("order controller pages loaded")
}

Router.get("orders", async function get(req, res) {
    const response = await OrderService.getOrders()
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(response.map(r => {
        return new OrderClass(r.id, r.userId, r.productId)
    })));
})

Router.post("ordersByUserId", async function get(req, res) {
    const body = req.body;
    const r = await OrderService.getOrderByUserId(body)
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(r.map(r => {
        return new OrderClass(r.id, r.userId, r.productId)
    })));
})

Router.post("order", async function add(req, res) {
    const body = req.body;
    const r = await OrderService.createOrder(body)
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(new OrderClass(r.id, r.userId, r.productId)));
})
// id in payload
Router.delete("order", async function deleteProduct(req, res) {
    const body = req.body;
    console.log("delete", body)
    const r = await OrderService.deleteOrder(body)
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(new OrderClass(r.id, r.userId, r.productId)));
})
// id and updated info in payload
Router.post("order/update", async function update(req, res) {
    const body = req.body;
    const r = await OrderService.updateOrder(body.id, body)
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(new OrderClass(r.id, r.userId, r.productId)));
})
