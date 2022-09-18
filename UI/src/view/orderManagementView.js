import View from "./view";
import TableView from "./tableView";

export default class OrderManagementView extends TableView {
    constructor() {
        super();
        this.divName = "OrderManagement"
        this.tableId = `table-${this.divName}`
    }


    headers =["Id","Order"]

    data =  [
        [
            1, "Order1"
        ],
        [
            2,"Order2"
        ]  ,
        [
            3, "Order3"
        ],
        [
            4, "Order4",
        ],
        [   5, "Order5", ]]

    visibleInitially = false



}
