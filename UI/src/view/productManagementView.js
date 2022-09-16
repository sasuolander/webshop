import View from "./view";
import TableView from "./tableView";

export default class ProductManagementView extends TableView {
    constructor() {
        super();
        this.divName = "productManagement"
        this.tableId = `table-${this.divName}`
    }


    headers =["Id","Name"]

    data =  [
        [
            1, "car1"
        ],
        [
            2,"car2"
        ]  ,
        [
            3, "car3"
        ],
        [
            4, "car4",
        ],
        [   5, "car5", ]]

    visibleInitially = false



}
