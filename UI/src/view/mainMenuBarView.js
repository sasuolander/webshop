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

        function hideOther(){
            hideOrShow($('#shopView'))
            hideOrShow($('#userManagementView'))
            hideOrShow($('#addUser'))
            hideOrShow($('#loginView'))
            hideOrShow($('#productManagement'))
            hideOrShow($('#orderManagement'))
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
        $('.order-view').on("click", function (event) {
            hideOrShow($('#orderManagement'))
        })

        $('.productadd-view').on("click", function (event) {
            hideOrShow($('#addProductView'))
        })
        $('.cart-view').on("click", function (event) {
            hideOrShow($('#cartManagement'))
        })

        super.updateView();
    }

    insertView(){
        this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
            "  <div class='navbar-brand'>" +
            "    <a class='navbar-item shop-view' onclick=''>Shop</a>" +
            "    <a class=\"navbar-item cart-view \" onclick=''>Cart</a>" +
            "    <a class=\"navbar-item login-view \" onclick=''>Login</a>" +
            "    <a class=\"navbar-item useradd-view \" onclick=''>Add User</a>" +
            "    <a class=\"navbar-item productadd-view \" onclick=''>Add Product</a>" +
            "    <a class=\"navbar-item user-view \" onclick=''>User Management</a>" +
            "    <a class=\"navbar-item admin-view\" onclick=''>Product Management</a>" +
            "    <a class=\"navbar-item order-view\" onclick=''>Order Management</a>" +
            "    <a class=\"navbar-item logout-view\" onclick=''>Log out</a>" +
            "  </div>" +
            "</nav>");
    }
}
