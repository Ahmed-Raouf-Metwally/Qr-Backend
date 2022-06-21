const Student = require("../../../DB/model/student")
const Topics = require("../../../DB/model/Topics")
const Matrial = require("../../../DB/model/Matrial")

const getStmat =  async (req, res, next) =>{
    const Mat = { sID } = req.body

    const student = await Student.findOne({ ID: sID })
    if (!student) {
        res.json(" student is not added before ")
    }
     else {
        if(student.Subjects) {
        Student.findOne({ ID: sID })
        res.json({ Subjects: student.Subjects })
        
    } else {
        res.json({ error })
        console.log(error)
    }
}
}
const getStAlltopic =  async (req, res, next) =>{
    const topicmat = { MId } = req.body
    const top = await Topics.find({Mat_ref:MId})
    if (!top){
        res.json("topic is not here")
    }
    if(top){
        const Str = await Topics.find({Mat_ref:MId})
        res.json({message:'done',Str})
    } else {
        res.json({ error })
        console.log(error)
    }   
}
const getStonetopic =  async (req, res, next) =>{
    const topicmat = { MId } = req.body
    const top = await Topics.findById({_id:MId})
    if (!top){
        res.json("topic is not here")
    }
    if(top){
        const Str = await Topics.findById({_id:MId})
        res.json({message:'done',Str})
    } else {
        res.json({ error })
        console.log(error)
    }   
}

module.exports = {
    getStmat,
    getStAlltopic,
    getStonetopic
}