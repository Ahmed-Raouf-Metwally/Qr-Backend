const Matrial = require("../../../DB/model/Matrial")


const addMatrial = async (req, res, next) => {
    const Mat = { ID, Name, Code,Level} = req.body;
    const matrial = await Matrial.findOne({ ID })

    if (matrial) {
        res.json({ message: "Matrial exist" })
    } else { 
        const savedmatrial =await Matrial.insertMany([{ ID, Name, Code,Level}])
        res.json({ message: "Done" })
    }
}

module.exports = {
    addMatrial
}