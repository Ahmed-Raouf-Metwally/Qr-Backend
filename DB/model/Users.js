const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    ID: { type: Number, required: true, unique:true },
    Email: { type: String, require , unique:false},
    Password: { type: String, required: true },
    Role: { type: Number, required: true },
}, {
    timestamps: true
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel;