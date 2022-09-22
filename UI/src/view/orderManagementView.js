import TableView from "./tableView";
import {deleteOrder, getOrders, updateOrder} from "../backend/backend";

export default class OrderManagementView extends TableView {

   admin = false

    constructor() {
        super();
         if (this.globalState?.user[0].role.role === "admin"){
             this.admin = true
         }
        this.divName = "orderManagement"
        this.tableId = `table-${this.divName}`
    }


    headers = ["Id","productId", "UserId"]

    data

    visibleInitially = false

    async insertInitialData() {
        const me = this
        const data = await getOrders()
        const dataPrep = data?.data.map((r) => {return [r.id, r.productId, r.userId]})
        me.data = dataPrep
    }

    async reloadTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["Id","productId", "UserId"]
        me.prepView()
    }

    updateView() {
        super.updateView()
    }

    async update(event, rowId) {
        const me = this
        super.update(event, rowId);
        const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
        const productid = parseInt($(`.${this.tableId} .column-productid-${rowId}`).text())
        const userid = parseInt($(`.${this.tableId} .column-userid-${rowId}`).text())
        updateOrder(id,productid,userid)
        await me.reloadTable()
    }

    async delete(event, rowId) {
        const me = this
        super.delete(event, rowId);
        const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
        console.log(id)
        deleteOrder(id)
        await me.reloadTable()
    }


}
