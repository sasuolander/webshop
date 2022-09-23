export class User {
    id = 0;
    username = "";
    password = "";
    role

    constructor(username, password, role) {
        this.username = username
        this.password = password // this is security risk, do not save password
        this.role = role
    }

    createUser(id, username, role) {
        this.id = id
        this.username = username
        this.role = role
        return this
    }

    isAdmin = function () {
        return this.role.role === "admin";
    }
    isUser = function () {
        return this.role.role === "userNormal";
    }
    isNonLogged = function () {
        return this.role.role === "nonLogged";
    }

}
