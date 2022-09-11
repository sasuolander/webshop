import View from "./view";

export default class AddUserView extends View {
    divName = "addUser"

    constructor() {
        super();
    }

    updateView() {
        $(".addUserForm").click(
            function addUserButton(event){
                console.log("test")
            })
    }

    insertView() {
        this.viewRoot.append(
            "<form class='addUserForm'>" +
            "  <label for='username'>username:</label><br>" +
            "  <input type='text' id='username' name='username'><br>" +
            "  <label for='password'>password</label><br>" +
            "  <input type='text' id='password' name='password'>" +
            "  <div className='field is-grouped'>" +
            "    <div className='control'>" +
            "        <button type='button' className='button is-link'>Add</button>" +
            "   </div>" +
            "  <div className='control'>" +
            "        <button type='button' className='button is-link is-light'>Cancel</button>" +
            "    </div>" +
            "  </div>" +
            "</form>");
    }
}
