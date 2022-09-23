import View from "./view";

export default class TableView extends View {
    constructor() {
        super();
    }

    headers = []
    data = []

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

    reloadTable() {
    }

    insertInitialData() {
    }

    update(event, rowId) {
        // insert your update logic
    }

    delete(event, rowId) {
        // insert your delete logic
    }

    async updateView() {
        const me = this
        const headerTemplate = function (name) {
            return `<th>${name}</th>`
        }
        const classTable = `.${this.tableId}`
        const dataRowElement = function (value, field, iteration) {
            return `<td contenteditable="true" class='${classTable} column-${field}-${iteration}' data-id=${value}  >${value}</td>`
        }
        const dataRowElementNoEdit = function (value, field, iteration) {
            return `<td class='${classTable} column-${field}-${iteration}' >${value}</td>`
        }
        const updateRowElement = function (value, iteration) {
            return `<td class='${classTable} update-button update-row-${iteration}' type="button"> <button>${value}</button></td>`
        }
        const deleteRowElement = function (value, iteration) {
            return `<td class='${classTable} delete-button delete-row-${iteration}'><button>${value}</button></td>`
        }
        const dataRow = function (iteration) {
            return `<tr class='${classTable} data-row data-row-${iteration}'></tr>`
        }

        me.headers.push("Update")
        me.headers.push("Delete")

        me.data?.map(function (element) {
            if (typeof element !== "undefined" && element !== null) {
                if (element.toString().match(/Update/g) == null) {
                    if (element.toString().match(/Update/g) !== null && element.toString().match(/Update/g).length === 0) {
                        element.push("Update");return
                    }
                    element.push("Update")
                }
                if (element.toString().match(/Delete/g) == null) {
                    if (element.toString().match(/Delete/g) !== null && element.toString().match(/Delete/g).length === 0) {
                        element.push("Delete");return
                    }
                    element.push("Delete")
                }
            }

        })

        me.headers.forEach(function (value) {
            $(`${classTable} .data-header-tr`).append(headerTemplate(value))
        })

        if (typeof me.data !== "undefined") {
            for (let i = 0; i < me.data.length; i++) {
                $(`${classTable} .data-body`).append(dataRow(i))
                for (let j = 0; j < me.data[i].length; j++) {
                    const element = me.data[i][j]

                    if (element === "Update") {
                        $(`${classTable} .data-row-${i}`).append(updateRowElement(element, i))

                        $(`${classTable} .update-row-${i}`).on("click", function (event) {
                            me.update(event, i)
                        })

                    } else if (element === "Delete") {
                        $(`${classTable} .data-row-${i}`).append(deleteRowElement(element, i))
                        $(`${classTable} .delete-row-${i}`).on("click", function (event) {
                            me.delete(event, i)
                        })

                    } else if (j === 0) {
                        $(`${classTable} .data-row-${i}`).append(dataRowElementNoEdit(element, me.headers[j].toLowerCase(), i))
                    } else {
                        $(`${classTable} .data-row-${i}`).append(dataRowElement(element, me.headers[j].toLowerCase(), i))
                    }
                }
            }
        }
    }

    insertView() {
        this.viewRoot.append(
            `<table class=\"${this.tableId} table table-striped\">` +
            `<thead class='${this.tableId} data-header'><tr class='${this.tableId} data-header-tr'> </tr></thead>` +
            `<tbody class='${this.tableId} data-body' ></tbody>` +
            "</table>" + "<div id ='tableEndButton' ></div>");
    }
}
