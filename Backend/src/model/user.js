module.exports = class User {
    id = 0;
    username = "";
    password = "";
    role

    createUser(id, username, role) {
        this.id = id
        this.username = username
        this.role = role
        return this
    }
}
