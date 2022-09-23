// global state for application, inject into every component or rerieve it from globally,
// event buss ?


import {Role} from "./model/role";
import {User} from "./model/user";

class Carts {
    carts = []

    getCarts(){
        return this.carts
    }
    addToCarts(item){
        if(typeof item !== "undefined"){
             const buided = {
                 internalId:window.crypto.randomUUID(),
                 productId:item.productId,
                 userId:item.userId,
                 price:item.price,
             }
            this.carts.push(buided)
        }
        console.log(this.carts)
    }

    removeFromCarts(productID) {
        console.log(this.carts.filter(function (item) {
            return item.internalId !== productID
        }))
        this.carts = this.carts.filter(function (item) {
            return item.internalId !== productID
        })
    }
}


export default class GlobalState {

    carts = new Carts()
    user = new User("nonlogged","",new Role("nonLogged"))
    login = false

    constructor(ars) {}

}
