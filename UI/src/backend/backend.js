import {state, urlBase} from "../main";
import {User} from "../model/user";
import {Product,Order} from "../model/product";
import {Role} from "../model/role";

const axios = require('axios').default;

export const authHeaders = function (username,password){
    return  {
        username: username,
        password: password
    }
}

export function updateRequest(url)  {
    axios.get(url)
}

export function getRequest(url,config)  {
    return axios.get(url,config).then(r => r)
}
export function loginBasic(username,password){
    getRequest(urlBase + "login", {
        auth: authHeaders(username,password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    }).then(r  =>{
        document.cookie="login=true"
        state.login = true
        state.user = new User().createUser(username, new Role(role))
    })
}


export function addUser(username,password,role){
    const user = new User(username,password, new Role(role))
    insertRequest(urlBase + "user", user, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}

export function addProduct(username,password,role){
    const user = new Product()
    insertRequest(urlBase + "login", user, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}

export function addOrder(username,password,role){
    const user = new Order()
    insertRequest(urlBase + "login", user, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}


export  function deleteRequest(url,config)  {
    return axios.delete(url,config).then(r => r)
}

export function insertRequest(url,data,config)  {
    return axios.post(url,data,config).then(r => r)

}

