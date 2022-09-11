
const dao = require("../dao/productDao");

exports.createProduct = function (body) {
    return dao.save(body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.deleteProduct = function (username) {
    return dao.removeByName(username).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
exports.getProducts = function () {
    return dao.findAll();
}

exports.getProductByName = function (username) {
    return dao.findByName(username).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.updateProduct = function (username, body) {
    return dao.update(username, body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
