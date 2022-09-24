import './styles.scss';
import $ from 'jquery';
import AddUserClass from './view/AddUserView'
import AddProductClass from './view/addProductView'
import GlobalStateClass from './globalState'
import LoginViewClass from "./view/loginView";
import ProductManagementViewClass from "./view/productManagementView";
import ShopViewClass from "./view/shopView";
import MainMenuBarClass from "./view/mainMenuBarView";
import UserManagementViewClass from "./view/userManagementView";
import OrderManagementViewClass from "./view/orderManagementView";
import CartManagementViewClass from "./view/cartManagementView";
import EventBus from "./EventBus";

export const urlBase = process.env.ENDPOINT;

export const state = new GlobalStateClass()
export const eventbus = new EventBus("buss")
const {
    AddUser,
    AddProduct,
    ProductManagementView,
    LoginView,
    ShopView,
    MainMenu,
    UserManagementView,
    OrderManagementView,
    CartManagement
} = {
    AddUser: new AddUserClass(),
    AddProduct: new AddProductClass(),
    ProductManagementView: new ProductManagementViewClass(),
    LoginView: new LoginViewClass(),
    ShopView: new ShopViewClass,
    MainMenu: new MainMenuBarClass(),
    UserManagementView: new UserManagementViewClass(),
    OrderManagementView: new OrderManagementViewClass(),
    CartManagement: new CartManagementViewClass()
}

eventbus.on("reloadPage", function ({detail}) {
    $("#root").empty()
    start()
})

function start() {
    $("#root")
        .append(MainMenu.renderRoot())
        .append("<div id='container'></div>")
    $("#container").append(AddUser.renderRoot())
        .append(ProductManagementView.renderRoot())
        .append(LoginView.renderRoot())
        .append(ShopView.renderRoot())
        .append(UserManagementView.renderRoot())
        .append(OrderManagementView.renderRoot())
        .append(AddProduct.renderRoot())
        .append(CartManagement.renderRoot())
    MainMenu.init(state)
    AddUser.init(state)
    LoginView.init(state)
    ShopView.init(state)
    UserManagementView.init(state)
    ProductManagementView.init(state)
    OrderManagementView.init(state)
    AddProduct.init(state)
    CartManagement.init(state)
}

start()
