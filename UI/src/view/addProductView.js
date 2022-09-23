import View from "./view";
import {addProduct} from "../backend/backend";

export default class AddProductView extends View {

    divName = "addProductView"
    visibleInitially = false

    updateView() {
        $(".addProductView .add-product-button").click(
            function addUserButton(event) {
                const parameter = $("#addProductView :input").serializeArray()

                const name = parameter[0].value
                const price = parameter[1].value
                const additionalInfo = parameter[2].value

                addProduct(name, additionalInfo, price)
            })
    }

    insertView() {
        this.viewRoot.append(
            "<form class='addProductView'>" +
            "  <label for='productName'>Product name</label><br>" +
            "  <input type='text' id='productName' name='productName'><br>" +
            "  <label for='productPrice'>Product price</label><br>" +
            "  <input type='number' id='productPrice' name='productPrice'><br>" +
            "  <label for='productAdditionalInfo'>Additional Info</label><br>" +
            "  <input type='text' id='productAdditionalInfo' name='productAdditionalInfo'><br>" +
            "  <div class='field is-grouped'>" +
            "    <div class='control'>" +
            "        <button type='button' class='button add-product-button is-link'>Submit</button>" +
            "   </div>" +
            "  <div class='control'>" +
            "        <button type='button' class='button is-link is-light'>Cancel</button>" +
            "    </div>" +
            "  </div>" +
            "</form>");
    }
}

