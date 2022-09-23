import View from "./view";
import getCookie, {eraseCookie} from "../getCookie";
import {eventbus, state} from "../main";
import {User} from "../model/user";
import {Role} from "../model/role";

export default class MainMenuBarView extends View {
    DEV = false

    constructor() {
        super();
        const me = this
        eventbus.on("reloadBar", function ({detail}) {
            me.viewRoot.empty()
            me.prepView()
        })
    }

    divName = "mainmenu"

    updateView() {
        const me = this

        function hideOrShow(page) {
            if (page.css('display') === 'none' || page.css("visibility") === "hidden") {
                page.show();
            } else {
                page.hide();
            }
        }

        function hideOther() {
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
        $('.logout-view').on("click", function (event) {
            me.globalState.user = new User("nonlogged", "", new Role("nonLogged"))
            state.login = false
            eraseCookie("login")
            eraseCookie("token")
            eventbus.emit("reloadPage", {})
        })

        super.updateView();
    }

    insertView() {
        const cookies = getCookie("login")

        if (this.DEV) {
            this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
                "  <div class='navbar-brand'>" +
                "    <a class='navbar-item shop-view' >Shop</a>" +
                "    <a class=\"navbar-item cart-view \" >Cart</a>" +
                "    <a class=\"navbar-item login-view \" >Login</a>" +
                "    <a class=\"navbar-item useradd-view \" >Add User</a>" +
                "    <a class=\"navbar-item productadd-view \" >Add Product</a>" +
                "    <a class=\"navbar-item user-view reload \" >User Management</a>" +
                "    <a class=\"navbar-item admin-view reload\" >Product Management</a>" +
                "    <a class=\"navbar-item order-view reload\" >Order Management</a>" +
                "    <a class=\"navbar-item logout-view\">Log out</a>" +
                "  </div>" +
                "</nav>");
        } else {
            if (this.globalState.user.isNonLogged()) {
                this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
                    "  <div class='navbar-brand'>" +
                    "    <a class=\"navbar-item login-view \" onclick=''>Login</a>" +
                    "    <a class=\"navbar-item useradd-view \" onclick=''>Add User</a>" +
                    "  </div>" +
                    "</nav>");
            } else if (this.globalState.user.isUser() && cookies) {
                this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
                    "  <div class='navbar-brand'>" +
                    "    <a class='navbar-item shop-view' onclick=''>Shop</a>" +
                    "    <a class=\"navbar-item cart-view \" onclick=''>Cart</a>" +
                    "    <a class=\"navbar-item order-view\" onclick=''>Order Management</a>" +
                    "    <a class=\"navbar-item logout-view\" onclick=''>Log out</a>" +
                    "  </div>" +
                    "</nav>");
            } else if ((this.globalState.user.isAdmin() && cookies)) {
                this.viewRoot.append("<nav class='navbar' role='navigation' aria-label='main navigation'>" +
                    "  <div class='navbar-brand'>" +
                    "    <a class='navbar-item shop-view' onclick=''>Shop</a>" +
                    "    <a class=\"navbar-item cart-view \" onclick=''>Cart</a>" +
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
    }
}
