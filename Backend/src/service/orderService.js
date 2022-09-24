const dao = require("../dao/orderDao");

exports.createOrder = function (body) {
    return dao.save(body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.deleteOrder = function (id) {
    return dao.deleteById(id).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
exports.getOrders = function () {
    return dao.findAll();
}

exports.getOrderByUserId = function (id) {
    return dao.findByUserId(id).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.getOrderById = function (id) {
    return dao.findById(id).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.updateOrder = function (id, body) {
    return dao.update(id, body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
