const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
    id: {type: Number, index: {unique: true, sparse: true}},
    username: String,
    password: String,
    token: "",
    ttl: "",
    role: Object
})
userSchema.plugin(AutoIncrement, {id: 'user_counter', inc_field: 'id'})
userSchema.statics.deleteById = function (_id) {
    return this.deleteOne({id: _id})
};

const productSchema = new mongoose.Schema({
    id: {type: Number, index: {unique: true, sparse: true}},
    name: String,
    price: Number,
    additionalInfo: String,
})

productSchema.plugin(AutoIncrement, {id: 'product_counter', inc_field: 'id'})
productSchema.statics.deleteById = function (_id) {
    return this.deleteOne({id: _id})
};

const orderSchema = new mongoose.Schema({
    id: {type: Number, index: {unique: true, sparse: true}},
    name: String,
    productId: Number,
    userId: Number
})

orderSchema.plugin(AutoIncrement, {id: 'order_counter', inc_field: 'id'})
orderSchema.statics.deleteById = function (_id) {
    return this.deleteOne({id: _id})
};


module.exports = {
    OrderModel: mongoose.model('OrderModel', orderSchema),
    ProductModel: mongoose.model('ProductModel', productSchema),
    UserModel: mongoose.model('UserModel', userSchema),
    tokenSchema: mongoose.model('UserModel', userSchema),
};
