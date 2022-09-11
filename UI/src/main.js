import './styles.scss';
import $ from 'jquery';
import AddUserClass from './view/AddUserView'
import GlobalStateClass from './globalState'
import LoginViewClass from "./view/loginView";
import AdminPanelClass from "./view/adminPanelView";
import ShopViewClass from "./view/shopView";
import MainMenuBarClass from "./view/mainMenuBarView";

const state = new GlobalStateClass()

const {AddUser,AdminPanel,LoginView,ShopView,MainMenu} = {
    AddUser:new AddUserClass(),
    AdminPanel:new AdminPanelClass(),
    LoginView:new LoginViewClass(),
    ShopView:new ShopViewClass(),
    MainMenu:new MainMenuBarClass()
}

$("#root")
    .append(MainMenu.renderRoot())
    .append("<div id='container'></div>")
$("#container") .append(AddUser.renderRoot())
    .append(AdminPanel.renderRoot())
    .append(LoginView.renderRoot())
    .append(ShopView.renderRoot())

AddUser.init()
AdminPanel.init()
LoginView.init()
ShopView.init()
MainMenu.init()
