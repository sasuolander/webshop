import {Role} from "./role";

export class User {
    id = 0;
    username = "";
    password = "";
    role = new Role()

    constructor(username,password,role) {
        this.username = username
        this.password = password // this is security risk, do not save password
        this.role = role
    }
    createUser(username,role) {
        this.username = username
        this.role = role
        return this
    }
}
