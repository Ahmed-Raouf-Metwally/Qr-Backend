// const Topics = require("../../../DB/model/Topics")
// const Matrial = require("../../../DB/model/Matrial")
// const StAttendance = require("../../../DB/model/StudentAttendance")





// const addtopic = async (req, res, next) => {
//     const Top = { Name,Mat_ref } = req.body;
//     const matrial = await Matrial.findById({ _id:Mat_ref })
//     const topic = await Topics.findOne({ Name,Mat_ref })
//     if (topic) {
//         res.json("topic has been added before")
//     }
//     else {
//         if (matrial) {
//             var ID = await Topics.estimatedDocumentCount()
//             ID+=1 
//             var QR = `${ID}-${matrial.ID}`
//             const saveQR = new StAttendance.create({ subject:Matrial.Name, id:QR})


//         try {
//            // const savedtopic = await Topics.([{ Name, QR, Mat_ref }])
// ////
// const newtopic = new Topics({ Name, QR, Mat_ref })
// //const savedtopic =await newtopic.save()
// const savedtopic =await Topics.create({ID,Name,QR,Mat_ref})


// ////
            
//             var topics =matrial.topics
//             topics.push(Name)

//             const savedtopicMAtrial = await Matrial.findOneAndUpdate({ _id: Mat_ref }, { topics }, { new: true })
//             res.json({ message: "Done", matrial, savedtopic })
//         } catch (error) {
//             res.json({ error })
//             console.log(error)
//         }
//         } else {
//             res.json("Matrial ID not exist")
//         }   
//     }
// }


// module.exports = {
//     addtopic
// }


// var QRCode = require('qrcode')
// var canvas = document.getElementById('canvas')

// QRCode.toCanvas(canvas, 'sample text', function (error) {
//   if (error) console.error(error)
//   console.log('success!');
// })
