const {OrderModel} = require("../schema/schema");
const Order = require("../model/order");

/**
 * @param param
 */
exports.save = function (paramInput) {
    const param = paramInput || new Order({id: 0, name: "", price: 0 })
    if (param !== undefined) {
        return new OrderModel({
            name: param.name,
            price: param.price,
        }).save().then(r => {
            return r
        });
    }
}

exports.findAll = function () {
    return OrderModel.find({}).then(r => {
        return r
    });
}
/**
 * @param param
 */

exports.update = async function (id, paramInput) {
    const param = paramInput || new Order({id: 0, name: "", price: 0})
    return OrderModel.findOneAndUpdate({id: id}, {
        $set: {
            name: param.name,
            price: param.price,
        }
    }, {
        upsert: true
    }, function (err) {
        if (err) {
            console.log('error updating');
        }
    }).clone();
}

exports.findAll = function () {
    return OrderModel.find({}).then(r => {
        return r
    });
}

/**
 * @param id
 */
exports.find = function (id) {
    return OrderModel.find({id: id}).then(r => {
        return r
    });
}
/**
 * @param id
 */
exports.remove = function (id) {
    return OrderModel.deleteById(id).then(r => {
        return r
    });
}
