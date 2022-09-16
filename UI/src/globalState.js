// global state for application, inject into every component or rerieve it from globally,
// event buss ?


class Carts {
    carts = []
    addToCarts(item){

       const oldItem =this.carts.find(function (itemInList) {
            return itemInList.id === Number(item.id)
        })
        if(typeof oldItem === "undefined"){
            this.carts.push(item)
        }
        console.log(this.carts)
    }

    removeFromCarts(productID) {
        this.carts = this.carts.filter(function (item) {
            return item.id !== productID
        })
    }
}


export default class GlobalState {

    carts = new Carts()
    user = []
    login = false

    constructor(ars) {}

}
