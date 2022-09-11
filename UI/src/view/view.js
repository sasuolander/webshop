import $ from "jquery";

export default class View {
    state = {}
    divName = ""
    viewRoot
    initBoolean = false

    constructor() {}

    init(){
        this.viewRoot =  $(`#${this.divName}`)
        this.initBoolean = true
        this.prepView()
        return this
    }

    renderRoot(){
        return `<div id=${this.divName}><div>`
    }

    prepView(){
        if (!this.initBoolean){
            throw Error("View is not initialised.")
        }else {
            this.insertView();
            this.updateView();
        }
    }

    insertView () {
        // insert your view
    }

    updateView(){
        // insert your business logic or dom manipulation
    }
}
