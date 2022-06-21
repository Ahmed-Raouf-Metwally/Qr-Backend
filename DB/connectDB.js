const mongoose = require("mongoose");
require('dotenv').config()
////////////////////////////////////////////////////////////////////////////////////////////////
////////////Cloud DB
/////////////////////////////////////////////////////////////////////////////////////////////


const connectDB = async () => {
    return await mongoose.connect(process.env.Mongo_Atlas_Connection_Str).then((result) => {
        console.log("DB(Mongo_Atlas) Connected")
    }).catch((err) => {
        console.log("connection DB Error",err)
    })   
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////Local DB
/////////////////////////////////////////////////////////////////////////////////////////////
// const connectDB = async () => {
//          return await mongoose.connect('mongodb://localhost:27017/QR-Back').then((result) => {
//              console.log("DB Connected")
//          }).catch((err) => {
//              console.log("connection DB Error")
//          })
//      }
module.exports = {
    connectDB
}