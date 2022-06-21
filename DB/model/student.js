const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    ID: { type: Number, required: true, unique:true },
    Name: { type: String, required: true },
    Email: { type: String, require , unique:true},
    Level: { type: Number, required: true },
    Password: { type: String, required: true },
    Role: { type: Number, required: true, default: 4 },
    Subjects :{type:[String], required:false , default:null},
    LogedIn: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
})

const studentModel = mongoose.model('Student', studentSchema)

module.exports = studentModel;