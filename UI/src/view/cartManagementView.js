import TableView from "./tableView";
import {addOrder} from "../backend/backend";

export default class CartManagementView extends TableView {

    constructor() {
        super();
        this.divName = "cartManagement"
        this.tableId = `table-${this.divName}`
    }

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

    async prepViewInternal() {
        const me = this
        if (!me.initBoolean) {
            throw Error("View is not initialised.")
        } else {
            me.insertView();
            await me.updateView();

        }
    }

    headers = ["uniqueid", "ProductId", "userid", "Price"]

    data

    visibleInitially = false

    async insertInitialData() {
        const me = this
        const data = me.globalState.carts.getCarts()
        const dataPrep = data.map((r) => {
            return [r.internalId, r.productId, r.userId, r.price]
        })
        me.data = dataPrep
    }

    async reloadTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["uniqueid", "ProductId", "userid", "Price"]
        me.prepView()
    }

    async reloadInternalTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["uniqueid", "ProductId", "userid", "Price"]
        await me.prepViewInternal()
    }

    updateView() {
        const me = this
        super.updateView()
        $('#cartManagement #tableEndButton').append("<div><button type='button' class='buying-button button is-link'>Buying</button></div>")

        $('#cartManagement .buying-button').on("click", function (event) {
            const data = me.globalState.carts.getCarts()
            data.map((r) => {
                return addOrder({productId: r.productId, userId: r.userId})
            });
        })
        $('.cart-view').on("click", async function (event) {

            const data = me.globalState.carts.getCarts()
            me.data = data.map((r) => {
                return [r.internalId, r.productId, r.userId, r.price]
            })
            await me.reloadInternalTable()
        })
    }

    async delete(event, rowId) {
        const me = this
        super.delete(event, rowId);
        const id = $(`.${this.tableId} .column-uniqueid-${rowId}`).text()
        me.globalState.carts.removeFromCarts(id)
        await me.reloadTable()
    }


}
