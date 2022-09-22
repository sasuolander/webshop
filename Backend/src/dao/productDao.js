const {ProductModel} = require("../schema/schema");
const Product = require("../model/product");

/**
 * @param param
 */
exports.save = function (paramInput) {
    const param = paramInput || new Product({id: 0, name: "", price: 0 })
    if (param !== undefined) {
        return new ProductModel({
            name: param.name,
            price: param.price,
        }).save().then(r => {
            return r
        });
    }
}


exports.findAll = function () {
    return ProductModel.find({}).then(r => {
        return r
    });
}
/**
 * @param param
 */

exports.update = async function (id, paramInput) {
    const param = paramInput || new Product({id: 0, name: "", price: 0})
    return ProductModel.findOneAndUpdate({id: id}, {
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

exports.findByName = function (name) {
    return UserModel.find({name: name}).then(r => {
        return r
    });
}
exports.removeByName = function (name) {
    return UserModel.deleteOne({name: name}).then(r => {
        return r
    });
}

exports.findAll = function () {
    return ProductModel.find({}).then(r => {
        return r
    });
}

/**
 * @param id
 */
exports.find = function (id) {
    return ProductModel.find({id: id}).then(r => {
        return r
    });
}
/**
 * @param id
 */
exports.remove = function (id) {
    return ProductModel.deleteById(id).then(r => {
        return r
    });
}
