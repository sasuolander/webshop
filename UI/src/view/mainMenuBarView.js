import View from "./view";

export default class MainMenuBarView extends View {
    constructor() {
        super();
    }

    divName = "mainmenu"

    insertView(){
       // https://bulma.io/documentation/components/navbar/
        this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
            "  <div class='navbar-brand'>" +
            "    <a class=\"navbar-item\" onclick=''>Shop</a>" +
            "    <a class=\"navbar-item\" onclick=''>User</a>" +
            "    <a class=\"navbar-item\" onclick=''>Login</a>" +
            "    <a class=\"navbar-item\" onclick=''>Admin</a>" +
            "  </div>" +
            "</nav>");
    }
}
