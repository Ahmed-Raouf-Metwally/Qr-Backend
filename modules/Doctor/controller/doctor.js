const Doctor = require("../../../DB/model/doctor")
const Topics = require("../../../DB/model/Topics")
const Matrial = require("../../../DB/model/Matrial")
const StAttendance = require("../../../DB/model/StudentAttendance")

/////////matreails/////////////// 
const getDrmat =  async (req, res, next) =>{
    const Mat = { dID } = req.body

    const doctor = await Doctor.findOne({ ID: dID })
    if (!doctor) {
        res.json(" student is not added before ")
    }
    if(doctor.Subjects) {
        Doctor.findOne({ ID: dID })
        res.json({ Subjects: doctor.Subjects })
        
    } else {
        res.json({ error })
        console.log(error)
    }
    
}
////////// toppics ////// 
const addtopic = async (req, res, next) => {
    const Top = { Name,Mat_ref } = req.body;
    const matrial = await Matrial.findById({ _id:Mat_ref })
    const topic = await Topics.findOne({ Name,Mat_ref })
    if (topic) {
        res.json("topic has been added before")
    }
    else {
        if (matrial) {
            var ID = await Topics.estimatedDocumentCount()
            ID+=1 
            var QR = `${ID}-${matrial.ID}`
            // const saveQR = new StAttendance.create({ subject:Matrial.Name, id:QR})


        try {
           // const savedtopic = await Topics.([{ Name, QR, Mat_ref }])
////
const newtopic = new Topics({ Name, QR, Mat_ref })
//const savedtopic =await newtopic.save()
const savedtopic =await Topics.create({ID,Name,QR,Mat_ref})


////
            
            var topics =matrial.topics
            topics.push(Name)

            const savedtopicMAtrial = await Matrial.findOneAndUpdate({ _id: Mat_ref }, { topics }, { new: true })
            res.json({ message: "Done", matrial, savedtopic })
        } catch (error) {
            res.json({ error })
            console.log(error)
        }
        } else {
            res.json("Matrial ID not exist")
        }   
    }
}
const removetopic = async (req, res, next) => {
    const Top = { Name,Mat_ref } = req.body;
    const matrial = await Matrial.findById({ _id:Mat_ref })
    const topic = await Topics.findOne({ Name,Mat_ref })
    if (topic) {
        res.json("topic has been added before")
    }
    else {
        if (matrial) {
            var ID = await Topics.estimatedDocumentCount()
            ID+=1 
            var QR = `${ID}-${matrial.ID}`
            // const saveQR = new StAttendance.create({ subject:Matrial.Name, id:QR})


        try {
           // const savedtopic = await Topics.([{ Name, QR, Mat_ref }])
////
const newtopic = new Topics({ Name, QR, Mat_ref })
//const savedtopic =await newtopic.save()
const savedtopic =await Topics.deleteOne({ID,Name,QR,Mat_ref})


////
            
            var topics =matrial.topics
            topics.push(Name)

            const savedtopicMAtrial = await Matrial.findOneAndUpdate({ _id: Mat_ref }, { topics }, { new: true })
            res.json({ message: "Done", matrial, savedtopic })
        } catch (error) {
            res.json({ error })
            console.log(error)
        }
        } else {
            res.json("Matrial ID not exist")
        }   
    }
}
const getDrAlltopic =  async (req, res, next) =>{
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
const getDronetopic =  async (req, res, next) =>{
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
const updateDronetopic =  async (req, res, next) =>{
    const topicmat = { MId,Name } = req.body
    const top = await Topics.findById({_id:MId})
    if (!top){
        res.json("topic is not here")
    }
    if(top){
        const Str = await Topics.updateOne({ Name})

        res.json({message:'done',Str})
    } else {
        res.json({ error })
        console.log(error)
    }   
}

module.exports = {
    getDrmat ,
    addtopic,
    getDronetopic,
    getDrAlltopic ,
    removetopic,
    updateDronetopic
}