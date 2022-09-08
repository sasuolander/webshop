const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const sandwichSchema = new mongoose.Schema({
    id: { type: Number, index: { unique: true, sparse: true }},
    name: String,
    toppings: Array,
    breadType: String,
    imageUrl: String,
    price: Number,
})

sandwichSchema.plugin(AutoIncrement,{id:'sandwich_counter',inc_field: 'id'})

const toppingSchema = new mongoose.Schema({
    id: { type: Number, index: { unique: true, sparse: true }},
    name: String
})

toppingSchema.plugin(AutoIncrement,{id:'topping_counter',inc_field: 'id'})
const userSchema = new mongoose.Schema({
    id: { type: Number,  index: { unique: true, sparse: true }},
    username: String,
    email: String,
    password: String,
})
userSchema.plugin(AutoIncrement,{id:'user_counter',inc_field: 'id'})

/**
 * Status: "ordered", "received", "inQueue", "ready", "failed"
 */
const orderSchema = new mongoose.Schema({
    id: {type: Number, index: {unique: true, sparse: true}},
    sandwichId: Number,
    status: String,
});
orderSchema.plugin(AutoIncrement,{id:'order_counter',inc_field: 'id'})
const apiKeySchema = new mongoose.Schema({
    key: String,
})

sandwichSchema.statics.deleteById = function(_id) {
    return this.deleteOne({ id: _id })
};

toppingSchema.statics.deleteById = function(_id) {
    return this.deleteOne({ id: _id })
};

orderSchema.statics.deleteById = function(_id) {
    return this.deleteOne({ id: _id })
};

apiKeySchema.statics.deleteById = function(_id) {
    return this.deleteOne({ id: _id })
};

module.exports = {
    SandwichModel: mongoose.model('SandwichModel', sandwichSchema),
    ToppingModel: mongoose.model('ToppingModel', toppingSchema),
    OrderModel: mongoose.model('OrderModel', orderSchema),
    UserModel: mongoose.model('UserModel', userSchema),
    ApiKeyModel: mongoose.model('ApiKeyModel', apiKeySchema)
};
