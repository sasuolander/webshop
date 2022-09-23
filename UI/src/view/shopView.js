import View from "./view";
import $ from "jquery";
import {getProducts} from "../backend/backend";

export default class ShopView extends View {
    state;

    constructor() {
        super();
    }

    divName = "shopView"
    visibleInitially = false

    product = []

    async prepView() {
        const me = this
        if (!me.initBoolean) {
            throw Error("View is not initialised.")
        } else {
            me.insertView();
            await me.insertInitialData()
            await me.updateView();
        }
    }

    async updateView() {
        const me = this

        const car = function (id, name, price, url, props, additionalInfo) {
            return "<div class='tile is-paren shopView'><div class='car'>" +
                "<div class='card-imag'>" +
                "<figure class='image is-4by'>" +
                `<img src='${props.img}' alt='${props.imgText}'>` +
                "</figure>" +
                "</div>" +
                "<div class='card-conten'>" +
                "<div class='medi'>" +
                "<div class='media-lef'>" +
                "<figure class='image is-48x4'>" +
                `<img src='${props.img}' alt='${name}'>` +
                "</figure>" +
                "</div>" +
                "<div class='media-conten'>" +
                `<p class='title is- product-name'>${name}</p>` +
                `<p class='subtitle is-'>${props.text}</p>` +
                "</div>" +
                "</div>" +
                "" +
                `<div class='conten'>${props.imgText}</div>` +
                "</div>" +
                `<div class=\"modal additional-info-modal-${id}\">` +
                "  <div class=\"modal-background\"></div>\n" +
                "  <div class=\"modal-content\">\n" +
                " <div class=\"message-header\">" +
                `  ${additionalInfo}` +
                " </div>"
                +
                "  </div>\n" +
                `  <button class=\"modal-close is-large\" aria-label=\"close\" data-id = '${id}' ></button>` +
                "</div>" +
                " <footer class='card-foote'>" +
                `<a class ='card-footer-ite add-to-car'  data-id = '${id}'>Add to car, price: ${price}</a>` + "<br>" +
                `<a class ='card-footer-ite additional-info'  data-id = '${id}'>Additional info</a>` + "<br>" +
                " </footer>" +
                "</div></div>"
        }

        me.product = await getProducts()

        me.product = me.product.data.map((r) => {
            return {productId: r.id, name: r.name, additionalInfo: r.additionalInfo, price: r.price}
        })
        me.product.forEach(item => {
            item.userId = this.globalState?.user?.id
            item.url = "/something"
            item.props = {img: "", imgText: "", text: "car is new"}
        })

        me.product.forEach(function (item) {
            $(".is-ancesto").append(car(item.productId, item.name, item.price, item.url, item.props, item.additionalInfo))
        })


        $(".tile .is-paren .add-to-car").on("click", function (event) {
                const id = event.currentTarget.dataset.id
                const product = me.product.find(function (item) {
                    return item.productId === Number(id)
                })
                me.globalState.carts.addToCarts(product)
            }
        )
        $(".tile .is-paren .additional-info").on("click", function (event) {
                const id = event.currentTarget.dataset.id
                $(`.additional-info-modal-${id}`).addClass("is-active")
            }
        )
        $(".tile .is-paren .modal-close").on("click", function (event) {
                const id = event.currentTarget.dataset.id
                $(`.additional-info-modal-${id}`).removeClass("is-active")
            }
        )
    }

    insertView() {
        this.viewRoot.append("<section class='section'>" +
            "  <div class='containe'>" +
            " <div class='tile is-ancesto'>" +
            "</div>" + "</div>" +
            "</section>")
    }
}
