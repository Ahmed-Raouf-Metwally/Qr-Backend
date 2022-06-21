const mongoose = require("mongoose");

const S_AdminSchema = new mongoose.Schema({
    ID :{type:Number, required:true, unique:true},
    Name :{type:String , required:true},
    Email:{type:String ,require, unique:true},
    Password :{type:String, required:true},
    Role :{type:Number, required:true , default: 1},
    LogedIn :{type: Boolean, required:true , default:false}
},{
    timestamps : true
})

const S_AdminModel =mongoose.model('SuperAdmin',S_AdminSchema)

module.exports = S_AdminModel;