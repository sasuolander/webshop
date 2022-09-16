import TableView from "./tableView";

export default class UserManagementView extends TableView {
    visibleInitially = false
    constructor() {
        super();
        this.divName = "userManagementView"
        this.tableId = `table-${this.divName}`
    }
    headers =["Id","Name"]

    data =  [
        [
            1, "tom"
        ],
        [
            2,"juha"
        ]  ,
        [
            3, "timi"
        ],
        [
            4, "farno",
        ],
        [   5, "tieru", ]]

    update(event) {
        super.update(event);
    }
    delete(event) {
    super.delete(event);
    }
}
