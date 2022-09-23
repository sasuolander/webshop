import View from "./view";
import {loginBasic} from "../backend/backend";
import {eventbus} from "../main";
import {User} from "../model/user";
import {Role} from "../model/role";


export default class LoginView extends View {
    constructor() {
        super();
    }

    visibleInitially = false
    divName = "loginView"

    updateView() {
        const me = this
        $("#button-login").click(
            function (event) {
                const parameter = $("#loginView :input").serializeArray()
                const username = parameter[0].value
                const password = parameter[1].value
                loginBasic(username, password).then(r => {
                    document.cookie = "login=true"
                    document.cookie = `token=${r.data.token}`
                    me.globalState.login = true
                    me.globalState.user = new User().createUser(r.data.id, r.data.username, new Role(r.data.role))
                    eventbus.emit("reloadPage", {})
                })
            })
    }

    insertView() {
        this.viewRoot.append(
            "<div class='loginView' >" +
            "  <label for='username'>username:</label><br>" +
            "  <input type='text' id='username' name='username'><br>" +
            "  <label for='password'>password</label><br>" +
            "  <input type='text' id='password' name='password'>" +
            "  <div class='field is-grouped'>" +
            "    <div>" +
            "        <button id='button-login' type='button' >Login</button>" +
            "   </div>" +
            "  </div>" +
            "</div>");
    }
}
