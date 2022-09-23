import TableView from "./tableView";
import {deleteUser, getUsers, updateUser} from "../backend/backend";

export default class UserManagementView extends TableView {
    visibleInitially = false

    constructor() {
        super();
        this.divName = "userManagementView"
        this.tableId = `table-${this.divName}`
    }

    headers = ["Id", "Name", "Role"]
    data

    async insertInitialData() {
        const me = this
        const data = await getUsers()
        me.data = data?.data.map((r) => {
            return [r.id, r.username, r.role.role]
        })
    }

    async reloadTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["Id", "Name", "Role"]
        me.prepView()
    }

    async reloadInternalTable() {
        const me = this
        me.viewRoot.empty()
        me.headers = ["Id", "Name", "Role"]
        await me.prepViewInternal()
    }

    updateView() {
        super.updateView()
        const me = this
        $('.user-view').on("click", async function (event) {
            const data = await getUsers()
            me.data = data.data.map((r) => {
                return [r.id, r.username, r.role.role]
            })
            await me.reloadInternalTable()
        })
    }

    async update(event, rowId) {
        const me = this
        super.update(event, rowId);
        const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
        const name = $(`.${this.tableId} .column-name-${rowId}`).text()
        const roleName = $(`.${this.tableId} .column-role-${rowId}`).text()
        if (roleName === "admin" || roleName === "userNormal" || roleName === "nonLogged") {
            updateUser(id, name, roleName)
            await me.reloadTable()
        } else if (typeof roleName === "undefined") {
            console.debug("undefined")
        } else throw Error("Not valid user role")
    }

    async delete(event, rowId) {
        const me = this
        super.delete(event, rowId);
        const id = parseInt($(`.${this.tableId} .column-id-${rowId}`).text())
        deleteUser(id)
        await me.reloadTable()
    }

}
