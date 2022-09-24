const {UserModel} = require("../schema/schema");
const User = require("../model/user");
const bcrypt = require("bcryptjs");
/**
 * @param param
 */
exports.save = async function (paramInput) {
    const param = paramInput || new User({id: 0, username: "", password: "", role: {}})
    const encryptedPassword = await bcrypt.hash(param.password,  parseInt(process.env.HASH_SALT));
    if (param !== undefined) {
        return new UserModel({
            username: param.username,
            password: encryptedPassword,
            role: param.role.role
        }).save().then(r => {
            return r
        });
    }
}
/**
 * @param param
 */

exports.update = function (id, paramInput) {
    const param = paramInput || new User({id: 0, username: "", password: "", role: {}})
    return UserModel.findOneAndUpdate({id: id}, {
        $set: {
            username: param.username,
            role: param.role.role
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
    return UserModel.find({}).then(r => {
        return r
    });
}

/**
 * @param id
 */
exports.find = function (id) {
    return UserModel.find({id: id}).then(r => {
        return r
    });
}

exports.findAll = function () {
    return UserModel.find({}).then(r => {
        return r
    });
}

exports.findByUsername = function (username) {
    return UserModel.find({username: username}).then(r => {
        return r
    });
}
exports.removeByUsername = function (username) {
    return UserModel.deleteOne({username: username}).then(r => {
        return r
    });
}
exports.deleteById = function (id) {
    return UserModel.deleteById(id).then(r => {
        return r
    });
}
