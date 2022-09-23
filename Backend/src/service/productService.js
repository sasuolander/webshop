const dao = require("../dao/productDao");

exports.createProduct = function (body) {
    return dao.save(body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.deleteProduct = function (id) {
    return dao.deleteById(id).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
exports.getProducts = function () {
    return dao.findAll();
}

exports.getProductByName = function (name) {
    return dao.findByName(name).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.updateProduct = function (id, body) {
    return dao.update(id, body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
