import View from "./view";

export default class LoginView extends View {
    constructor() {
        super();
    }

    divName = "loginView"

    insertView() {
        this.viewRoot.append(
            "<form class='loginView'>" +
            "  <label for='username'>username:</label><br>" +
            "  <input type='text' id='username' name='username'><br>" +
            "  <label for='password'>password</label><br>" +
            "  <input type='text' id='password' name='password'>" +
            "  <div className='field is-grouped'>" +
            "    <div className='control'>" +
            "        <button type='button' className='button is-link'>Login</button>" +
            "   </div>" +
            "  <div className='control'>" +
            "        <button type='button' className='button is-link is-light'>Cancel</button>" +
            "    </div>" +
            "  </div>" +
            "</form>");
    }

}
