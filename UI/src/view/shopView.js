import View from "./view";

export default class ShopView extends View {
    state;

    constructor() {
        super();
    }

    divName = "shopView"
    visibleInitially = false

    updateView() {
        const classContex = this

        const popup = function (additionalInfo){

        }

        const car = function (id, name, price, url, props) {
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
                " <footer class='card-foote'>" +
                `<a href =${url} class ='card-footer-ite'>${props.imgText}</a>` +
                `<a class ='card-footer-ite add-to-car'  data-id = '${id}'>Add to car, price: ${price}</a>` +
                `<a class ='card-footer-ite add-to-car'  data-id = '${id}'>Additional info</a>` +
                " </footer>" +
                "</div></div>"
        }

        const products = [
            {
                id: 1, name: "car1",
                price: 20,
                additionalInfo: "this is red",
                url: "/something",
                props: {img: "", imgText: "", text: "car is new"}
            },
            {
                id: 2, name: "car2",
                price: 20,
                additionalInfo: "this is out of stock",
                url: "/something",
                props: {img: "", imgText: "", text: "car is new"}
            },
            {
                id: 3, name: "car3",
                price: 20,
                additionalInfo: "this is purple",
                url: "/something",
                props: {img: "", imgText: "", text: "car is new"}
            },
            {
                id: 4, name: "car4",
                price: 20,
                additionalInfo: "this is blue",
                url: "/something",
                props: {img: "", imgText: "", text: "car is new"}
            },

        ]
        products.forEach(function (item) {
            $(".is-ancesto").append(car(item.id, item.name, item.price, item.url, item.props))
        })

        $(".tile .is-paren .add-to-car").on("click", function (event) {
                const id = event.currentTarget.dataset.id
                const product = products.find(function (item) {
                    return item.id === Number(id)
                })
                classContex.globalState.carts.addToCarts(product)
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
