import View from "./view";
import {addUser} from "../backend/backend";

export default class AddUserView extends View {
    divName = "addUser"
    visibleInitially = false

    constructor() {
        super();
    }

    updateView() {
        const me = this
        $(".addUserForm .add-user-button").click(
            function addUserButton(event) {
                const parameter = $("#addUser :input").serializeArray()
                let role;
                if (me.globalState?.user.isNonLogged()) {
                    role = "userNormal"
                } else {
                    role = $("#addUser .role-select").val();
                }
                const username = parameter[0].value
                const password = parameter[1].value
                addUser(username, password, role)
            })
    }

    insertView() {

        if (this.globalState?.user.isAdmin() && !this.globalState.user.isNonLogged()) {
            this.viewRoot.append(
                "<div class='addUserForm' >" +
                "  <label for='username'>username:</label><br>" +
                "  <input type='text' id='username' name='username'><br>" +
                "  <label for='password'>password</label><br>" +
                "  <input  type=\"password\" name='password' placeholder=\"Enter your Password\">" +
                "<div class=\"role select\">\n" +
                "  <select class=\"role-select\">\n" +
                "    <option value='admin'>Admin</option>\n" +
                "    <option value='userNormal'>Normal</option>\n" +
                "  </select>\n" +
                "</div>" +
                "  <div class='field is-grouped'>" +
                "    <div class='control'>" +
                "        <button type='button' class='add-user-button button is-link'>Add</button>" +
                "   </div>" +
                "  <div class='control'>" +
                "        <button type='button' class='cancel-button button is-link is-light'>Cancel</button>" +
                "    </div>" +
                "  </div>" +
                "</div>");
        } else {
            this.viewRoot.append(
                "<div class='addUserForm' >" +
                "  <label for='username'>username:</label><br>" +
                "  <input type='text' id='username' name='username'><br>" +
                "  <label for='password'>password</label><br>" +
                "  <input  type=\"password\" name='password' placeholder=\"Enter your Password\">" +
                "  <div class='field is-grouped'>" +
                "    <div class='control'>" +
                "        <button type='button' class='add-user-button button is-link'>Add</button>" +
                "   </div>" +
                "  <div class='control'>" +
                "        <button type='button' class='cancel-button button is-link is-light'>Cancel</button>" +
                "    </div>" +
                "  </div>" +
                "</div>");
        }

    }
}
