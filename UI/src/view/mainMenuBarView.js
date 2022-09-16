import View from "./view";

export default class MainMenuBarView extends View {
    constructor() {
        super();
    }

    divName = "mainmenu"

    updateView() {

        function hideOrShow(page) {
            if (page.css('display') === 'none' || page.css("visibility") === "hidden") {
                page.show();
            }
            else {
                page.hide();
            }
        }

        $('.shop-view').on("click", function (event) {
            hideOrShow($('#shopView'))
        })

        $('.user-view').on("click", function (event) {
            hideOrShow($('#userManagementView'))
        })
        $('.useradd-view').on("click", function (event) {
            hideOrShow($('#addUser'))
        })
        $('.login-view').on("click", function (event) {
            hideOrShow($('#loginView'))
        })
        $('.admin-view').on("click", function (event) {
            hideOrShow($('#productManagement'))
        })
        super.updateView();
    }

    insertView(){
       // https://bulma.io/documentation/components/navbar/
        this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
            "  <div class='navbar-brand'>" +
            "    <a class='navbar-item shop-view' onclick=''>Shop</a>" +
            "    <a class=\"navbar-item cart-view \" onclick=''>Cart</a>" +
            "    <a class=\"navbar-item user-view \" onclick=''>User</a>" +
            "    <a class=\"navbar-item useradd-view \" onclick=''>Add User</a>" +
            "    <a class=\"navbar-item login-view \" onclick=''>Login</a>" +
            "    <a class=\"navbar-item admin-view\" onclick=''>Product Management</a>" +
            "  </div>" +
            "</nav>");
    }
}
