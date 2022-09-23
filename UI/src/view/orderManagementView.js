import TableView from "./tableView";
import {deleteOrder, getOrders, getOrdersByUserId, updateOrder} from "../backend/backend";

export default class OrderManagementView extends TableView {

    admin = false

    constructor() {
        super();
        if (this.globalState?.user[0].role.role === "admin") {
            this.admin = true
        }
        this.divName = "orderManagement"
        this.tableId = `table-${this.divName}`
    }

    headers = ["Id", "productId", "UserId"]

    data

    visibleInitially = false

    async filter() {
        if (this.globalState?.user.isAdmin()) {
            return getOrders()
        } else {
            return getOrdersByUserId(this.globalState?.user?.id)
        }
    }

    async insertInitialData() {
        const me = this
        const data = await me.filter(me)
        if (typeof data.data.length !== "undefined") {
            me.data = data?.data.map((r) => {
                return [r.id, r.productId, r.userId]
            })
        }

    }

    async reloadTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["Id", "productId", "UserId"]
        me.prepView()
    }

    async reloadInternalTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["Id", "productId", "UserId"]
        await me.prepViewInternal()
    }

    updateView() {
        super.updateView()
        const me = this
        $('.order-view').on("click", async function (event) {
            const data = await me.filter(me)
            if (typeof data.data.length !== "undefined") {
                me.data = data?.data.map((r) => {
                    return [r.id, r.productId, r.userId]
                })
            }
            await me.reloadInternalTable()
        })
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

    async update(event, rowId) {
        if (this.globalState?.user.isAdmin()) {
            const me = this
            super.update(event, rowId);
            const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
            const productid = parseInt($(`.${this.tableId} .column-productid-${rowId}`).text())
            const userid = parseInt($(`.${this.tableId} .column-userid-${rowId}`).text())
            updateOrder(id, productid, userid)
            await me.reloadTable()
        }

    }

    async delete(event, rowId) {
        const me = this
        super.delete(event, rowId);
        const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
        deleteOrder(id)
        await me.reloadTable()
    }
}
