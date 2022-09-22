import $ from "jquery";

export default class View {
    globalState
    state = {}
    divName = ""
    viewRoot
    visibleInitially = true
    initBoolean = false

    constructor() {}

    insertInitialData(){}

    init(state){
        this.viewRoot = $(`#${this.divName}`)
        this.globalState = state
        this.initBoolean = true
        this.prepView()
        return this
    }

    renderRoot(){
        if (this.visibleInitially){
            return `<div id=${this.divName}><div>`
        }else {
            return `<div id=${this.divName} style=\"display: none;\"><div>`
        }

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
