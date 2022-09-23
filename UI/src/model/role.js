export class Role {
    role = ""

    constructor(roleName) {
        if (roleName === "admin" || roleName === "userNormal" || roleName === "nonLogged") {
            this.role = roleName;
        } else if (typeof roleName === "undefined") {
            console.debug("undefined")
        } else throw Error("Not valid user role")
    }

    isAdmin = function () {
        return this.role === "admin";
    }
    isUser = function () {
        return this.role === "userNormal";
    }
    isNonLogged = function () {
        return this.role === "nonLogged";
    }
}
