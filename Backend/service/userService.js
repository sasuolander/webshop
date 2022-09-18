const dao = require("../dao/userDao");

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


exports.getUserByName = function (username) {
    return dao.findByUsername(username).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}

exports.authenticate = async function (username, password) {
    if (username === "testuser" && process.env.DEV) {
        return true
    } else {
        const user = await dao.findByUsername(username).then(r => {
            return r
        }).catch(function (err) {
            console.log(err)
        });
        return user.password === password;
    }

}

exports.updateUser = function (username, body) {
    return dao.update(username, body).then(r => {
        return r
    }).catch(function (err) {
        console.log(err)
    });
}
