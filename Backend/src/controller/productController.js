const Router = require("../router/router");
const ProductService = require("../service/productService");
const {headersCors} = require("../headersCors");
const ProductClass = require("../model/product");
const {validateRightIsWrong} = require("../middleware/authentication");

module.exports = function register() {
    console.log("product controller pages loaded")
}

Router.get("products", async function getProduct(req, res) {
    const response = await ProductService.getProducts()
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(response.map(r => {
        return new ProductClass(r.id, r.name, r.additionalInfo, r.price)
    })));
})

Router.post("product", async function add(req, res) {
    if(validateRightIsWrong(req, res)){
        return
    }
    const body = req.body;
    const response = await ProductService.createProduct(body)
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(new ProductClass(response.id, response.name, response.additionalInfo, response.price)));
})
// id in payload
Router.delete("product", async function deleteProduct(req, res) {
    if(validateRightIsWrong(req, res)){
        return
    }
    const body = req.body;
    const response = await ProductService.deleteProduct(body)
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(new ProductClass(response.id, response.name, response.additionalInfo, response.price)));
})
// id and updated info in payload
Router.post("product/update", async function update(req, res) {
    if(validateRightIsWrong(req, res)){
        return
    }
    const body = req.body;
    const response = await ProductService.updateProduct(body.id, body)
    res.writeHead(200, headersCors)
    res.end(JSON.stringify(new ProductClass(response.id, response.name, response.additionalInfo, response.price)));
})
