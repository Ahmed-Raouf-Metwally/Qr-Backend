const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    ID :{type:Number, required:true, unique:true},
    Name :{type:String , required:true},
    Email:{type:String ,require, unique:false},
    matrials :{type:[Number], required:true},
    Password :{type:String, required:true},
    Role :{type:Number, required:true , default: 3},
    Subjects :{type:[String], required:false , default:null},
    LogedIn :{type: Boolean, required:true , default:false}
},{
    timestamps : true
})

const doctorModel =mongoose.model('Doctor',DoctorSchema)

module.exports = doctorModel;