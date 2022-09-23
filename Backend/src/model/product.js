module.exports = class Product {
    id = 0;
    name = "";
    additionalInfo = "";
    price = 0;

    constructor(id, name, additionalInfo, price) {
        this.id = id;
        this.name = name;
        this.additionalInfo = additionalInfo;
        this.price = price;
    }
}
