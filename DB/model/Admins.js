const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    ID :{type:Number, required:true, unique:true},
    Name :{type:String , required:true},
    Email:{type:String ,require , unique:true},
    Password :{type:String, required:true},
    Role :{type:Number, required:true , default: 2},
    LogedIn :{type: Boolean, required:true , default:false}
},{
    timestamps : true
})

const AdminModel =mongoose.model('Admin',AdminSchema)

module.exports = AdminModel;