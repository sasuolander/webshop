const {OrderModel} = require("../schema/schema");
const Order = require("../model/order");

/**
 * @param param
 */
exports.save = function (paramInput) {
    const param = paramInput || new Order({id: 0, userId: 0, productId: 0})
    if (param !== undefined) {
        return new OrderModel({
            userId: param.userId,
            productId: param.productId
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
    const param = paramInput || new Order({id: 0, userId: 0, productId: 0})
    return OrderModel.findOneAndUpdate({id: id}, {
        $set: {
            userId: param.userId,
            productId: param.productId
        }
    }, {
        upsert: true
    }, function (err) {
        if (err) {
            console.log('error updating');
        }
    }).clone();
}

/**
 * @param id
 */
exports.findById = function (id) {
    return OrderModel.find({id: id}).then(r => {
        return r
    });
}

exports.findByUserId = function (id) {
    return OrderModel.find({userId: id}).then(r => {
        return r
    });
}

exports.deleteById = function (id) {
    return OrderModel.deleteById(id).then(r => {
        return r
    });
}
