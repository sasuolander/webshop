import './styles.scss';
import $ from 'jquery';
import AddUserClass from './view/AddUser'
import GlobalStateClass from './globalState'
import LoginViewClass from "./view/login";
import AdminPanelClass from "./view/adminPanel";
import ShopViewClass from "./view/shopView";
import MainMenuBarClass from "./view/mainmenubar";

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

AddUser.init().insertView()
AdminPanel.init().insertView()
LoginView.init().insertView()
ShopView.init().insertView()
MainMenu.init().insertView()
