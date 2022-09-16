import View from "./view";

export default class AddProductView extends View {

    divName = "addProductView"
    visibleInitially = false
    insertView() {
        this.viewRoot.append(
            "<form class='addProductView'>" +
            "  <label for='productName'>Product name</label><br>" +
            "  <input type='text' id='productName' name='productName'><br>" +
            "  <label for='productPrice'>Product price</label><br>" +
            "  <input type='number' id='productPrice' name='productPrice'>" +
            "  <div className='field is-grouped'>" +
            "    <div className='control'>" +
            "        <button type='button' className='button is-link'>Submit</button>" +
            "   </div>" +
            "  <div className='control'>" +
            "        <button type='button' className='button is-link is-light'>Cancel</button>" +
            "    </div>" +
            "  </div>" +
            "</form>");
    }
}

