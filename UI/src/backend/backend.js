import {urlBase} from "../main";
import {User} from "../model/user";
import {Product} from "../model/product";
import {Role} from "../model/role";
import {Order} from "../model/order";
import getCookie from "../getCookie";

const axios = require('axios').default;

export const authHeaders = function (username, password) {
    return {
        username: username,
        password: password
    }
}

export function getRequest(url, config) {
    return axios.get(url, config).then(r => r)
}

export const getRequestDelegate = async (url, config) => {
    return await axios.get(url, config).catch(e => console.log(e))
}

export function loginBasic(username, password) {
    return getRequest(urlBase + "login", {
        auth: authHeaders(username, password), headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
}


export function addUser(username, password, role) {
    const user = new User(username, password, new Role(role))
    insertRequest(urlBase + "user", user, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    }).then(r => r)
}

export function getUsers() {
    return getRequestDelegate(urlBase + "users", {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    })
}

export function updateUser(id, username, role) {
    const user = new User(username, "", new Role(role))
    user.id = id
    insertRequest(urlBase + "user/update", user, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    }).then(r => r)
}

export function deleteUser(id) {
    deleteRequest(urlBase + "user", {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        },
        data: id
    }).then(r => r)
}

export function addProduct(name, additionalInfo, price) {
    const product = new Product(0, name, additionalInfo, price)
    insertRequest(urlBase + "product", product, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    }).then(r => r)
}

export function getProducts() {
    return getRequestDelegate(urlBase + "products", {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    })
}


export function updateProduct(id, name, additionalInfo, price) {
    const product = new Product(id, name, additionalInfo, price)
    insertRequest(urlBase + "product/update", product, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    }).then(r => r)
}

export function getOrders() {
    return getRequestDelegate(urlBase + "orders", {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    })
}

export function deleteProduct(id) {
    deleteRequest(urlBase + "product", {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token"),
        }, data: id
    }).then(r => r)
}

export function getOrdersByUserId(id) {
    return insertRequest(urlBase + "ordersByUserId", id, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token"),
        }
    })
}

export function updateOrder(id, userId, productId) {
    const order = new Order(id, userId, productId)
    insertRequest(urlBase + "order/update", order, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    }).then(r => r)
}

export function deleteOrder(id) {
    deleteRequest(urlBase + "order", {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token"),
        }, data: id
    }).then(r => r)
}

export function addOrder(order) {
    insertRequest(urlBase + "order", order, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': getCookie("token")
        }
    }).then(r => r)
}


export function deleteRequest(url, config) {
    return axios.delete(url, config).then(r => r)
}

export function insertRequest(url, data, config) {
    return axios.post(url, data, config).then(r => r)

}

