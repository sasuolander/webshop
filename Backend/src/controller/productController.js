const Router = require("../router/router");
const ProductService = require("../service/productService");
const {headersCors} = require("../headersCors");

module.exports = function register() {
    console.log("product controller pages loaded")
}

Router.get("product", async function getProduct(req, res) {
    const response = await ProductService.getProducts()
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})

Router.post("product", async function add(req, res) {
    const body = req.body;
    const saved = await ProductService.createProduct(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(saved));
})
// id in payload
Router.delete("product", async function deleteProduct(req, res) {
    const body = req.body;
    const response = await ProductService.deleteProduct(body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})
// id and updated info in payload
Router.post("product/update", async function update(req, res) {
    const body = req.body;
    const response = await ProductService.updateProduct(body.id, body)
    res.writeHead(200,headersCors)
    res.end(JSON.stringify(response));
})
