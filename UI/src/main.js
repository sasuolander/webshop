import './styles.scss';
import $ from 'jquery';
import AddUserClass from './view/AddUserView'
import GlobalStateClass from './globalState'
import LoginViewClass from "./view/loginView";
import ProductManagementViewClass from "./view/productManagementView";
import ShopViewClass from "./view/shopView";
import MainMenuBarClass from "./view/mainMenuBarView";
import UserManagementViewClass from "./view/userManagementView";

const state = new GlobalStateClass()

const {AddUser,ProductManagementView,LoginView,ShopView,MainMenu,UserManagementView} = {
    AddUser:new AddUserClass(),
    ProductManagementView:new ProductManagementViewClass(),
    LoginView:new LoginViewClass(),
    ShopView:new ShopViewClass,
    MainMenu:new MainMenuBarClass(),
    UserManagementView : new UserManagementViewClass()
}

$("#root")
    .append(MainMenu.renderRoot())
    .append("<div id='container'></div>")
$("#container") .append(AddUser.renderRoot())
    .append(ProductManagementView.renderRoot())
    .append(LoginView.renderRoot())
    .append(ShopView.renderRoot())
    .append(UserManagementView.renderRoot())

AddUser.init(state)
LoginView.init(state)
ShopView.init(state)
MainMenu.init(state)
UserManagementView.init(state)
ProductManagementView.init(state)

