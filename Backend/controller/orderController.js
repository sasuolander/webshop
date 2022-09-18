const Router = require("../router/router");
const ProductService = require("../service/productService");
const {headersCors} = require("../headersCors");

module.exports = function register() {
    console.log("product controller pages loaded")
}

Router.get("order", async function get(req, res) {
    const response = await ProductService.getProducts()
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})

Router.post("order", async function add(req, res) {
    const body = req.body;
    const saved = await ProductService.createProduct(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(saved));
})
// id in payload
Router.delete("order", async function deleteProduct(req, res) {
    const body = req.body;
    const response = await ProductService.deleteProduct(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})
// id and updated info in payload
Router.post("order/update", async function update(req, res) {
    const body = req.body;
    const response = await ProductService.updateProduct(body.id, body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})
