// filter chain for every request or inject authentication check

// setup token or cookie when authentication succeed

const UserService = require("../service/userService");
const {headersCors} = require("../headersCors");

module.exports.authenticate = async function (req, res) {
    let user
    req.on("end", async function (req) {
        const authorizationHeader = req.headers.authorization

        if (!authorizationHeader || authorizationHeader.indexOf('Basic ') === -1) {
            return res.status(401).json({message: 'Missing Authorization Header'});
        }

        // verify auth credentials
        const base64Credentials = authorizationHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        user = await UserService.authenticate({username, password});
        if (!user) {
            return res.end(JSON.stringify({message: 'Invalid Authentication Credentials'}));
        }

        // attach user to request object

    })
    req.user = user

}

module.exports.validateLogin = async function (req, res) {
    console.log("validateLogin")
    const authorizationHeader = req.headers.authorization
    console.log(authorizationHeader)
    if (!authorizationHeader || authorizationHeader.indexOf('Basic ') === -1) {
        return res.writeHead(401).end(JSON.stringify({message: 'Missing Authorization Header'}));
    }

    // verify auth credentials
    const base64Credentials = authorizationHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const user = await UserService.authenticate(username, password);
    if (!user) {
        return res.writeHead(401).end(JSON.stringify({message: 'Invalid Authentication Credentials'}));
    }

    res.setHeader("Set-Cookie","login=true")
    res.writeHead(200,headersCors)
    return   res.end()

}
