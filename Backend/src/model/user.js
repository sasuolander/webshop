const Role = require("./role");

module.exports  = class User {
    id = 0;
    username = "";
    password = "";
    role = new Role()

    createUser(id,username,role) {
        this.id = id
        this.username = username
        this.role = role
        return this
    }
}
