class Role {
    role= ""
    constructor(roleName) {
        if (roleName === "admin"|| roleName === "user" ||roleName === "nonLogged"){
            this.role = roleName;
        } else throw Error("Not valid user role")
    }
    isAdmin = function (){
        return this.role === "admin";
    }
    isUser = function (){
        return this.role === "user";
    }
    isNonLogged = function (){
        return this.role === "nonLogged";
    }
}
