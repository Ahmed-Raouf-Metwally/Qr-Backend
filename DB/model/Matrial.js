const mongoose = require("mongoose");
const MatrialSchema = new mongoose.Schema({
    ID :{type:Number, required:true},
    Name :{type:String , required:true},
    Code:{type:String ,require:true},
    Level:{type:Number,required:true},
    topics :{type:[String], required:true , default:null}
},{
    timestamps : true
})

const matrialModel =mongoose.model('Matrial',MatrialSchema)

module.exports = matrialModel;