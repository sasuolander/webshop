const {UserModel} = require("../schema/schema");
const User = require("./../model/user");
/**
 * @param param
 */
exports.save = function (paramInput) {
    console.log("param",paramInput)
    const param = paramInput || new User({id: 0, username: "", password: ""})
    if (param !== undefined) {
        return new UserModel({username: param.username,password:param.password}).save().then(r => {
            return r
        });
    }
}
/**
 * @param param
 */

exports.update = function (username, paramInput) {
    const param = paramInput || new User({id: 0, username: "", password: ""})
    return UserModel.findOneAndUpdate({username: username}, {
        $set: {
            password: param.password,
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
/**
 * @param id
 */
exports.remove = function (id) {
    return UserModel.deleteById(id).then(r => {
        return r
    });
}
