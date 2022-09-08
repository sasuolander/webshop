const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
    id: { type: Number,  index: { unique: true, sparse: true }},
    username: String,
    email: String,
    password: String,
})
userSchema.plugin(AutoIncrement,{id:'user_counter',inc_field: 'id'})


userSchema.statics.deleteById = function(_id) {
    return this.deleteOne({ id: _id })
};

module.exports = {
    UserModel: mongoose.model('UserModel', userSchema),
};
