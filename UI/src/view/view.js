import $ from "jquery";

export default class View {
    state = {}
    divName = ""
    viewRoot
    constructor() {}

    init(){
        this.viewRoot =  $(`#${this.divName}`)
        return this
    }

    renderRoot(){
        return `<div id=${this.divName}><div>`
    }

    insertView () {
      // insert your view
     }
}
