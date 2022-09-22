import {state, urlBase} from "../main";
import {User} from "../model/user";
import {Product} from "../model/product";
import {Role} from "../model/role";
import {Order} from "../model/order";

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
export const getRequestDelegate = async (url, config) => {
    return await axios.get(url, config)
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
export function getUsers() {
    return getRequestDelegate(urlBase + "users", {
        /*auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }*/
    })
}
export function updateUser(id,username,role){
    const user = new User(username,"", new Role(role))
    user.id=id
    insertRequest(urlBase + "user/update", user, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}

export function deleteUser(id){
    deleteRequest(urlBase + "user", id, {
        /*auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },*/
        data:id
    }).then(r  =>r)
}

export function addProduct(name,additionalInfo,price){
    const product = new Product(0,name,additionalInfo,price)
    insertRequest(urlBase + "product", product, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}

export function getProducts() {
    return getRequestDelegate(urlBase + "products", {
        /*auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }*/
    })
}


export function updateProduct(id,name,additionalInfo,price){
    const product = new Product(id,name,additionalInfo,price)
    insertRequest(urlBase + "product/update", product, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}

export function deleteProduct(id){
    deleteRequest(urlBase + "product", id, {
        /*auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },*/
        data:id
    }).then(r  =>r)
}

export function getOrders() {
    return getRequestDelegate(urlBase + "orders", {
        /*auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }*/
    })
}

export function updateOrder(id, userId,productId){
    const order = new Order(id, userId,productId)
    insertRequest(urlBase + "order/update", order, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}

export function deleteOrder(id){
    deleteRequest(urlBase + "order", id, {
        /*auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },*/
        data:id
    }).then(r  =>r)
}

export function addOrder(order){
    insertRequest(urlBase + "order", order, {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(r  =>r)
}


export  function deleteRequest(url,payload,config)  {
    return axios.delete(url,config).then(r => r)
}

export function insertRequest(url,data,config)  {
    return axios.post(url,data,config).then(r => r)

}

