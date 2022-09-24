const Router = require("../router/router");
const {validateLogin} = require("../middleware/authentication");

module.exports = function register() {
    console.log("login controller pages loaded")
}

Router.get("login", async function loginUser(req, res) {
    return validateLogin(req, res);
})
