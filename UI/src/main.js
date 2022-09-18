import './styles.scss';
import $ from 'jquery';
import AddUserClass from './view/AddUserView'
import GlobalStateClass from './globalState'
import LoginViewClass from "./view/loginView";
import ProductManagementViewClass from "./view/productManagementView";
import ShopViewClass from "./view/shopView";
import MainMenuBarClass from "./view/mainMenuBarView";
import UserManagementViewClass from "./view/userManagementView";
import OrderManagementViewClass from "./view/orderManagementView";

export const urlBase = "http://127.0.0.1:3000/";

const state = new GlobalStateClass()

const {AddUser,ProductManagementView,LoginView,ShopView,MainMenu,UserManagementView,OrderManagementView} = {
    AddUser:new AddUserClass(),
    ProductManagementView:new ProductManagementViewClass(),
    LoginView:new LoginViewClass(),
    ShopView:new ShopViewClass,
    MainMenu:new MainMenuBarClass(),
    UserManagementView : new UserManagementViewClass(),
    OrderManagementView : new OrderManagementViewClass()
}

$("#root")
    .append(MainMenu.renderRoot())
    .append("<div id='container'></div>")
$("#container") .append(AddUser.renderRoot())
    .append(ProductManagementView.renderRoot())
    .append(LoginView.renderRoot())
    .append(ShopView.renderRoot())
    .append(UserManagementView.renderRoot())
    .append(OrderManagementView.renderRoot())

AddUser.init(state)
LoginView.init(state)
ShopView.init(state)
MainMenu.init(state)
UserManagementView.init(state)
ProductManagementView.init(state)
OrderManagementView.init(state)

