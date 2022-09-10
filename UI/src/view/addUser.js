import View from "./view";

export default class AddUser extends View {
    constructor() {
        super();
    }

    divName = "addUser"

    insertView(){
        this.viewRoot.append("<form>" +
            "  <label for='fname'>First name:</label><br>\n" +
            "  <input type='text' id='fname' name='fname'><br>" +
            "  <label for='lname'>Last name:</label><br>" +
            "  <input type='text' id='lname' name='lname'>" +
            "</form>");
    }
}
