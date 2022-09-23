const dao = require("../dao/userDao");
const UserClass = require("../model/user");
const Role = require("../model/role");
const bcrypt = require("bcryptjs");

exports.createUser = function (body) {
    return dao.save(body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.deleteUser = function (username) {
    return dao.removeByUsername(username).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
exports.deleteUserById = function (id) {
    return dao.deleteById(id).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.getUserByName = function (username) {
    return dao.findByUsername(username).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}


exports.getUsers = function () {
    return dao.findAll();
}

exports.authenticate = async function (username, password) {
    if (username === "testuser" && process.env.DEV) {
        return true
    } else {
        let user = await dao.findByUsername(username).then(r => {
            return r
        }).catch(function (err) {
            console.log(err)
        });
        console.log(user)
        user = user[0]._doc
        const passwordtest = await bcrypt.compare(password, user.password)
        if (!!(user && passwordtest)) {
            return new UserClass().createUser(user.id, user.username, new Role(user.role))
        }
    }
}

exports.updateUser = function (id, body) {
    return dao.update(id, body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
