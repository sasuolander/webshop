import View from "./view";
import {loginBasic} from "../backend/backend";


export default class LoginView extends View {
    constructor() {
        super();
    }

    visibleInitially = false
    divName = "loginView"

    updateView() {
        $("#button-login").click(
            function (event){
                const parameter =$("#loginView :input").serializeArray()
                const username = parameter[0].value
                const password = parameter[1].value
                loginBasic(username,password)
            })
    }

    insertView() {
        this.viewRoot.append(
            "<form class='loginView' >" +
            "  <label for='username'>username:</label><br>" +
            "  <input type='text' id='username' name='username'><br>" +
            "  <label for='password'>password</label><br>" +
            "  <input type='text' id='password' name='password'>" +
            "  <div className='field is-grouped'>" +
            "    <div>" +
            "        <button id='button-login' type='button' >Login</button>" +
            "   </div>" +
            "  </div>" +
            "</form>");
    }

}
