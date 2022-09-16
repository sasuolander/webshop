// filter chain for every request or inject authentication check

// setup token or cookie when authentication succeed

const UserService = require("../service/userService");

module.exports.authenticate = async function (req, res) {

    const authorizationHeader = req.getHeader("Authorization")

    if (!authorizationHeader || authorizationHeader.indexOf('Basic ') === -1) {
        return res.status(401).json({message: 'Missing Authorization Header'});
    }

    // verify auth credentials
    const base64Credentials = authorizationHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await UserService.authenticate({username, password});
    if (!user) {
        return res.end(JSON.stringify({message: 'Invalid Authentication Credentials'}));
    }

    // attach user to request object
    req.user = user
}

module.exports.validateLogin = async function (req, res) {

    const authorizationHeader = req.getHeader("Authorization")

    if (!authorizationHeader || authorizationHeader.indexOf('Basic ') === -1) {
        return res.status(401).json({message: 'Missing Authorization Header'});
    }

    // verify auth credentials
    const base64Credentials = authorizationHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await UserService.authenticate({username, password});
    if (!user) {
        return res.end(JSON.stringify({message: 'Invalid Authentication Credentials'}));
    }
    return {res:res.setHeader("Set-Cookie","login:true"),status: true}
}
