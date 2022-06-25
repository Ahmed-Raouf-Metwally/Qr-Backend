const Student = require("../../../DB/model/student")
const User = require("../../../DB/model/Users")
const Matrial = require("../../../DB/model/Matrial")
const bcrypt = require('bcrypt')
let salt =process.env.salt
const addStudent = async (req, res, next) => {
    try {
        const stu = { ID, Name, Email, Level, Subjects, Password } = req.body;
        const Password = await bcrypt.hash(Password, salt, function (err, hash) {
            let hashedPassword = hash
        })
        const student = await Student.findOne({ ID })

        if (student) {
            res.json({ message: "ID exist" })
        } else {

            const savedStudent = await Student.insertMany([{ ID, Name, Email, Level, Password: hashedPassword, Subjects }])
            const Role = 4
            const saveduser = await User.insertMany([{ ID, Email, Password: hashedPassword, Role }])

            res.json({ message: "Done" })
        }
    } catch (error) {


        res.json(error)

    }




}

const addMatrialtoOneStud = async (req, res, next) => {
    try {
        const Mat = { mID, sID } = req.body;
        const matrial = await Matrial.findOne({ ID: mID })
        const student = await Student.findOne({ ID: sID })
        if (!student) {
            res.json(" student is not added before ")
        }
        if (student.Subjects.includes(mID)) {
            res.json(" subject is added before ")
        } else {
            if (matrial) {
                student.Subjects.push(mID)
                try {
                    const savedmatrialtoStud = await Student.findOneAndUpdate({ ID: sID }, { Subjects: student.Subjects }, { new: true })
                    res.json({ message: "Done", matrial, savedmatrialtoStud })
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

const RemoveMatrialtoOneStud = async (req, res, next) => {
    try {
        const Mat = { mID, sID } = req.body;
        const matrial = await Matrial.findOne({ ID: mID })
        const student = await Student.findOne({ ID: sID })
        if (!student) {
            res.json(" student is not added before ")
        }
        if (!student.Subjects.includes(mID)) {
            res.json(" subject is not added before ")
        } else {
            if (matrial) {
                student.Subjects.pop(mID)
                try {
                    const savedmatrialtoStud = await Student.findOneAndUpdate({ ID: sID }, { Subjects: student.Subjects }, { new: true })
                    res.json({ message: "Done", matrial, savedmatrialtoStud })
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

const AddMatrialToAllStud = async (req, res, next) => {
    const { mID, sLv } = req.body;
    try {
        const material = await Matrial.findOne({ ID: mID });
        //const students = await Student.find({Level:sLv});
        if (material) {
            const savedmatrialtoAllStud = await Student.updateMany({ Level: sLv, Subjects: { "$ne": mID } }, { "$push": { Subjects: mID } });
            res.status(200).json({ message: "Done", savedmatrialtoAllStud });
        }
        else {
            res.status(404).json({ message: "Material not found" });
        }

    } catch (e) {
        res.status(500).json({ message: "Internal server error", error: e });
    }
}
module.exports = {
    addStudent,
    addMatrialtoOneStud,
    AddMatrialToAllStud,
    RemoveMatrialtoOneStud
}



// const addMatrialtoAllStud = async(req,res,next)=>{
//     const Mat = {mID,sLv}=req.body;
//     const matrial = await Matrial.findOne({ID:mID})
//     const students = await Student.find({Level:sLv})
//     if(!students){
//         res.json("students are not added before")
//     }
//     if(students.Subjects.includes(mID)){
//         res.json("subject is added before")
//     }else{
//         if(matrial){
//             students.Subjects.push(mID)
//             try {
//                 const savedmatrialtoAllStud = await students.updateMany({ Level: sLevl }, { Subjects: students.Subjects}, { new: true })
//                 res.json({ message: "Done", matrial, savedmatrialtoAllStud })
//             } catch (error) {
//                 res.json({ error })
//                 console.log(error)
//             }
//         }else {
//             res.json("Matrial ID not exist")
//         }
//     }
// }