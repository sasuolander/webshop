import View from "./view";

export default class MainMenuBar extends View {
    constructor() {
        super();
    }

    divName = "mainmenu"

    insertView(){
       // https://bulma.io/documentation/components/navbar/
        this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
            "  <div class='navbar-brand'>" +
            "    <!-- navbar items, navbar burger... -->\n" +
            "  </div>" +
            "</nav>");
    }
}
