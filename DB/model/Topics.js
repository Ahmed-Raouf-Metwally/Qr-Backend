const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    ID : { type: String, unique:false},
    Name: { type: String, require:true,unique:false },
    QR: { type: String, required: true },
    Mat_ref: { type: String, required: true },
}, {
    timestamps: true
})

const topicModel = mongoose.model('Topic', topicSchema)

module.exports = topicModel;