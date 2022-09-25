const UserService = require("../service/userService");
const {headersCors} = require("../headersCors");
const jwt = require("jsonwebtoken");
const {TokenExpiredError} = require("jsonwebtoken");

module.exports.authenticate = async function (req, res) {
    let user
    const token = req.headers["x-access-token"];

    if (!token) {
        res.writeHead(401, headersCors).end(JSON.stringify({message: 'Missing token'}));
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        user = decoded;
    } catch (err) {

        if (err instanceof TokenExpiredError) {
            res.writeHead(401, headersCors).end(JSON.stringify({message: 'Invalid token'}));
            return;
        } else {
            console.log(err)
            res.writeHead(401, headersCors).end(JSON.stringify({message: 'Invalid token'}));
            return;
        }

    }

    req.user = user
    return true
}

module.exports.validateLogin = async function (req, res) {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader || authorizationHeader.indexOf('Basic ') === -1) {
        res.writeHead(401, headersCors).end(JSON.stringify({message: 'Missing Authorization Header'}));
        return;
    }

    const base64Credentials = authorizationHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const user = await UserService.authenticate(username, password);
    if (!user) {
        res.writeHead(401, headersCors).end(JSON.stringify({message: 'Invalid Authentication Credentials'}));
        return;
    }

    user.token = jwt.sign(
        {user_id: user.id, username: user.username, role: user.role.role},
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    res.setHeader("Set-Cookie", "login=true")
    res.writeHead(200, headersCors)
    return res.end(JSON.stringify({id: user.id, username: user.username, role: user.role.role, token: user.token}))

}

module.exports.validateRightIsWrong = function(req, res){
    const user = req.user
    if(user.role !=="admin"){
        res.writeHead(401, headersCors).end(JSON.stringify({message: 'Forbidden'}));
        return true
    }else {
        return false
    }
}

module.exports.validateRightIsWrongCheckRole = function(req, res){
    const user = req.user
    if(user.role !=="admin" && req.body.role.role !=="userNormal"){
        res.writeHead(401, headersCors).end(JSON.stringify({message: 'Forbidden'}));
        return true
    }else {
        return false
    }
}

module.exports.validateRightIsWrongForOrder = function(req, res,order){
    const user = req.user
    if(user.role !=="admin"){
        if (user.user_id !== order.userId){
            res.writeHead(401, headersCors).end(JSON.stringify({message: 'Forbidden'}));
            return true
        }else {
            return false
        }
    }else {
        return false
    }
}
