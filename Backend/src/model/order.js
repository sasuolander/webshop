module.exports = class Order {
    id = 0;
    userId = 0;
    productId = 0;

    constructor(id, userId, productId) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
    }
}
