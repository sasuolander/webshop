import TableView from "./tableView";
import {deleteProduct, getProducts, updateProduct} from "../backend/backend";

export default class ProductManagementView extends TableView {
    constructor() {
        super();
        this.divName = "productManagement"
        this.tableId = `table-${this.divName}`
    }


    headers = ["Id", "Name", "Price", "Additional Info"]

    data

    visibleInitially = false

    async insertInitialData() {
        const me = this
        const data = await getProducts()
        me.data = data?.data.map((r) => {
            return [r.id, r.name, r.price, r.additionalInfo]
        })
    }

    async reloadInternalTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["Id", "Name", "Price", "Additional-Info"]
        await me.prepViewInternal()
    }

    async reloadTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["Id", "Name", "Price", "Additional-Info"]
        me.prepView()
    }

    updateView() {
        super.updateView()
        const me = this
        $('.admin-view').on("click", async function (event) {
            const data = await getProducts()
            me.data = data.data.map((r) => {
                return [r.id, r.name, r.price, r.additionalInfo]
            })
            await me.reloadInternalTable()
        })
    }

    async update(event, rowId) {
        const me = this
        super.update(event, rowId);
        const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
        const name = $(`.${this.tableId} .column-name-${rowId}`).text()
        const price = $(`.${this.tableId} .column-price-${rowId}`).text()
        const additionalInfo = $(`.${this.tableId} .column-additional-info-${rowId}`).text()
        await updateProduct(id, name, additionalInfo, price)
        await me.reloadTable()
    }

    async delete(event, rowId) {
        const me = this
        super.delete(event, rowId);
        const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
        deleteProduct(id)
        await me.reloadTable()
    }

}
