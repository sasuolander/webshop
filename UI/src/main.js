import './styles.scss';
import $ from 'jquery';
import addUser from './view/AddUser'
import GlobalState from './globalState'

const state = new GlobalState()

$("#root")
    .append(addUser(state).element)
    .append("<div className='buttons'> <a className='button is-primary'>Primary</a> <a className='button is-link'>Link</a> </div>")


