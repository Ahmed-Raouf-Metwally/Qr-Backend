const Doctor = require("../../../DB/model/Doctor")
const User = require("../../../DB/model/Users")
const Matrial = require("../../../DB/model/Matrial")
const bcrypt = require('bcryptjs')
const { json } = require("express")
let salt =process.env.salt



const addDoctor = async (req, res, next) => {
    try {
        const Dr = { ID, Name, Email, matrials, Subjects, Password } = req.body;
        const Password = await bcrypt.hash(Password, salt, function (err, hash) {
            let hashedPassword = hash
        })
        const doctor = await Doctor.findOne({ ID })
        if (doctor) {
            res.json({ message: "ID exist" })
        } else {

            const Role = 3
            const saveduser = await User.insertMany([{ ID, Email, Password: hashedPassword, Role }])
            const savedDoctor = await Doctor.insertMany([{ ID, Name, Email, matrials, Subjects, Password: hashedPassword }])

            res.json({ message: "Done" })
        }
    } catch (error) {
        res.json(error)
    }

}
const addMatrialtodoc = async (req, res, next) => {
    try {
        const Mat = { mID, dID } = req.body;
        // const matrial = await Matrial.findById({ mID})
        // const doctor = await Doctor.findOne({ dID })
        const matrial = await Matrial.findOne({ ID: mID })
        const doctor = await Doctor.findOne({ ID: dID })
        if (!doctor) {
            res.json(" doctor is not added before ")
        }
        if (doctor.Subjects.includes(mID)) {
            res.json(" subject is added before ")
        } else {
            if (matrial) {
                doctor.Subjects.push(mID)
                try {
                    const savedmatrialtoDocr = await Doctor.findOneAndUpdate({ ID: dID }, { Subjects: doctor.Subjects }, { new: true })
                    res.json({ message: "Done", matrial, savedmatrialtoDocr })
                } catch (error) {
                    res.json({ error })
                    console.log(error)
                }
            } else {
                res.json("Matrial ID not exist")
            }
        }
    } catch (error) {


        res.json(error)

    }


}


module.exports = {
    addDoctor,
    addMatrialtodoc
}